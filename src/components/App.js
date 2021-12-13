import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "./Loader/Loader";
import imageApi from "./services/api";
import SearchBar from "./SearchBar/SearchBar.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import Modal from "./Modal/Modal.jsx";
import Button from "./Button/Button.jsx";
import "./App.css";

class App extends Component {
  state = {
    searchbar: "",
    status: "idle",
    result: [],
    isLoading: false,
    page: 1,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchbar;
    const nextSearch = this.state.searchbar;

    if (prevSearch !== nextSearch) {
      this.setState({ status: "pending", page: 1 });
      this.fetchImageApi();
    }
  }

  fetchImageApi = () => {
    const { searchbar, page } = this.state;
    imageApi(searchbar, page)
      .then((images) => {
        if (images.total === 0) {
          this.setState({ error: "No any picture", status: "rejected" });
        } else {
          this.setState((prevState) => ({
            result: [...prevState.result, ...images.hits],
            status: "resolved",
            page: prevState.page + 1,
            searchbar: searchbar,
          }));
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  loadMore = () => {
    this.setState({
      status: "pending",
    });
    // this.setState((prevState) => ({
    //   page: prevState.page + 1,
    // }));

    this.fetchImageApi();
  };

  modalOpen = (moduleUrl, moduleAlt) => {
    this.setState({
      largeImageURL: moduleUrl,
      alt: moduleAlt,
    });
  };
  modalClose = () => {
    this.setState({ largeImageURL: "", alt: "" });
  };
  onFormSubmit = (searchName) => {
    this.setState({ searchbar: searchName, page: 1, result: [], error: null });
  };
  render() {
    const { result, status, error, alt, largeImageURL } = this.state;
    return (
      <div>
        <SearchBar submit={this.onFormSubmit} />
        {status === "pending" && <Spinner />}

        {status === "resolved" && (
          <>
            <ImageGallery modalOpen={this.modalOpen} result={result} />
            <Button onClick={this.loadMore} />
          </>
        )}
        {largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onClick={this.modalClose}
          />
        )}

        {status === "rejected" && <p>{error}</p>}
      </div>
    );
  }
}
export default App;

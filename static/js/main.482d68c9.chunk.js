(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2XYfR",Modal:"Modal_Modal__ISCFm"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__orjEX"}},16:function(e,t,a){e.exports={Button:"Button_Button__36R1f"}},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(12),o=a.n(c),l=a(11),s=a(3),i=a(4),u=a(6),m=a(5),h=(a(21),a(13)),p=a.n(h),b=a(0),d=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p.a,{type:"ThreeDots",color:"#00BFFF",height:90,width:90,timeout:2500})})};var g,j={fetchImg:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("23907146-6bbb396b18ee8800d3622a6a4","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No images on request"))}))}},f=a(14),O=a(7),v=a.n(O),y=["title","titleId"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},x.apply(this,arguments)}function S(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function I(e,t){var a=e.title,n=e.titleId,c=S(e,y);return r.createElement("svg",x({id:"Layer_1_1_",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,g||(g=r.createElement("path",{d:"M5,10c1.198,0,2.284-0.441,3.147-1.146l7,7l0.707-0.707l-7-7C9.559,7.284,10,6.198,10,5c0-2.757-2.243-5-5-5S0,2.243,0,5 S2.243,10,5,10z M5,1c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4S1,7.209,1,5C1,2.791,2.791,1,5,1z"})))}var _=r.forwardRef(I),w=(a.p,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchbar:""},e.handleSubmit=function(t){t.preventDefault(),e.props.submit(e.state.searchbar),e.reset()},e.handleInputChange=function(t){var a=t.currentTarget,r=a.name,n=a.value;e.setState(Object(f.a)({},r,n))},e.reset=function(){e.setState({searchbar:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchbar;return Object(b.jsx)("header",{className:v.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.SearchForm,children:[Object(b.jsxs)("button",{type:"submit",className:v.a.SearchFormButton,children:[Object(b.jsx)(_,{width:"20",height:"20"}),Object(b.jsx)("span",{className:v.a.SearchFormButtonLabel})]}),Object(b.jsx)("input",{className:v.a.SearchFormInput,type:"text",name:"searchbar",value:e,onChange:this.handleInputChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component)),k=w,L=a(9),F=a.n(L),B=function(e){var t=e.alt,a=e.src,r=e.url,n=e.modalOpen;return Object(b.jsx)("li",{className:F.a.ImageGalleryItem,onClick:function(){n(r,t)},children:Object(b.jsx)("img",{src:a,alt:t,className:F.a.ImageGalleryItemImage})})},C=a(15),E=a.n(C);function R(e){var t=e.modalOpen,a=e.result;return Object(b.jsx)("ul",{className:E.a.ImageGallery,children:a.map((function(e){var a=e.id,r=e.tags,n=e.webformatURL,c=e.largeImageURL;return Object(b.jsx)(B,{alt:r,src:n,url:c,modalOpen:t},a)}))})}var N=a(10),U=a.n(N),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).cleanEventListener=function(t){"Escape"===t.code&&e.props.onClick()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.cleanEventListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.cleanEventListener)}},{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.largeImageURL,r=e.alt;return Object(b.jsx)("div",{className:U.a.Overlay,onClick:t,children:Object(b.jsx)("div",{className:U.a.Modal,children:Object(b.jsx)("img",{src:a,alt:r})})})}}]),a}(r.Component),M=G,D=a(16),z=a.n(D),P=function(e){var t=e.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"button",className:z.a.Button,onClick:t,children:"Load more"})})},A=(a(43),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchbar:"",status:"idle",result:[],isLoading:!1,page:1,error:null},e.loadMore=function(){e.setState((function(e){return{page:e.page+1,status:"pending"}}))},e.modalOpen=function(t,a){e.setState({largeImageURL:t,alt:a})},e.modalClose=function(){e.setState({largeImageURL:"",alt:""})},e.onFormSubmit=function(t){e.setState({searchbar:t,page:1,result:[],error:null})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=t.searchbar,n=this.state.searchbar,c=t.page,o=this.state.page;o>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),r!==n&&this.setState({result:[],status:"pending"}),r===n&&c===o||j.fetchImg(n,o).then((function(e){var t=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));t.length>0?a.setState((function(e){return{result:[].concat(Object(l.a)(e.result),Object(l.a)(t)),status:"resolved"}})):(alert("No any picture"),a.setState({status:"idle"}))})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.status,r=e.error,n=e.alt,c=e.largeImageURL;return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{submit:this.onFormSubmit}),"pending"===a&&Object(b.jsx)(d,{}),"resolved"===a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(R,{modalOpen:this.modalOpen,result:t}),Object(b.jsx)(P,{onClick:this.loadMore})]}),c&&Object(b.jsx)(M,{largeImageURL:c,alt:n,onClick:this.modalClose}),"rejected"===a&&Object(b.jsx)("p",{children:r})]})}}]),a}(r.Component)),J=A;o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__28ytt",SearchForm:"SearchBar_SearchForm__1Drg1",SearchFormButton:"SearchBar_SearchFormButton__36LBF",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__3yDKg",SearchFormInput:"SearchBar_SearchFormInput__1iDLE"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1ZhxJ",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2DiSz"}}},[[44,1,2]]]);
//# sourceMappingURL=main.482d68c9.chunk.js.map
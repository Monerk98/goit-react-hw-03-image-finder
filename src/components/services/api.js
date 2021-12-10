export default function fetchImg(searName, pages) {
  const KEY = `23907146-6bbb396b18ee8800d3622a6a4`;
  return fetch(
    `https://pixabay.com/api/?q=${searName}&page=${pages}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res=> {
      if(res.ok){
          return res.json()
      }
      return Promise.reject(new Error (`No images on request`))
  })
}

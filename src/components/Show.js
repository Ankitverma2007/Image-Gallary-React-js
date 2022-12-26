import React from 'react';

const Show = (props) => {
    const {gallery, setGallery} = props;
    let galleryList = <h1 className="text-center w-100">Empty</h1>;
  if (gallery.length > 0) {
    galleryList = gallery.map((item, index) => (
      <div key={index} className="card me-3 mb-3" style={{ width: "18rem"}}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body ">
          <p className="card-text d-flex justify-content-between">
            <span>
            {item.title} | {item.author}
            </span>
            <i onClick={()=>DeleteHandler(index)}
            className = " fs-4 text-danger ri-delete-bin-5-line"></i>
          </p>
        </div>
      </div>
    ));
  }
    const DeleteHandler = (index)=>{
        const copyGallery = gallery.filter((g,i)=> i !==index)
        setGallery(copyGallery);
          }
  return (
    <div className="container d-flex flex-wrap">{galleryList}</div>
  );
}

export default Show;

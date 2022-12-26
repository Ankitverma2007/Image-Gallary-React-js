import React,{useState,useRef} from 'react'

export default function Create(props) {
  const titleref = useRef(null);
  const authorref = useRef(null);
  const imageref = useRef(null);
  const btnref = useRef(null);
    const {gallery, setGallery} = props;
    const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const TitleHandler = (e) => {
    setTitle(e.target.value);
    if (titleref.current.value.length < 4) {
      titleref.current.style.border = "1px solid red";
      titleref.current.style.outline = "1px solid red";
    }else{
      titleref.current.style.border = "1px solid green";
      titleref.current.style.outline = "1px solid green";
    }
    if(title.length>4 && author.length>3 && image.length>5){
      btnref.current.disabled = false;
    }else{
      btnref.current.disabled = true;
    }
  };

  const AuthorHandler = (e) => {
    setAuthor(e.target.value);
    if (authorref.current.value.length < 3) {
      authorref.current.style.border = "1px solid red";
      authorref.current.style.outline = "1px solid red";
    }else{
      authorref.current.style.border = "1px solid green";
      authorref.current.style.outline = "1px solid green";
    }
  };

  const ImageHandler = (e) => {
    setImage(e.target.value);
    if (imageref.current.value.length < 5) {
      imageref.current.style.border = "1px solid red";
      imageref.current.style.outline = "1px solid red";
    }else{
      imageref.current.style.border = "1px solid green";
      imageref.current.style.outline = "1px solid green";
    }
  };


  const SubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || image === "" || author === "") {
      alert("All fields are required");
    } else {
      const newGallery = { title, image, author };
      setGallery([...gallery, newGallery]);
      setTitle("");
      setImage("");
      setAuthor("");
    }
  };
  return (
    <div>
       <form onSubmit={SubmitHandler} className="w-50 container mt-5">
        <input
          className="form-control mb-4 fs-4"
          type="text"
          placeholder="title"
          onChange={TitleHandler}
          value={title}
          ref={titleref}
        />
        <input
          className="form-control mb-4 fs-4"
          type="text"
          placeholder="author"
          onChange={AuthorHandler}
          value={author}
          ref={authorref}
        />
        <input
          className="form-control mb-4 fs-4"
          type="text"
          placeholder="image url"
          onChange={ImageHandler}
          value={image}
          ref={imageref}
        />
        <button ref={btnref} className="btn btn-success w-50 fs-4">Add</button>
      </form>
      <hr className="container" />
    </div>
  )
}

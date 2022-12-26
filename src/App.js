import React, { useState } from "react";
import Show from"./components/Show"
import Create from"./components/Create"
function App() {
  const [gallery, setGallery] = useState([]);
  return (
    <div className="App">
      <Create gallery={gallery} setGallery={setGallery}/>
      <Show gallery = {gallery} setGallery ={setGallery}/>
    </div>
  );
}

export default App;

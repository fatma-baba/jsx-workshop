import React from 'react'
import './App.css';
import './style.css'
import srcImage from './imageInSrc.jpg'
function App() {
  const name = "Fatma Maammer Saadallah"
  return (
    <React.Fragment>
      <div style={{ border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className={"title red"}>{name}</h1>
        <br />
        <img src={srcImage}/>
        <br />
        <img src="/imageInPublic.jpeg"/>
      </div>
      <video width="320" height="240" controls>
      <source src="/myVideo.mp4" type="video/mp4"/>
      </video>
    </React.Fragment>
  );
}

export default App;

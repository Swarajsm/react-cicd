import React from "react";
import photo from "../images/photo1.jpeg";

export default function Home() {
    return (
      <div className="App">
        <img src={photo} className="display" alt="product" />
      </div>
    );
  }
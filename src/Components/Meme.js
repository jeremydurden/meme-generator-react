import { useState } from "react";

import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    let random = Math.floor(Math.random() * memesData.data.memes.length);
    setMemeImage(memesData.data.memes[random].url);
  }
  return (
    <main className="meme--container">
      <div action="" className="meme--form">
        <div className="meme--flexform">
          <input type="text" className="meme--input" placeholder="Top Text" />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
          />
          <button onClick={getMemeImage} className="meme--button">
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <img className="meme--image" src={`${memeImage}`} alt="" />
    </main>
  );
}

export default Meme;

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

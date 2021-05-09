import React from "react";

export default function Phonetics(props) {
  function playPronunciation(event) {
    event.preventDefault();
    let Pronunciation = new Audio(props.phonetics.audio);
    Pronunciation.play();
  }

  return (
    <div className="Phonetics">
      <small>
          <button className="btn btn-outline-success" onClick={playPronunciation}>
        <span role="img" aria-label="here">📢 Play </span>
      </button>
        {" "}{props.phonetics.text}</small>
    </div>
  );
}
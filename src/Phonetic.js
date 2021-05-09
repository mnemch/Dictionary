import React from "react";

export default function Phonetic(props) {
// console.log(props.phonetic);
return  (
    <div className="Phonetic">
        <a href={props.phonetic.audio} rel="noreferrer" target="_blank" >
        Op 
        </a>
        {props.phonetic.text}
         </div>
);
}
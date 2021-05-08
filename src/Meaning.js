import React from "react";

export default function Meaning(props) {
console.log(props.meaning)
return (
    <div> 
<h3> {props.meaning.part0fSpeech}</h3>
<p> {props.meaning.definitions[0].definition}</p>
<p> {props.meaning.definitions[0].example}</p>
</div>
)
}
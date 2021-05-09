import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
// console.log(props.meaning)
return (
    <div className="Meaning"> 
<h3> {props.meaning.part0fSpeech}</h3>
{props.meaning.definitions.map(function (definition, index)
{
    return (
        <div key={index}>
<p> {definition.definition}</p>
<br />
<p> {definition.example}</p>
<br />
<strong> <Synonyms synonyms={definition.synonyms} /></strong>
</div>
    );
})}
</div>
);
}
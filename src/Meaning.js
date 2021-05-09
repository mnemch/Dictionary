import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
// console.log(props.meaning)
return (
    <div className="Meaning"> 
    <h3> {props.meaning.partOfSpeech}</h3>

    {props.meaning.definitions.map(function (definition, index) {
    return (
        <section key={index}>
          <hr></hr>
            <div className="Definition">Definition :{definition.definition}</div>
            <div className="Example">Examples: {definition.example}</div>
            <div>Synonyms:
            <Synonyms synonyms={definition.synonyms} /></div>
            <hr></hr>
        </section>
        );
      })}
    </div>
  );
}
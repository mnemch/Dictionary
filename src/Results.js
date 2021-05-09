import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"

export default function Results(props) {
    if (props.data) {
    return (
    <div className="Results"> 
    <div>
    <h1 className="Word">{props.data.word} </h1>
        {props.data.phonetics.map(function (phonetics, index){
        return (
            <div key={index}>
                <Phonetics phonetics={phonetics}/> 
                </div>
        );
        })}
        </div >
        <div className="Meaning">
        {props.data.meanings.map(function (meaning, index){
        return (
        <div key={index}>
        <Meaning meaning={meaning}/>
        </div>
        );})}
        </div>
    </div>);
    } else {
        return null;
    }
}
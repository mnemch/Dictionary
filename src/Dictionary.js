import React, { useState } from "react";
import "./Dictionary.css";

// let apikey from map = "eb1733f56daae1f8c299ea8db424ea64";

export default function Dictionary(props) {
    let [searchWord, setSearchWord] = useState(props.defaultTerm);
    
    function handSearchChange(event) {
    setSearchWord(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`you are searching for ${searchWord}`);
    }

    return (
        <div classname="Dictionary">
            <form onSubmit={search}>
            <input type="search" onChange={handSearchChange} placeholder="Please enter your word here 🪄 "/>
            </form>
            </div>
    );
}

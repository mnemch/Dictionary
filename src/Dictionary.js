import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

// let apikey from map = "eb1733f56daae1f8c299ea8db424ea64";
//https://api.dictionaryapi.dev/api/v2/entries/en_UK/hello
//Your API key from https://www.pexels.com/: 563492ad6f917000010000010c07d0b470024e508205a11acb696a0a

export default function Dictionary(props) {
    let [searchWord, setSearchWord] = useState(props.defaultTerm);
    // let [photos, setPhotos] = useState(null);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handSearchChange(event) {
    setSearchWord(event.target.value);
    }
    
    function handResponse(response) {
    setResults(response.data[0]);
    }

    // function handPexelsResponse(response) {
    // setPhotos(response.data.photos);
    // }

    function search(event) {
        event.preventDefault();
        // alert(`you are searching for ${searchWord}`);
        // dictionary api documentation: https://dictionaryapi.dev/
        // https://api.dictionaryapi.dev/api/v2/entries/en_US/hello 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
        axios.get(apiUrl).then(handResponse);

        //  pexels api documentation: https://www.pexels.com/api/documentation/
    //     let pexelsApiKey ="563492ad6f917000010000010c07d0b470024e508205a11acb696a0a";
    //     let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=2`;
    // axios
    //   .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
    //   .then(handPexelsResponse);
  }
    function load() {
    setLoaded(true);
    search();
  } 

  if (loaded) {
    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
            <input type="search" onChange={handSearchChange} placeholder="Please enter your word here 🪄 "/>
            </form>
            </section>
   
            <Results results={results}/>

            </div>
    );
  } else {
      load();
      return null;
  }
}

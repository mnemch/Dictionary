import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [searchWord, setSearchWord] = useState(props.defaultTerm);
    let [photos, setPhotos] = useState(null);
    let [data, setData] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handSearchChange(event) {
    setSearchWord(event.target.value);
    }
    
    function handResponse(response) {
    setData(response.data[0]);
    }

    function handPexelsResponse(response) {
    setPhotos(response.data.photos);
    }

    function handSubmit(event) {
    event.preventDefault();
    search();
    }

    function search(event) {
        // dictionary api documentation: https://dictionaryapi.dev/
        // https://api.dictionaryapi.dev/api/v2/entries/en_US/hello 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
        axios.get(apiUrl).then(handResponse);
         // pexels api documentation: https://www.pexels.com/api/documentation/
        let pexelsApiKey ="563492ad6f917000010000010c07d0b470024e508205a11acb696a0a";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=4`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handPexelsResponse);
  }

    function load() {
    setLoaded(true);
    search();
  } 

    if (loaded) {
    return (
      <div className="Dictionary">
          <section className="searchline">
        <form onSubmit={handSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                onChange={handSearchChange}
                placeholder="Please enter your word here 🪄 SheCodes react and radio"
                className="form-control"
              />{" "}
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-outline-success" />{" "}
            </div>
          </div>
        </form>
        </section>
        <section className="card">
        <Results data={data} />
        <Photos photos={photos} altProp={searchWord} />
        </section>
      </div>
    );
    } else {
    load();
    return null;
  }
}

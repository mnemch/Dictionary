import React from "react";

export default function Footer() {
  return (
    <div className="footer">
    <div className="hellohi">
        <div className="Name">
        <a href="https://github.com/mnemch/Dictionary" target="_blank" rel="noreferrer">
            Open-source code {""}
        </a>
        by Mariia Nemchinova
        </div>
        <a href="https://www.linkedin.com/in/mariia-nemchinova-693609110/" target="_blank" rel="noreferrer"> Linkedin </a>
        <a href="https://twitter.com/Maria91259872" target="_blank" rel="noreferrer"> Twitter </a>
        <a href="https://www.pexels.com"> Pexel </a>
        <br />
        {/* add trabslation sp language */}
        <div className="language">
            <div id="div1">
                {/* <a href="#" rel="noreferrer"  onClick="setLanguage('en')"> 🇬🇧English </a>
                <a href="#" rel="noreferrer" onClick="setLanguage('es')"> 🇪🇸Español </a> */}
            </div>
            </div>
        <div className="year">
            © 2021
        </div>
    </div>
    </div>
  );
}

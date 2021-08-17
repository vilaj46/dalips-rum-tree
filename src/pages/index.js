import * as React from "react"

import rum from "../images/rum.jpg";
import shirt from "../images/shirt.jpg";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Dalips Rum Tree
        <br />
        <span style={headingAccentStyles}>— Current under construction</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉
        </span>
        <br />
        <div style={{display: "flex"}}>
        <img src={shirt} alt="T-Shirt" />
        <img src={rum} alt="Rum!" />
        </div>
      </h1>
    </main>
  )
}

export default IndexPage;

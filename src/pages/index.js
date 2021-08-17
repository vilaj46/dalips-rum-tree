import * as React from "react"
import styled from "styled-components"

import avocado from "../images/avocado.jpg";

const Image = styled.img`
  width: 50%;
  height: 25%;
  margin: 0 auto;
  @media (min-width: 1100px) {
    width: 25%;
  }
`

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

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
  // position: "absolute",
  // top: "0",
  // left: "0"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Dalips Rum Tree
      </h1>

      <Div>
        <h2 style={headingAccentStyles}>— Currently under construction</h2>
        <Image src={avocado} alt="Avocado" />
      </Div>
        
        
        <h3>WE SELL T-SHIRTS, CUSTOM MUGS, CUSTOM MOUSE PADS</h3>
    </main>
  )
}

export default IndexPage;

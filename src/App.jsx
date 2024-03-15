import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";





//여기를 수정해주세요!!
//이름(name)과 명칭(title)만 수정해봅시다.
const siteProps = {
  name: "Yeachan Kim",
  title: "MLSA",
  email: "MLSA@example.com",
  gitHub: "",
  instagram: "",
  linkedIn: "",
  medium: "",
  twitter: "",
  youTube: "",
};






const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

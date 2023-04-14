import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import CambiarTema from "./Components/CambiarTema";
import Footer from "./Components/Footer";

function App() {
  
  const [tema, setTema] = useState("true");

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("tema"));
    if(!currentTheme){
      setTema(currentTheme);
    }
  }, []);

  const toggleTema = () => {
    setTema((tema) => !tema);
    localStorage.setItem("tema",JSON.stringify(!tema));
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <CambiarTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { colorPrimario } from "../UI/Variables";

const StyleHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;


const Btn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${ ({primary}) => primary ? "white" : colorPrimario};
  background: ${ (props) => props.primary ? "transparent" : "white" };
`;

const Header = () => {
  return (
    <StyleHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <Btn href="https://google.com">
          Ayuda
        </Btn>
        <Btn primary href="https://google.com">
          Salir
        </Btn>
      </div>
    </StyleHeader>
  );
};

export default Header;

import styled from "styled-components";
import { theme } from "../../models/Theme";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  padding: 50px;
  background-color: ${theme.dark_theme};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin-top: 40px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 72px;
  color: ${theme.yellow};
  text-align: center;
  cursor: context-menu;
  transform: perspective(400px) rotateX(40deg);
`;

export const SubTitle = styled.h2`
  margin-top: -10px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 42px;
  color: ${theme.yellow};
  text-align: center;
  cursor: context-menu;
  transform: perspective(300px) rotateX(32deg);
`;

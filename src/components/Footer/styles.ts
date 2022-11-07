import styled from "styled-components";
import { theme } from "../../models/Theme";

export const Container = styled.div`
    padding: 20px;
    width: 100%;
    background-color: ${theme.dark_theme};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;    
`;

export const Dev = styled.h2`
    font-family: 'Libre Franklin', sans-serif; 
    font-size: 18px;
    color: ${theme.yellow};
    cursor: context-menu;
`;
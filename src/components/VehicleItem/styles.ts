import styled from "styled-components";
import { theme } from "../../models/Theme";


export const Container = styled.div`
  position: relative;

  width: 400px;
  padding: 25px;
  margin: 30px;
  border: 3px solid black;
  border-radius: 20px;
  background-color: ${theme.dark_blue};
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(0.8);
    border: 3px solid ${theme.gold};
  }
`;

export const MainInfo = styled.div`
  width: 300px;
  height: 100px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.dark_blue};
  text-align: center;
`;

export const Name = styled.h2`
  font-family: "Libre Franklin", sans-serif;
  color: ${theme.gold};
  font-size: 30px;
  background-color: ${theme.dark_blue};
`;

export const Model = styled.h3`
  color: ${theme.white};
  font-size: 18px;
  background-color: ${theme.dark_blue};
`;

export const Manufacturer = styled.h3`
  color: ${theme.gray};
  font-size: 12px;
  background-color: ${theme.dark_blue};
`;

export const ItemImg = styled.img`
  width: 200px;
  margin-bottom: 15px;
  background-color: ${theme.dark_theme};
  border-radius: 50%;
  object-fit: cover;
  position: center;

`;



export const Details = styled.div`
  height: 200px;
  width: 80%;
  padding: 30px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: ${theme.vdark_blue};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DetailWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.vdark_blue};
`;

export const DetailName = styled.h5`
  margin-right: 5px;
  font-size: 16px;
  color: ${theme.white};
  background-color: ${theme.vdark_blue};
`;

export const DetailValue = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.white};
  background-color: ${theme.vdark_blue};
`;

export const BuyButton = styled.button`
  width: 250px;
  height: 100px;
  padding: 5px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  background-color: ${theme.vdark_blue};
  color: ${theme.white};
  border: 1px solid black;
  transition: all 0.5s ease-in-out;
  font-size: 25px;
  text-align: center;

  :hover {
    filter: brightness(0.5);
  }

  span {
    font-weight: bold;
    color: ${theme.gold};
    background-color: ${theme.vdark_blue};
  }
`;

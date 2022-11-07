import styled from 'styled-components';
import { theme } from '../../models/Theme';

interface ResultTitleProps{
    isSucced: boolean;
}

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.vdark_blue};

`;

export const CheckoutResultsWrapper = styled.div`
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const CheckoutResultInfos = styled.div`
    max-width: 800px;
    padding: 30px 30px;
    position: relative;

    background-color: ${theme.vdark_blue};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ResultTitle = styled.h2<ResultTitleProps>`
    font-size: 24px;
    margin-bottom: 10px;

    color: ${({isSucced}) => isSucced ? theme.success : theme.error};
    background-color: ${theme.vdark_blue};
`;

export const ResultMessage = styled.p`
    margin-bottom: 30px;

    font-size: 16px;
    align-self: flex-start;
    background-color: ${theme.vdark_blue};

    color: ${theme.white};
`;

export const GoToHomeButton = styled.button`
    width: 150px;
    height: 50px;
    padding: 5px;
    margin: 2px;

    color: ${theme.white};
    background-color: ${theme.dark_blue};
    font-size: 18px;
    font-weight: bold;
    border-radius: 15px;
    border:2px solid black;
    transition: all 0.5s ease-in-out;
    text-align: center;
    cursor: pointer;

    :hover{
        filter: brightness(0.5);
    }
`;
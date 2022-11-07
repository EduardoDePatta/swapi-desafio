import styled from 'styled-components';
import { theme } from '../../models/Theme';

export const ResumeWrapper = styled.div`
    width: 400px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.vdark_blue};

    hr {
        width: 100%;
        height: 1px;
        margin: 15px;

        background-color: ${theme.vdark_blue};
    }
`;

export const ResumeTitle = styled.h2`
    font-size: 30px;
    font-family: 'Libre Franklin', sans-serif;
    background-color: ${theme.vdark_blue};
    
    color: ${theme.white};
`;

export const ResumeDetailText = styled.h4`
    font-size: 15px;
    font-family: 'Libre Franklin', sans-serif;
    background-color: ${theme.vdark_blue};
    
    color: ${theme.gray};
`;

export const ResumeTotalText = styled.h3`
    margin-bottom: 50px;

    font-size: 20px;
    font-family: 'Libre Franklin', sans-serif;
    background-color: ${theme.vdark_blue};
    
    color: ${theme.white};

    /*span=dinheiro */
    span{
        color: ${theme.gold};
        background-color: ${theme.vdark_blue};
    }
`;

export const FinishCheckout = styled.button`
    width: 150px;
    height: 50px;
    padding: 5px;
    margin: 2px;

    color: ${theme.dark_theme};
    background-color: ${theme.yellow};
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

    :disabled{
        filter: brightness(0.2);
        cursor: not-allowed;
    }
`;

export const CancelCheckout = styled.button`
    width: 150px;
    height: 50px;
    padding: 5px;
    margin: 2px;

    color: ${theme.white};
    background-color: ${theme.error};
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
import styled from 'styled-components';
import { theme } from '../../models/Theme';
import { Formik, Form } from 'formik';

interface CreditCardProps {
    isCreditCard: boolean;
}

export const Container = styled.div `
    min-height: 100vh;
    width: 100%;
    padding: 30px;
    position: relative;

    background-color: ${theme.dark_theme};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    /*Texto CHECKOUT*/
    h1 {
        margin-bottom: 15px;


        font-family: 'Libre Franklin', sans-serif;
        transform: perspective(300px) rotateX(25deg);
        font-size: 50px;
        color: ${theme.yellow};
        text-align: center;
        cursor: context-menu;

    }
`;

export const FormikWrapper = styled(Formik)`

   
`;

export const CheckoutWrapper = styled(Form)`  
    position: relative;
    max-width: 1440px;
    padding: 30px;
    background-color: ${theme.vdark_blue};
    border-radius: 30px;
    border: 3px solid ${theme.dark_blue};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;


export const UserPaymentWrapper = styled.div`
    display: flex;
    background-color: ${theme.dark_blue};
    border-radius: 15px;
`;

export const Infos = styled.fieldset`
    padding: 20px;

    border-radius: 10px;

    background-color: ${theme.dark_blue};
    border: 0;

    margin-right: 30px;

    legend{
        color: ${theme.gray};
        background-color: ${theme.dark_blue};
    }

    h2{
        font-size: 20px;

        color: ${theme.white};
        background-color: ${theme.dark_blue};
    }
`;

export const PaymentMethod = styled.div`
    margin-bottom: 20px;
    background-color: ${theme.dark_blue};

    display: flex;
`;

export const CreditCard = styled.div<CreditCardProps>`
    overflow-y: hidden;
    width: 360px;
    height: ${({isCreditCard}) => isCreditCard ? '300px' : '0px'};
    padding: ${({isCreditCard}) => isCreditCard ? '30px' : '0px'};

    border-radius: 10px;
    background-color: ${theme.dark_blue};

    transition: all 0.2s ease-in-out;
`;

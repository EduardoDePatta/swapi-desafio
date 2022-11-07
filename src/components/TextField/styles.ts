import styled from 'styled-components';
import { theme } from '../../models/Theme';
import { Field } from 'formik';

export const Container = styled.div`
    width: 300px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.dark_blue};
    

`;

export const FieldLabel = styled.label`
    width: 100%;
    font-size: 16px;
    color: ${theme.yellow};
    background-color: ${theme.dark_blue};
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 100;

`;

export const FormikField = styled(Field)`
    width: 100%;
    height: 30px;
    padding: 5px;
    
    color: ${theme.white};
    background-color: ${theme.vdark_blue};
    border-radius: 5px;
   

`;

export const ErrorLabel = styled.div`
    width: 100%;

    font-size: 12px;

    color: ${theme.lerror};
    background-color: ${theme.dark_blue};
`;
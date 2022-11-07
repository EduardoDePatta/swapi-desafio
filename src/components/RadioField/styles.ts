import { Field } from 'formik';
import styled from 'styled-components';
import { theme } from '../../models/Theme';


export const Container = styled.div`
    margin-right: 40px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.dark_blue};
`;

export const FieldLabel = styled.label`
    margin-right: 10px;

    color: ${theme.white};
    background-color: ${theme.dark_blue};
`;

export const FormikField = styled(Field)`
    width: 20px;
    height: 20px;
    padding: 5px;
    
    color: ${theme.vdark_blue};
    background-color: ${theme.dark_blue};
    
    border-radius: 5px;
`;

export const ErrorLabel = styled.div`
    width: 100%;

    font-size: 12px;

    color: ${theme.lerror};
`;
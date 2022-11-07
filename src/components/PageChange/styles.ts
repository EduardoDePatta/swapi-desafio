import styled from 'styled-components';
import { theme } from '../../models/Theme';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
`;

export const ChangePageSelector = styled.button`
    width: 250px;
    height: 80px;
    margin: 10px;
    cursor: pointer;
    border-radius: 30px;
    background-color: ${theme.dark_theme};
    color: ${theme.white};
    font-size: 30px;
    border: 2px solid white;
    transition: all 0.5s ease-in-out;

    :disabled{
        cursor: not-allowed;
        filter: brightness(0.2);
    }

    :enabled:hover {
        border: 2px solid ${theme.gold};
        filter: brightness(0.6);
    }
`;


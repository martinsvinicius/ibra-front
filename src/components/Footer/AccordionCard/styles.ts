import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface ContainerProps {
    isactive: string;
}

export const Container = styled(Card)<ContainerProps>`
    width: 100%;
    border: 0;
    background-color: var(--background-gray);

    div.card-header {
        width: 100%;
        background-color: ${props => (props.isactive === "true") ? "var(--blue-300)" : "var(--blue-200)"};
        color: #fff;
        font-weight: 600;
        font-size: 1.5rem;

        transition: all .2s;

        &:hover {
            background: var(--blue-300) !important;
        }
    }

    ul {
        list-style: none;

        li {
            font-weight: 500;
            color: var(--gray);
            padding: 0.5rem 0;
            font-size: 1.2rem;

            a {
                text-decoration: none;
            }
        }
    }
`;

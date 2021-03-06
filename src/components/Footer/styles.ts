import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    padding-bottom: 2rem;

    hr {
        background-color: #F2F2F2;

        @media (max-width: 1035px) {
            margin-top: 0;
        }
    }

    a#linkedinFooterLogo {
        display: block;
        margin: 0 auto;
        width: 40px;
        
        transition: all .2s;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 1035px) {
        img, a#linkedinFooterLogo {
            width: 25px;
            height: 25px;
        }
    }
`;

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    max-width: 1632px;
    margin: 0 auto;

    align-items: center;

    padding: 1.5rem 3rem;

    img {
        width: 11rem;
        height: 12rem;
    }

    div {
        display: flex;
        justify-content: space-between;

        @media (max-width: 1035px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }

    @media (max-width: 1035px) {
        display: flex;
        flex-direction: column;

        padding: 1.5rem 0 0 0;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 250px;

    strong {
        color: var(--blue-active);
        font-weight: 700;
        font-size: 18px;
    }

    p {
        margin: 1rem 0 2rem;
        text-align: justify;
        color: var(--gray-100);

        b:last-child {
            color: var(--blue-active);
        }

        @media (max-width: 1035px) {
            text-align: center;
            width: 80%;
            margin: 1rem auto 2rem;
        }
    }

    @media (max-width: 1035px) {
        margin-top: 4rem;
    }
`;

export const LinksList = styled.ul`
    list-style: none;
    font-weight: 500;

    a {
        text-decoration: none;
    }

    li:first-child {
        color: var(--blue-active);
        margin-bottom: 1rem;
    }

    @media (max-width: 1035px) {
        display: none;
    }
`;

export const AccordionLinksList = styled.div`
    display: none !important;
    width: 100%;
    
    @media (max-width: 1035px) {
        display: flex !important;
        flex-direction: column;
    }

    div.accordion {
        width: 100%;
        cursor: pointer;
    }
`;
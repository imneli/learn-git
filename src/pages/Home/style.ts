import styled from 'styled-components';

export const MainSection = styled.section`
    background-color: #393E46;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;

    .commit-template {
        border: none;
        padding: 10px;
        border-radius: 8px;
        background-color: #AAE2DF;
        color: #1e1e1e;
        cursor: pointer;
        font-weight: 700;
        text-align: center;
        display: inline-block;
        margin-bottom: 2rem;
    }

    .commit-template > a {
        color: #1e1e1e;
        text-decoration: none;
    }

    .description {
        color: #c6c6c6;
    }

    .flex-content {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }

    .global-div {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .command {
        color: #AAE2DF;
        padding-bottom: 0.8rem;
    }

    .cards-commands {
        max-width: 360px;
        flex-direction: column;
        background-color: #222831;
        padding: 2rem;
        border-radius: 1.5rem;
        margin: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        h1 {
            text-align: center;
            color: white;
            margin-bottom: 1rem;
        }
    }

    .cards-commands:hover {
        transition: .3s;
        transform: scale(1.02);
    }

    @media (max-width: 768px) {
        padding: 2rem;

        .global-div {
            flex-direction: column;
            align-items: center;
        }

        .cards-commands {
            max-width: 100%;
            margin: 0.5rem 0;
        }
    }

    @media (max-width: 480px) {
        padding: 1rem;

        .commit-template {
            font-size: 0.8rem;
            padding: 8px;
        }

        .global-div {
            gap: 1rem;
        }

        .cards-commands {
            padding: 1.5rem;
        }

        .description {
            font-size: 0.9rem;
        }

        .command {
            font-size: 0.9rem;
        }
    }
`;

export const ContainerDivs = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
`;

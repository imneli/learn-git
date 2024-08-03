import styled from 'styled-components'

export const MainSection = styled.section`
    background-color: #393E46;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;

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
    }

    .command {
        color: #AAE2DF;
        padding-bottom: 0.8rem;
    }

    .cards-commands {
        max-width: 300px;
        flex-direction: column;
        background-color: #222831;
        padding: 2rem;
        border-radius: 1.5rem;

        h1 {
            text-align: center;
            color: white;
            margin-bottom: 1rem;
        }
    }

    .cards-commands:hover {
        transition: .3s;
        scale: 1.02;
    }
`

export const ContainerDivs = styled.div`
    display: flex;
    gap: 1.5rem;
    `


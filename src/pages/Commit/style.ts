import styled from 'styled-components';

export const SectionError = styled.div`
 .commit-template {
        border: none;
        padding: 10px;
        border-radius: 8px;
        background-color: #AAE2DF;
        color: #1e1e1e;
        cursor: pointer;
        font-weight: 700;

        
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
    }

    .command {
        color: #AAE2DF;
        padding-bottom: 0.8rem;
    }

    .cards-commands {
        max-width: 500px;
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
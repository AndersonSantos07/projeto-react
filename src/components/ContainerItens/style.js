import styled from 'styled-components'


export const ContainerItens = styled.div`
    display:flex;
    flex-direction: column;
    padding:50px 36px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    height: 100vh;

    ${props => props.newStyle && `

        backdrop-filter: blur(22.5px);
        min-height:calc(100vh - 170px);
        overflow:auto;

        &::-webkit-scrollbar{
            width:10px;
            border-radius:100px;
        }
        &::-webkit-scrollbar-track {
            background: purple;
            border-radius:100px;      
        }

        &::-webkit-scrollbar-thumb {
            background-color: blue;   
            border-radius: 61px;     
            border: 1px solid blue;
    }
    `}

`
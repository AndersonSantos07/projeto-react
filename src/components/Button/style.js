import styled from "styled-components";


export const Button = styled.button`

    display:flex;
    align-items: center;
    justify-content: center;
    gap:15px;
    margin-top: 130px;

    text-decoration: none;


    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    width: 342px;
    height: 74px;
    min-height:74px;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
    border:none;
    cursor:pointer;

    &:hover{
        opacity:0.8
    }

    &:active{

        opacity:0.5;
    }

    ${props => props.newStyle &&`
        margin-top:70px;
        background: transparent;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
    
        &:hover{
            opacity:0.8
        }

        &:active{

            opacity:0.5;
        }

        img{
            transform:rotateY(180deg);
        }
    
    `}
`
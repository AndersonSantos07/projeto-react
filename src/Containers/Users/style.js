import styled from "styled-components"
import Background from "../../assets/backgroundTwo.svg"


export const Container = styled.div`
    background: url("${Background}");
    background-size:cover;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:40px;
    height: 100vh;
    min-height: 100vh;

`

export const ContainerImage = styled.img`
    margin-top: 30px;

`

export const ContainerItems = styled.div`
    display:flex;
    flex-direction: column;
    padding:50px 36px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
    border-radius: 61px 61px 0px 0px;
    height: 100vh;
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
`
export const Headline = styled.h1`
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom:70px;
    text-align: center;
`


export const Button = styled.button`

    display:flex;
    align-items: center;
    justify-content: center;
    gap:15px;
    margin-top:70px;

    text-decoration: none;

    background: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 14px;
    width: 342px;
    height: 74px;
    min-height:74px;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
    cursor:pointer;

    &:hover{
        opacity:0.8
    }

    &:active{

        opacity:0.5;
    }

    img{
        transform:rotateY(180deg);
    }

`

export const User = styled.li`
    display:flex;
    justify-content: space-around;
    align-items: center;

    margin-top:20px;

    width: 342px;
    height: 58px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    outline:none;
    border:none;

    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button{
        background:none;
        border:none;
        cursor:pointer;
    }

    button:hover{
        opacity: 0.8
    }

    button:active{
        opacity:0.6
    }
`


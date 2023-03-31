import styled from "styled-components"
import Background from "../../assets/background.svg"


export const Container = styled.div`
    background: url("${Background}");
    background-size:cover;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:40px;

`

export const ContainerImage = styled.img`
    margin-top: 30px;

`

export const ContainerItems = styled.div`
    display:flex;
    flex-direction: column;
    padding:50px 36px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    height: 100vh;

`
export const Headline = styled.h1`
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom:70px;
    text-align: center;
`
export const Label = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left:25px;

`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    outline:none;
    border:none;
    width: 342px;
    height: 58px;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    padding-left:25px;
    margin-bottom: 34px;

`

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

`
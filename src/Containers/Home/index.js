/*


FUNÇÃO DA TELA: ADICIONAR NOVO USUÁRIO.




*/
import React, { useState, useRef, } from 'react'
import axios from 'axios'
import { Container, ContainerImage, Label, Input,} from "./style"
import  Button  from '../../components/Button'
import ContainerItens from '../../components/ContainerItens'
import  Headline  from '../../components/Title'
import People from '../../assets/peoples2.svg'
import Arrow from '../../assets/arrow.svg'
import { useHistory } from 'react-router-dom'




//aplicação React
const App = () => {

  const [users, setUsers] = useState([]) //estado array, criando o 'banco de dados Users'
  const inputName = useRef() // referência input, pegando todas as informações do input.
  const inputAge = useRef() // referência age, pegando todas as informações do input.
  const history = useHistory()


  //função assíncrona criadora de usuários.
  async function addNewUser() {


    //desestruturando o objeto e dando o nome de newUser, que recebe o usuário criado, enviando os name e age para o back e retornando o usuário criado com id.
    const { data: newUser } = await axios.post("http://localhost:3002/users", { name: inputName.current.value, age: inputAge.current.value })

    //alterando o estado, adicionando novas informações com spread operator, subscrevendo o valor. 
    setUsers([...users, newUser])

    history.push("/usuarios")

  }



  return (
    <Container>
      <ContainerImage alt="Peoples" src={People} />

      <ContainerItens>
        <Headline>Olá</Headline>

        <Label>Nome</Label>
        <Input ref={inputName} placeholder='Nome' />
        <Label>Idade</Label>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt='arrow' src={Arrow} /></Button>

      </ContainerItens>
    </Container>

  )
}
export default App
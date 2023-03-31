import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, ContainerImage, ContainerItems, Headline, Button, User } from "./style"
import People from '../../assets/peoples1.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import { useHistory } from 'react-router-dom'


//aplicação React
const Users = () => {

  const [users, setUsers] = useState([]) //estado array, criando o 'banco de dados Users'
  const history = useHistory()

  //react Hooks - useEffect, efeito colateral, assim que a página é carregada ele mostra todos os usuários criados ou quando o estado é alterado.
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3002/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [users])




  //função assíncrona deletando usuário no front e back.
  //userId chega como parametro enviado ao clicar no botão. nele vem o id do usuário selecionado
  async function deleteUser(userId) {

    await axios.delete('http://localhost:3002/users/' + userId)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)


  }

  function backPage() {

    history.push("/")
  }





  return (
    <Container>
      <ContainerImage alt="Peoples" src={People} />

      <ContainerItems>
        <Headline>Usuários</Headline>


        <ul>
          {users.map(user =>
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt='trash' src={Trash} /></button>
            </User>)}
        </ul>

        <Button onClick={backPage}><img alt='arrow' src={Arrow} /> Voltar </Button>
      </ContainerItems>
    </Container>

  )
}
export default Users
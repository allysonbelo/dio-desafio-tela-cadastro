import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({ autenticado }) => {

    const navigate = useNavigate(); // Define the navigate function

    const hanfleClickHome = () =>{
        navigate('/')
    }

    const hanfleClickLogin = () =>{
        navigate('/login')
    }

    const hanfleClickSignIn = () =>{
        navigate('/cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Lice Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}

                </Row>

                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/46270902?v=4'/>
                    ) : (
                        <>
                            <MenuRight href='' onClick={hanfleClickHome}> Home </MenuRight>
                            <Button title="Entrar" onClick={hanfleClickLogin}/>
                            <Button title="Cadastrar" onClick={hanfleClickSignIn}/>
                        </>
                    )}

                </Row>
            </Container >
        </Wrapper >
    )
}

export { Header }
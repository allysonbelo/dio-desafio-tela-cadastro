import { useNavigate } from 'react-router-dom'

import {MdPerson, MdEmail, MdLock } from "react-icons/md";

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Column, Container, CriarInfo, CriarLogin, FazerLogin, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'


function Cadastro() {

    const navigate = useNavigate();

    const hanfleClickLogin = () =>{
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form action="">
                        <Input placeholder="Nome completo" leftIcon={<MdPerson  />} />
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant='secondary2' onClick={hanfleClickLogin} type="button"/>
                    </form>
                    <Column>
                        <CriarInfo>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CriarInfo>
                        <CriarLogin>Já tenho conta. <FazerLogin onClick={hanfleClickLogin}> Fazer login </FazerLogin></CriarLogin>
                    </Column>
                </Wrapper>

            </Container>
        </>
    )
}

export { Cadastro }
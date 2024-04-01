import { useNavigate } from 'react-router-dom'

import { MdEmail, MdLock } from "react-icons/md";

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'


function Login() {

    const navigate = useNavigate();

    const hanfleClickSignIn = () =>{
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                    </Title>
                </Column>

                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form action="">
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant='secondary' onClick={hanfleClickSignIn} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>



            </Container>
        </>
    )
}

export { Login }
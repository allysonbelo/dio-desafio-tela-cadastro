
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'

import { Container, Column, Title, TitleHighlight, } from './styles'

function Feed() {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1} className='sticky'>
                    <TitleHighlight># Ranking 5 Top da semana</TitleHighlight>
                    <UserInfo percentual={80} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                    <UserInfo percentual={90} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                    <UserInfo percentual={34} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                    <UserInfo percentual={56} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                    <UserInfo percentual={76} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                    <UserInfo percentual={80} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                    <UserInfo percentual={80} nome='Allyson Belo' image="https://avatars.githubusercontent.com/u/46270902?v=4" />
                </Column>

            </Container>
        </>
    )
}

export { Feed }
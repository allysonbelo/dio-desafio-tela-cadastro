import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://media.licdn.com/dms/image/C4E16AQEVY2e0h5smHw/profile-displaybackgroundimage-shrink_350_1400/0/1633091663526?e=1709164800&v=beta&t=16F9cCvC9NAyanQL_c3JH9ZoTdt-yHaWk0ijhcUDn0k'/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/46270902?v=4'/>
                    <div>
                        <h4>Allyson Belo</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de html e css</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JS</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
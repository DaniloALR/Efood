import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import estrela from '../../assets/images/estrela.png'

import {
    Container,
    Content,
    ItemContainer,
    TitleContainer,
    Title,
    Text,
    Button,
    Score,
    TagContainer,
    Tag     
} from './styles'
import { Link } from 'react-router-dom'

const comidas = [
    {
        id: 1,
        title: 'Hioki Sushi',
        score: '4.9',
        tag: ['Destaque da semana','Japonesa'],
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: sushi,
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        score: '4.6',
        tag: ['Italiana'],
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        score: '4.6',
        tag: ['Italiana'],
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        score: '4.6',
        tag: ['Italiana'],
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        score: '4.6',
        tag: ['Italiana'],
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        score: '4.6',
        tag: ['Italiana'],
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: macarrao,
    },
]

const Main = () => (
    <Container>
        {comidas.map(comida => (
            <ItemContainer key={comida.id}>
                <img src={comida.image} alt="Foto da comida" />
                <TagContainer>
                    {comida.tag.map(t => (
                        <Tag>{t}</Tag>
                    ))}
                </TagContainer>
                <Content>
                    <TitleContainer>
                        <Title>{comida.title}</Title>
                        <Score>
                            <span>{comida.score}</span>
                            <img src={estrela} alt="" />
                        </Score>
                    </TitleContainer>
                    <Text>{comida.description}</Text>
                    <Button to="/saiba-mais" >Saiba mais</Button>
                </Content>
            </ItemContainer>
        ))}
    </Container>
)

export default Main
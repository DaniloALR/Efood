import pizza from '../../assets/images/pizza.png';

import { Container, ItemContainer, Title, Text, Button } from './styles';

const pizzas = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
    },
    {
        id: 2,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
    },
    {
        id: 3,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
    },
    {
        id: 4,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
    },
    {
        id: 5,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
    },
    {
        id: 6,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
    },
]

const Listagem = () => (
    <Container>
        {pizzas.map(p => (
            <ItemContainer key={p.id}>
                <img src={p.image} alt={p.title} />
                <Title>{p.title}</Title>
                <Text>{p.description}</Text>
                <Button>Adicionar ao carrinho</Button>
            </ItemContainer>
        ))}
    </Container>
)

export default Listagem
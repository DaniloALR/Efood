import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
`

export const CartContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;

    &.is-open{
        display: flex;
    }
`

export const Sidebar = styled.aside`
    background-color: ${colors.principal};
    z-index: 1;
    padding: 32px 8px 0 7px;
    max-width: 360px;
    width: 100%;
`

export const Card = styled.li`
    width: 100%;
    background-color: ${colors.cfooter};
    padding: 8px;
    display: flex;
    column-gap: 8px;
    position: relative;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
`
export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.principal};
    margin-bottom: 16px;
`

export const Price = styled.p`
    font-size: 14px;
    color: ${colors.principal};
`

export const Trash = styled.button`
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const TotalPrice = styled.p`
    display: flex;
    justify-content: space-between;
    color: ${colors.cfooter};
    margin-top: 40px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const BuyButton = styled.button`
    width: 100%;
    background-color: ${colors.cfooter};
    padding: 4px 0;
    color: ${colors.principal};
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
`
export const ButtonContainer = styled.div`
    margin-top: 24px;

    ${BuyButton}{
        margin-bottom: 8px;
    }
`

export const InputGroup = styled.div`
    width: 100%;
    margin-bottom: 8px;

    label {
        display: block;
        color: ${colors.cfooter};
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    input{
        width: 100%;
        height: 32px;
        background-color: ${colors.cfooter};
        border: 1px solid ${colors.cfooter};
        padding-left: 8px;

        &.error{
            border: 1px solid red
        }
    }
`

export const Row = styled.div`
    display: flex;
    column-gap: 34px;
`

export const AddCartButton = styled.a`
    background-color: ${colors.cfooter};
    color: ${colors.principal};
    border: none;
    padding: 4px;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    display: block;
    width: 100%;
    cursor: pointer;
`

export const SubmitCartButton = styled.button`
    background-color: ${colors.cfooter};
    color: ${colors.principal};
    border: none;
    padding: 4px;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    display: block;
    width: 100%;
    cursor: pointer;
`

export const CartStage = styled.div`
    display: block;
    &.is-checkout {
        display: none;
    }
`

export const ItemCart = styled.li`
    background-color: ${colors.cfooter};
    display: flex;
    padding: 8px;
    position: relative;
    margin-bottom: 16px;
`

export const ImageItem = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
`

export const InfosItem = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    h3 {
        color: ${colors.principal};
        font-weight: 900;
        font-size: 18px;
        line-height: 21.09px;
    }
    span {
        color: ${colors.principal};
        margin: 16px 0 33px 0;
        font-weight: 400;
        font-size: 14px;
    }
`
export const EmptyText = styled.p`
    text-align: center;
    color: ${colors.cfooter};
`

export const DeleteItemButton = styled.button`
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${trash});
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const InfosCart = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 0 16px 0;
    color: ${colors.fundo};
    weight: 700;
    font-size: 14px;
`
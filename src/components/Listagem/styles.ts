import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    margin-bottom: 120px;
`

export const ItemContainer = styled.div`
    background-color: ${colors.principal};
    padding: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    img{
        margin-bottom: 8px;
    }
`

export const Title = styled.h2`
    color: ${colors.fundo};
    font-size: 16px;
    font-weight: 900;
`

export const Text = styled.p`
    color: ${colors.fundo};
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0;
`

export const Button = styled.button`
    background-color: ${colors.fundo};
    padding: 4px 0;
    color: ${colors.principal};
    font-weight: bold;
    font-size: 14px;
    border: none;
    cursor: pointer;
`
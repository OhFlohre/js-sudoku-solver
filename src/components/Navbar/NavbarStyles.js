import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { barHeight } from '../../constants.json'

export const Bar = styled.div`
    height: ${barHeight}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #000000;
`

export const A = styled(Link)`
    height: 100%;
    width: calc(100% / 3);
    text-align: center;
    text-decoration: none;
    color: #9DB3BE;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: #E8F0F3;
        & > svg > path {
            fill: #E8F0F3;
        }
    }
    &:active {
        color: #E8F0F3;
        & > svg > path {
            fill: #E8F0F3;
        }
    }
`
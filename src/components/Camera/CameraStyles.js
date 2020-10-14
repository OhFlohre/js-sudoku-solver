import styled from 'styled-components'
import { barHeight } from '../../constants.json'

export const CameraContainer = styled.div`
    height: ${window.innerHeight - barHeight};
    width: ${window.innerWidth}
    background-color: #050606;
`
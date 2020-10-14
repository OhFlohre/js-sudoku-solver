import React from 'react'
import styled from 'styled-components'

export default function CameraOverlay({ text, detected, onClick }) {

    return (
        <OverlayContainer onClick={onClick}>
            <FrameContainer>
                <OverlayText>{text}</OverlayText>
                <Frame detected={detected} />
            </FrameContainer>
        </OverlayContainer>
    )
}

const OverlayContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`

const OverlayText = styled.div`
    color: white;
    text-align: center;
    padding-top: 40px;
    font-size: 1.3em;
    font-family: 'Roboto', 'sans-serif';
`

const FrameContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Frame = styled.div`
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    border: ${props => props.detected ? '5px solid #00ff00' : 'none'};
`

import React from 'react'
import styled from 'styled-components'

export default function SplashScreen() {
    return (
        <SplashScreenContainer>
            <SplashText>Loading...</SplashText>
        </SplashScreenContainer>
    )
}

const SplashScreenContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const SplashText = styled.p`
    font-size: 1.4em;
`

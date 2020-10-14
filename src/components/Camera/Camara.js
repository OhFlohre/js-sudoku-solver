import React, { useRef, useEffect, useContext, useState } from 'react'
import { barHeight } from '../../constants.json'

import { CVWorkerContext } from '../../context/workerContext'
import useCamera from '../../hooks/useCamera'

import { CameraContainer } from './CameraStyles'
import CameraOverlay from './CameraOverlay';

export default function Camara() {
    const canvasRef = useRef(null)
    useCamera(canvasRef)

    return (
        <CameraContainer>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight - barHeight}></canvas>
        </CameraContainer>
    )
}

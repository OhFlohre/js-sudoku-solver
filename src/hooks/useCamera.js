import { useState, useEffect } from 'react'
import { barHeight } from '../constants.json'

/**Custom hook to use the phone Camera */
function useCamera(canvasRef) {
    useEffect(() => {
        const videoElement = document.createElement('video')
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const recordConstraints = {
            audio: false,
            video: {
                facingMode: "environment",
                height: {
                    exact: window.innerHeight - barHeight
                }
            }
        }

        const getCameraBounds = (video) => {
            const bounds = {
                sx: (video.videoWidth - window.innerWidth) / 2,
                sy: 0,
                sw: window.innerWidth,
                sh: window.innerHeight - barHeight,
                dx: 0,
                dy: 0,
                dw: window.innerWidth,
                dh: window.innerHeight - barHeight
            }
            return Object.values(bounds)
        }

        /**Requests Camera usage*/
        const record = async () => {
            try {
                let media = await navigator.mediaDevices.getUserMedia(recordConstraints)
                return media
            }
            catch (e) {
            }
        }

        /**Renders Camera to Canvas Element*/
        const render = (video) => {
            ctx.drawImage(video, ...getCameraBounds(video))
            requestAnimationFrame(() => {
                render(video)
            })
        }

        (async () => {
            let stream = await record()
            videoElement.srcObject = stream
            await videoElement.play()
            requestAnimationFrame(() => {
                render(videoElement)
            })
        })()
    }, [])
}

export default useCamera
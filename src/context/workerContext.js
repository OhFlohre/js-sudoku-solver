import React, { createContext, useState, useEffect, useContext } from 'react'

const WorkerContext = createContext()

const useWorker = () => {
    return useContext(WorkerContext)
}

function WorkerProvider({ children }) {
    const [worker, setWorker] = useState()
    const [callbacks, setCallbacks] = useState([])

    useEffect(() => {
        const newWorker = new Worker('../worker/index.js')
        setWorker(newWorker)

        newWorker.onmessage = e => {
            const { channel, message } = e.data
            setCallbacks(_callbacks => {
                _callbacks
                    .filter(cb => cb.channel === channel)
                    .forEach(cb => cb.cb(message))

                return _callbacks
            })
        }

        return () => newWorker.terminate
    }, [])

    const post = (channel, message) => {
        worker.post({ channel, message })
    }

    const on = (channel, cb) => {
        setCallbacks([{ channel, cb }, ...callbacks])
    }

    return (
        <WorkerContext.Provider value={{ post, on }}>
            {children}
        </WorkerContext.Provider>
    )
}

export { WorkerProvider, useWorker }
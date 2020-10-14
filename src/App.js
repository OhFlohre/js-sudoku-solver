import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { useWorker } from './context/workerContext'
import SplashScreen from './components/SplashScreen/SplashScreen'
import Camera from './components/Camera/Camara'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [appReady, setAppReady] = useState(false)
  const worker = useWorker()

  useEffect(() => {
    worker.on('load', () => {
      setAppReady(true)
    })
  }, [])

  return (
    <AppWrapper>
      {appReady ?
        <Fragment>
          <MainView>
            <Switch>
              <Route exact path="/">
                <Camera />
              </Route>
            </Switch>
          </MainView>
          <Navbar />
        </Fragment>
        : <SplashScreen />
      }
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #050606;
`

const MainView = styled.div`
  position: relative;
`

export default App;

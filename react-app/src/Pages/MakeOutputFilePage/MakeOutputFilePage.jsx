import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'
import style from './style.module.css'
import { DowloadFiles } from '../../components/DownloadFiles/DowloadFiles'

export function MakeOutputFilePage() {
  const body = useSelector((store) => store.body)
  const [url] = useState('ws://localhost:3334')
  const [wsConnection, setWsConnection] = useState(null)
  const [showProgressBar, setShowProgressBar] = useState(false)
  const navigate = useNavigate()

  const onBackClickHandler = () => {
    navigate('/analyze')
  }

  const onHomeClickHandler = () => {
    navigate('/')
  }

  const makeWebSocketFetch = () => {
    setShowProgressBar(true)
    wsConnection.send(JSON.stringify(body))
  }

  useEffect(() => {
    setWsConnection(new WebSocket(url))
  }, [url])

  if (showProgressBar) {
    return (
      <DowloadFiles wsConnection={wsConnection} />
    )
  }

  if (wsConnection && Object.keys(body).length > 0) {
    return (
      <>
        <div className={style.Tabs}>
          <div className={style.container}>
            <div className={style.Label}>
              Everything is ready to make files for TraceWin
            </div>
          </div>
        </div>
        <div className={style.container}>
          <Button
            buttonName="Back"
            onClickFunction={onBackClickHandler}
          />
          <Button
            buttonName="Make output files"
            onClickFunction={makeWebSocketFetch}
          />
        </div>
      </>
    )
  }

  return (
    <div className={style.container}>
      <Button buttonName="Back" onClickFunction={onBackClickHandler} />
      <Button buttonName="Home" onClickFunction={onHomeClickHandler} />
    </div>
  )
}

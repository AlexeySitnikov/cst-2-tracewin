import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import style from './style.module.css'

export function MakeOutputFilePage() {
  const body = useSelector((store) => store.body)

  const [loader, setLoader] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [url] = useState('ws://localhost:3334')
  const [wsConnection, setWsConnection] = useState(null)

  const makeWebSocketFetch = () => {
    setLoader(true)
    wsConnection.send(JSON.stringify(body))
  }

  useEffect(() => {
    setWsConnection(new WebSocket(url))
  }, [url])

  useEffect(() => {
    if (wsConnection) {
      wsConnection.onmessage = (message) => {
        if (parseFloat(message.data)) {
          setPercentage(parseFloat(message.data))
        } else if (message.data === '"done"') {
          alert('All done')
          setLoader(false)
        } else {
          console.log(message.data)
        }
      }
    }
  }, [wsConnection])

  if (!loader) {
    return (
      <div className={style.finalButtons}>
        {wsConnection
          ? (
            <Button
              buttonName="Make output files"
              onClickFunction={makeWebSocketFetch}
            />
          ) : null}
      </div>
    )
  }

  if (loader) {
    return (
      <>
        <br />
        <ProgressBar
          name="Reading files"
          filled={percentage}
        />
      </>
    )
  }

  return (
    <Link to="/">Go back</Link>
  )
}

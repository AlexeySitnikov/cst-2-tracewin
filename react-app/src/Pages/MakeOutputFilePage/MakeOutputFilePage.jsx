import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import style from './style.module.css'
import { useModalWindow } from '../../hooks/useModalWindow'
import { Modal } from '../../components/Modal/Modal'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'

export function MakeOutputFilePage() {
  const body = useSelector((store) => store.body)
  const { setSelectedFiles } = useContext(SelectedFilesContext)

  const [loader, setLoader] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [url] = useState('ws://localhost:3334')
  const [wsConnection, setWsConnection] = useState(null)
  const {
    isModalOpen, setIsModalOpen, content, setContent, closeModalClickHandler,
  } = useModalWindow()
  const navigate = useNavigate()

  const resetFunction = () => {
    setSelectedFiles([])
    navigate('/')
  }

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
          setIsModalOpen(true)
          setContent(<Button buttonName="Done" onClickFunction={resetFunction} />)
          // resetFunction()
          setLoader(false)
        }
        //  else {
        //   console.log(message.data)
        // }
      }
    }
  }, [wsConnection])

  if (!loader) {
    return (
      <>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModalClickHandler}
        >
          {content}
        </Modal>
        <div className={style.finalButtons}>
          {wsConnection
            ? (
              <Button
                buttonName="Make output files"
                onClickFunction={makeWebSocketFetch}
              />
            ) : null}
        </div>
      </>
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

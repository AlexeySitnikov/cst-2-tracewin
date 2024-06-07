import { useDispatch, useSelector } from 'react-redux'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { useModalWindow } from '../../hooks/useModalWindow'
import { resetBody } from '../../Redux/Slices/body/bodySlice'
import { resetBorders } from '../../Redux/Slices/borders/bordersSlice'
import { resetProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'
import { Button } from '../Buttons/Button'
import { Modal } from '../Modal/Modal'
import style from './style.module.css'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export function DowloadFiles() {
  const body = useSelector((store) => store.body)
  const { setSelectedFiles } = useContext(SelectedFilesContext)

  const [loader, setLoader] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [url] = useState('ws://localhost:3334')
  const [wsConnection, setWsConnection] = useState(null)
  const {
    isModalOpen, setIsModalOpen, content, setContent, closeModalClickHandler,
  } = useModalWindow()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const resetFunction = () => {
    setSelectedFiles([])
    dispatch(resetBody())
    dispatch(resetBorders())
    dispatch(resetProgressBar())
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
          setLoader(false)
        }
      }
    }
  }, [wsConnection])

  makeWebSocketFetch()

  if (!loader) {
    return (
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>
    )
  }

  if (loader) {
    return (
      <div className={style.container}>
        <br />
        <ProgressBar
          name="Reading files"
          filled={percentage}
        />
      </div>
    )
  }
}

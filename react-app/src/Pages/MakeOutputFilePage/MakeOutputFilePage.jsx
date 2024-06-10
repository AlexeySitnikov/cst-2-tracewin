import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'
// import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import style from './style.module.css'
import { useModalWindow } from '../../hooks/useModalWindow'
// import { Modal } from '../../components/Modal/Modal'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { resetBody } from '../../Redux/Slices/body/bodySlice'
import { resetBorders } from '../../Redux/Slices/borders/bordersSlice'
import { resetProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'
import { resetAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'

export function MakeOutputFilePage() {
  const body = useSelector((store) => store.body)
  const { setSelectedFiles } = useContext(SelectedFilesContext)

  // const [loader, setLoader] = useState(false)
  // const [percentage, setPercentage] = useState(0)
  const [url] = useState('ws://localhost:3334')
  const [wsConnection, setWsConnection] = useState(null)
  const { setIsModalOpen, setContent } = useModalWindow()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onBackClickHandler = () => {
    navigate('/analyze')
  }

  const resetFunction = () => {
    setSelectedFiles([])
    dispatch(resetAnalyzedFiles())
    dispatch(resetBody())
    dispatch(resetBorders())
    dispatch(resetProgressBar())
    navigate('/')
  }

  const makeWebSocketFetch = () => {
    // setLoader(true)
    wsConnection.send(JSON.stringify(body))
  }

  useEffect(() => {
    setWsConnection(new WebSocket(url))
  }, [url])

  useEffect(() => {
    if (wsConnection) {
      wsConnection.onmessage = (message) => {
        if (parseFloat(message.data)) {
          // setPercentage(parseFloat(message.data))
        } else if (message.data === '"done"') {
          setIsModalOpen(true)
          setContent(<Button buttonName="Done" onClickFunction={resetFunction} />)
          // setLoader(false)
        }
      }
    }
  }, [wsConnection])

  // if (!loader) {
  //   return (
  //     <>
  //       <Modal
  //         isOpen={isModalOpen}
  //         closeModal={closeModalClickHandler}
  //       >
  //         {content}
  //       </Modal>
  //       <div className={style.finalButtons}>
  //         {wsConnection
  //           ? (
  //             <Button
  //               buttonName="Make output files"
  //               onClickFunction={makeWebSocketFetch}
  //             />
  //           ) : null}
  //       </div>
  //     </>
  //   )
  // }

  // if (loader) {
  //   return (
  //     <>
  //       <br />
  //       <ProgressBar
  //         name="Reading files"
  //         filled={percentage}
  //       />
  //     </>
  //   )
  // }

  if (wsConnection && Object.keys(body).length > 0) {
    return (
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
    )
  }

  return (
    <div className={style.container}>
      <Button
        buttonName="Back"
        onClickFunction={onBackClickHandler}
      />
    </div>
  )
}

import { useDispatch } from 'react-redux'
import { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
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
import { resetAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'

export function DowloadFiles({ wsConnection }) {
  const currentWsConnection = wsConnection
  const { setSelectedFiles } = useContext(SelectedFilesContext)
  const [loader, setLoader] = useState(true)
  const [percentage, setPercentage] = useState(0)
  const {
    isModalOpen, content, closeModalClickHandler, setIsModalOpen, setContent,
  } = useModalWindow()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const resetFunction = () => {
    setSelectedFiles([])
    dispatch(resetBody())
    dispatch(resetBorders())
    dispatch(resetProgressBar())
    dispatch(resetAnalyzedFiles())
    navigate('/')
  }

  useEffect(() => {
    if (currentWsConnection) {
      currentWsConnection.onmessage = (message) => {
        if (parseFloat(message.data)) {
          setPercentage(parseFloat(message.data))
        } else if (message.data === '"done"') {
          setIsModalOpen(true)
          setContent(<Button buttonName="Done" onClickFunction={resetFunction} />)
          setLoader(false)
        }
      }
    }
  }, [currentWsConnection])

  if (!loader) {
    return (
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>
    )
  }

  if (loader) {
    return (
      <div className={style.Tabs}>
        <div className={style.container}>
          <br />
          <ProgressBar
            name="Reading files"
            filled={percentage}
          />
        </div>
      </div>
    )
  }
}

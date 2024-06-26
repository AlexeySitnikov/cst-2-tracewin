import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import style from './style.module.css'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { Button } from '../../components/Buttons/Button'
import { analizeBorders } from '../../components/constrains/analizeBorders'
import { resetBorders, setBorderString } from '../../Redux/Slices/borders/bordersSlice'
import { makeBordersString } from '../../components/constrains/makeBordersString'
import { hasFilesOrderDublicates } from '../../components/constrains/hasFilesOrderDublicates'
import { Modal } from '../../components/Modal/Modal'
import { useModalWindow } from '../../hooks/useModalWindow'
import { reSniffFiles } from '../../components/constrains/reSniffFiles'
import { Loader } from '../../components/Loader/Loader'
import { resetBody } from '../../Redux/Slices/body/bodySlice'
import { resetProgressBar } from '../../Redux/Slices/progressBar/progressBarSlice'

export function PreReadFilesPage() {
  console.log(window.location)
  const { selectedFiles } = useContext(SelectedFilesContext)
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  const borderString = useSelector((store) => store.borders)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    isModalOpen, content, closeModalClickHandler, setIsModalOpen, setContent,
  } = useModalWindow()
  const settings = useSelector((store) => store.settings)

  const onNextClickButtonFunction = () => {
    if (!hasFilesOrderDublicates({ analyzedFiles })) {
      if (!borderString) {
        analizeBorders(selectedFiles, analyzedFiles, dispatch)
          .then((result) => {
            dispatch(setBorderString(makeBordersString(result)))
          })
      }
      navigate('/analyze')
    } else {
      dispatch(resetBorders())
      dispatch(resetBody())
      dispatch(resetProgressBar())
      setIsModalOpen(true)
      setContent(<Button buttonName="Files have dublicated order" onClickFunction={closeModalClickHandler} />)
    }
  }

  const onBackClickButtonFunction = () => {
    navigate('/')
  }

  const onHomeClickHandler = () => {
    onBackClickButtonFunction()
  }

  useEffect(() => {
    reSniffFiles({ dispatch, selectedFiles, settings })
  }, [settings.linesToBePreload])

  if (analyzedFiles.length > 0) {
    return (
      <div className={style.container}>
        <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
          {content}
        </Modal>
        <Tabs />
        <div className={style.buttonsContainer}>
          <Button buttonName="Back" onClickFunction={onBackClickButtonFunction} />
          {(analyzedFiles.length > 0) ? <Button buttonName="Next" onClickFunction={onNextClickButtonFunction} /> : null}
        </div>
      </div>
    )
  }
  return (
    <div className={style.container}>
      {selectedFiles.length > 0 ? <Loader /> : null}
      <div className={style.buttonsContainer}>
        <Button buttonName="Back" onClickFunction={onBackClickButtonFunction} />
        <Button buttonName="Home" onClickFunction={onHomeClickHandler} />
      </div>
    </div>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import style from './style.module.css'
// import { sniffFiles } from '../../components/constrains/sniffFiles'
// import { setAnalyzedFiles } from '../../Redux/Slices/analyzedFiles/analyzedFilesSlice'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'
import { Button } from '../../components/Buttons/Button'
import { analizeBorders } from '../../components/constrains/analizeBorders'
import { setBorderString } from '../../Redux/Slices/borders/bordersSlice'
import { makeBordersString } from '../../components/constrains/makeBordersString'
import { hasFilesOrderDublicates } from '../../components/constrains/hasFilesOrderDublicates'
import { Modal } from '../../components/Modal/Modal'
import { useModalWindow } from '../../hooks/useModalWindow'

export function PreReadFilesPage() {
  const { selectedFiles } = useContext(SelectedFilesContext)
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  const borderString = useSelector((store) => store.borders)
  // const settings = useSelector((store) => store.settings)
  const dispatch = useDispatch()
  // const stringsToSniff = (Number.isFinite(settings.linesToBePreload)
  // && settings.linesToBePreload > 0) ? settings.linesToBePreload : 5
  const navigate = useNavigate()
  const {
    isModalOpen, content, closeModalClickHandler, setIsModalOpen, setContent,
  } = useModalWindow()

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
      setIsModalOpen(true)
      setContent(<Button buttonName="Files have dublicated order" onClickFunction={closeModalClickHandler} />)
    }
  }

  const onBackClickButtonFunction = () => {
    navigate('/')
  }

  const onHomeClickHandler = () => {
    navigate('/')
  }

  // useEffect(() => {
  //   async function functionToSniffFiles() {
  //     const responce = await sniffFiles({ selectedFiles, stringsToSniff })
  //     return responce
  //   }
  //   if (selectedFiles.length > 0) {
  //     functionToSniffFiles().then(
  //       (result) => {
  //         const selectedFilesNames = Array.from(selectedFiles)
  // .map((element) => (element.file.name))
  //         dispatch(setAnalyzedFiles({ selectedFilesNames, result }))
  //       },
  //     )
  //   }
  // }, [...selectedFiles, settings.linesToBePreload])

  if (selectedFiles.length > 0) {
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
      <div className={style.buttonsContainer}>
        <Button buttonName="Back" onClickFunction={onBackClickButtonFunction} />
        <Button buttonName="Home" onClickFunction={onHomeClickHandler} />
      </div>
    </div>
  )
}

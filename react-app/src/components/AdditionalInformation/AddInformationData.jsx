import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { analizeBorders } from '../constrains/analizeBorders'
import { makeBordersString } from '../constrains/makeBordersString'
// import { Loader } from '../Loader/Loader'
import style from './style.module.css'
import { setBorderString } from '../../Redux/Slices/borders/bordersSlice'
import { setBody } from '../../Redux/Slices/body/bodySlice'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export function AdditionalInformationData() {
  const borderString = useSelector((store) => store.borders)
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  const settings = useSelector((store) => store.settings)
  const dispatch = useDispatch()
  const [percentage, setPercentage] = useState(0)

  if (!borderString && percentage === 0) {
    analizeBorders(analyzedFiles, setPercentage)
      .then((result) => {
        dispatch(setBorderString(makeBordersString(result)))
      })
  }

  if (borderString) {
    const body = {
      files: [...analyzedFiles.map((element) => ({
        name: element.path,
        linesToBeDeleted: element.linesToBeDeleted,
        type: element.type,
      }))],
      borders: settings.addLimits ? borderString : null,
      field: settings.field,
    }
    dispatch(setBody(body))

    return (
      <div className={style.additionalInformation}>
        {borderString.split('\n').map((substring) => (
          <div key={crypto.randomUUID()}>{substring}</div>
        ))}
      </div>
    )
  }

  return (
    <>
      <br />
      <ProgressBar
        name="Reading files"
        filled={percentage}
      />
    </>

  // <div className={style.additionalInformation}>
  //   <Loader />
  // </div>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { analizeBorders } from '../constrains/analizeBorders'
import { makeBordersString } from '../constrains/makeBordersString'
import { Loader } from '../Loader/Loader'
import style from './style.module.css'
import { setBorderString } from '../../Redux/Slices/borders/bordersSlice'

export function AdditionalInformationData() {
  const [borders, setBorders] = useState(null)
  const borderString = useSelector((store) => store.borders)
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  const dispatch = useDispatch()

  if (borderString.length === 0 && !borders) {
    analizeBorders(analyzedFiles).then((result) => setBorders(result))
  }

  if (borders) {
    dispatch(setBorderString(makeBordersString({ borders })))
  }

  if (borderString.length > 0) {
    return (
      <div className={style.additionalInformation}>
        {borderString.split('\n').map((substring) => (
          <div key={crypto.randomUUID()}>{substring}</div>
        ))}
      </div>
    )
  }

  return (
    <div className={style.additionalInformation}>
      <Loader />
    </div>
  )
}

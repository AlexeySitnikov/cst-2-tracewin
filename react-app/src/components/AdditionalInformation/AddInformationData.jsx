import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import style from './style.module.css'
import { setBody } from '../../Redux/Slices/body/bodySlice'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export function AdditionalInformationData() {
  const borderString = useSelector((store) => store.borders)
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  const settings = useSelector((store) => store.settings)
  const progressBar = useSelector((store) => store.progressBar)
  const dispatch = useDispatch()

  useEffect(() => {
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
      console.log(body)
      dispatch(setBody(body))
    }
  }, [borderString, settings])

  if (borderString) {
    return (
      <div className={style.additionalInformation}>
        {borderString.split('\n').map((substring) => (
          <div key={crypto.randomUUID()}>{substring}</div>
        ))}
      </div>
    )
  }

  return (
    <div className={style.container}>
      <br />
      <ProgressBar
        name="Reading files"
        filled={progressBar}
      />
    </div>
  )
}

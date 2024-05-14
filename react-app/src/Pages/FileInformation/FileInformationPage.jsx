import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import { AdditionalInformation } from '../../components/AdditionalInformation/AdditionalInformation'

export function FileInformationPage() {
  const analyzedFiles = useSelector((store) => store.analyzedFiles)

  if (analyzedFiles.length > 0) {
    return (
      <AdditionalInformation />
    )
  }

  return (
    <div className={style.mainPage}>
      <Link to="/read">Pre-read files</Link>
    </div>
  )
}

import { useSelector } from 'react-redux'
import { Tabs } from '../../components/Tabs/Tabs'
import { Loader } from '../../components/Loader/Loader'
import style from './style.module.css'

export function PreReadFiles() {
  const selectedFiles = useSelector((store) => store.selectedFiles)

  if (selectedFiles.length > 0) {
    return (
      <Tabs />
    )
  }

  return (
    <div className={style.mainPage}>
      <Loader />
    </div>
  )
}

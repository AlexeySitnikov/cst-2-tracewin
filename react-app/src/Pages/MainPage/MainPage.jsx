import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UploadFiles } from '../../components/UploadFiles/UploadFiles'
import { Button } from '../../components/Buttons/Button'
import { SelectedFilesContext } from '../../contexts/SelectedFilesContext'

export function MainPage() {
  const { selectedFiles } = useContext(SelectedFilesContext)

  const asd = () => {
    console.log(selectedFiles)
  }

  return (
    <>
      <UploadFiles />
      <Link to="read">Next</Link>
      <Button buttonName="Show context value" onClickFunction={asd} />
    </>
  )
}

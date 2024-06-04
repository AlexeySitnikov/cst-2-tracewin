import { Link } from 'react-router-dom'
import { UploadFiles } from '../../components/UploadFiles/UploadFiles'

export function MainPage() {
  return (
    <>
      <UploadFiles />
      <Link to="read">Next</Link>
    </>
  )
}

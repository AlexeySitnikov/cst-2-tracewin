import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function MakeOutputFilePage() {
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  //   const settings = useSelector((store) => store.settings)
  const borders = useSelector((store) => store.borders)

  if (analyzedFiles.length > 0 && borders.length > 0) {
    return (
      <Link to="/">Make output files</Link>
    )
  }

  return (
    <Link to="/">Go back</Link>
  )
}

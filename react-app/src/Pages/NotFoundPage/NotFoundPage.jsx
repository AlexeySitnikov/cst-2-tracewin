import { Link } from 'react-router-dom'

export function Notfoundpage() {
  return (
    <div>
      This page does not exist. Go
      {' '}
      <Link to="/">home</Link>
    </div>
  )
}

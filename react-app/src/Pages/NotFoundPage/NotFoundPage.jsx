import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'

export function Notfoundpage() {
  const navigate = useNavigate()

  const onHomeClickHandler = () => {
    navigate('/')
  }

  return (
    <div>
      This page does not exist. Go
      {' '}
      <Button buttonName="Home" onClickFunction={onHomeClickHandler} />
    </div>
  )
}

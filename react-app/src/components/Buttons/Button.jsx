import style from './style.module.css'

export function Button({ buttonName, onClickFunction, isActive = true }) {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button} type="button" onClick={onClickFunction} disabled={!isActive}>
        {buttonName || 'Button'}
      </button>
    </div>
  )
}

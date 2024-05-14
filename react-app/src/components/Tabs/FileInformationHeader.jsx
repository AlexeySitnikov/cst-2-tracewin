import style from './style.module.css'

export function FileInformationHeader({ file }) {
  return (
    <div>
      <p>{`File name: ${file.file.name}`}</p>
      <div>
        <label htmlFor="fileOrder">
          Is it correct file order?
          <input
            className={style.in}
            type="number"
            id="fileOrder"
            name="fileOrder"
            min="1"
            max="100"
            lang="en-US"
            defaultValue={file.fileOrder}
          />
        </label>
      </div>
      <div>
        <label htmlFor="sniffLinesFromFiles">
          How many lines preload from files
          <input
            className={style.in}
            type="number"
            id="sniffLinesFromFiles"
            name="sniffLinesFromFiles"
            min="1"
            max="100"
            lang="en-US"
            defaultValue={file.linesToBePreload}
          />
        </label>
      </div>
      <fieldset>
        <legend>How many lines should be deleted</legend>
        <label htmlFor="Count">
          Count
          <input
            className={style.in}
            type="number"
            id="Count"
            name="Count"
            min="0"
            max="100"
            defaultValue={file.linesToBeDeleted}
            lang="en-US"
          />
        </label>

      </fieldset>
    </div>
  )
}

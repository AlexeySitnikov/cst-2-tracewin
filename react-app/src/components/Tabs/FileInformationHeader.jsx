import { FileOrderLabel } from '../FileOrderLabel/FileOrderLabel'
import { SniffLinesLabel } from '../SniffLinesLabel/SniffLinesLabel'
import { CountLabel } from '../CountLabel/CountLabel'

export function FileInformationHeader({ file }) {
  return (
    <div>
      <p>{`File name: ${file.file}`}</p>
      <div>
        <FileOrderLabel file={file} />
      </div>
      <div>
        <SniffLinesLabel />
      </div>
      <fieldset>
        <legend>How many lines should be deleted</legend>
        <CountLabel file={file} />
      </fieldset>
    </div>
  )
}

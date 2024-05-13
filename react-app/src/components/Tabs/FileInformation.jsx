import { FileInformationData } from './FileInformationData'
import { FileInformationHeader } from './FileInformationHeader'

export function FileInformation({ file }) {
  return (
    <div>
      <FileInformationHeader
        file={file}
      />
      <br />
      <FileInformationData
        file={file}
      />
    </div>
  )
}

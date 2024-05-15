import style from './style.module.css'
import { FieldCheckBox } from './FieldCheckBox'
import { AdditionalInformationCheckBox } from './AdditionalInformationCheckBox'
import { AdditionalInformationData } from './AddInformationData'

export function AdditionalInformation() {
  return (
    <div className={style.Tabs}>
      <div className={style.additionalInformation}>
        Add this information into the files for TraceWin?
      </div>
      <br />
      <AdditionalInformationCheckBox />
      <br />
      <FieldCheckBox />
      <br />
      <AdditionalInformationData />
    </div>
  )
}

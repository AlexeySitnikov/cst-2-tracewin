import { useSelector } from 'react-redux'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import style from './style.module.css'
import { FileInformation } from './FileInformation'

export function TabsContainer({ activeTab, setActiveTab }) {
  const analyzedFiles = useSelector((store) => store.analyzedFiles)
  return (
    <div className={style.Tabs}>
      <ul className={style.nav}>
        {analyzedFiles.map((_, index) => (
          <TabNavItem
            title={`File ${index + 1}`}
            id={`tab${index}`}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={crypto.randomUUID()}
          />
        ))}
      </ul>

      <div className={style.outlet}>
        {
          analyzedFiles.map((file, index) => (
            <TabContent
              id={`tab${index}`}
              activeTab={activeTab}
              key={crypto.randomUUID()}
            >
              <FileInformation
                file={file}
              />
            </TabContent>
          ))
         }

      </div>
    </div>
  )
}

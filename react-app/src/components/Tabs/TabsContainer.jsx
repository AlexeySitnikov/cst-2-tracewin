import { useSelector } from 'react-redux'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import style from './style.module.css'
import { FileInformation } from './FileInformation'

export function TabsContainer({
  activeTab, setActiveTab,
}) {
  const selectedFiles = useSelector((store) => store.selectedFiles)
  return (
    <div className={style.Tabs}>
      <ul className={style.nav}>
        {selectedFiles.map((_, index) => (
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
        {selectedFiles.map((file, index) => (
          <TabContent
            id={`tab${index}`}
            activeTab={activeTab}
            key={crypto.randomUUID()}
          >
            <FileInformation
              file={file}
            />
          </TabContent>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { TabsContainer } from './TabsContainer'

export function Tabs() {
  const [activeTab, setActiveTab] = useState('tab0')

  return (
    <TabsContainer
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )
}

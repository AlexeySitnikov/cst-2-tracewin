import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TabsContainer } from './TabsContainer'

export function Tabs() {
  const [activeTab, setActiveTab] = useState('tab0')

  return (
    <>
      <TabsContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Link to="/analyze">Next</Link>
    </>
  )
}

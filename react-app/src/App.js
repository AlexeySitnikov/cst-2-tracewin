import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Notfoundpage } from './Pages/NotFoundPage/NotFoundPage'
import { UploadFiles } from './components/UploadFiles/UploadFiles'
import { PreReadFiles } from './Pages/PreReadFiles/PreReadFiles'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<UploadFiles />} />
        <Route path="read" element={<PreReadFiles />} />
        {/* <Route path="analyze" element={<AboutPage />} /> */}
        {/* <Route path="make" element={<AboutPage />} /> */}
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  )
}

export default App

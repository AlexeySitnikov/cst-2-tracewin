import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Notfoundpage } from './Pages/NotFoundPage/NotFoundPage'
import { PreReadFilesPage } from './Pages/PreReadFiles/PreReadFilesPage'
import { FileInformationPage } from './Pages/FileInformation/FileInformationPage'
import { MainPage } from './Pages/MainPage/MainPage'
import { MakeOutputFilePage } from './Pages/MakeOutputFilePage/MakeOutputFilePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="read" element={<PreReadFilesPage />} />
        <Route path="analyze" element={<FileInformationPage />} />
        <Route path="make" element={<MakeOutputFilePage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  )
}

export default App

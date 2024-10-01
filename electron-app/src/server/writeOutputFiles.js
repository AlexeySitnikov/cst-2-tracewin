// import { getNamesOfTempFiles } from './getNamesOfTempFiles.js'
const getNamesOfTempFiles = require('./getNamesOfTempFiles.js')
const writeOutputFile = require('./writeOutputFile.js')
// import { writeOutputFile } from './writeOutputFile.js'

const writeOutputFiles = (
  files,
  currentDirectory,
  tempDirectory,
  startWriteTime,
  addInformation,
  field, 
  fileExtension,
) => {
  const {
    Ex, Ey, Ez, E,
  } = getNamesOfTempFiles(files, tempDirectory)
  if ((Ex.length > 0) && (Ey.length > 0) && (Ez.length > 0)) {
    if ((files[0].type === 'EM') || (field === 'EField') || (field === 'BField')){
      writeOutputFile(Ex, `${currentDirectory}\\E${fileExtension}x`, startWriteTime, addInformation)
      writeOutputFile(Ey, `${currentDirectory}\\E${fileExtension}y`, startWriteTime, addInformation)
      writeOutputFile(Ez, `${currentDirectory}\\E${fileExtension}z`, startWriteTime, addInformation)
    } 
    // else if ((field === 'EField') || (field === 'BField')) {
    //   writeOutputFile(Ex, `${currentDirectory}\\E${fileExtension}x`, startWriteTime, addInformation)
    //   writeOutputFile(Ey, `${currentDirectory}\\E${fileExtension}y`, startWriteTime, addInformation)
    //   writeOutputFile(Ez, `${currentDirectory}\\E${fileExtension}z`, startWriteTime, addInformation)
    // } 
    // else if (field === 'BField') {
    //   writeOutputFile(Ex, `${currentDirectory}\\B.bsx`, startWriteTime, addInformation)
    //   writeOutputFile(Ey, `${currentDirectory}\\B.bsy`, startWriteTime, addInformation)
    //   writeOutputFile(Ez, `${currentDirectory}\\B.bsz`, startWriteTime, addInformation)
    // }
  } else if (E.length > 0) {
    if ((field === 'EField') || (field === 'BField')) {
      writeOutputFile(E, `${currentDirectory}\\E${fileExtension}z`, startWriteTime, addInformation)
    } 
    // else if (field === 'BField') {
    //   writeOutputFile(E, `${currentDirectory}\\B.bsz`, startWriteTime, addInformation)
    // }
  }
}

module.exports = writeOutputFiles

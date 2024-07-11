const writeTemp1DFiles = require('./writeTemp1DFiles')
const writeTempEMFiles = require('./writeTempEMFiles')
const writeTempFiles = require('./writeTempFiles')

const readInitialFile = (file, index, tempDirectory, webSocketServer) => {
  if (tempDirectory) {
    if (file.type === '3D') {
      return (
        writeTempFiles(file, index, tempDirectory, webSocketServer)
      )
    } if (file.type === 'EM') {
      return (
        writeTempEMFiles(file, index, tempDirectory, webSocketServer)
      )
    } if (file.type === '1D') {
      return (
        writeTemp1DFiles(file, index, tempDirectory)
      )
    }
  }
  return 'asd'
}

module.exports = readInitialFile

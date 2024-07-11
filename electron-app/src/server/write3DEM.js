const write3DEM = (writerEx, writerEy, writerEz, line) => {
    writerEx.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[3]}\n`)// [0] - x //[3] - Ex
    writerEy.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[4]}\n`)// [1] - y //[4] - Ey
    writerEz.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[5]}\n`)// [2] - z //[5] - Ez
  }
  
  module.exports = write3DEM
  
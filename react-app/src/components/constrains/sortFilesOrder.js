export function sortFilesOrder(files) {
  const currectFiles = files
  return Array.from(currectFiles).sort((a, b) => (a.fileOrder - b.fileOrder))
}

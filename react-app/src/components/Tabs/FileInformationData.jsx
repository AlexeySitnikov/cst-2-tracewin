export function FileInformationData({ file }) {
  return (
    Array.isArray(file.data)
      ? (file.data.map((string) => (
        <p key={crypto.randomUUID()}>{(string === '') ? '/n' : string }</p>
      )))
      : <p>{file.data}</p>
  )
}

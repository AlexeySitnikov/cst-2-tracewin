import { sniffFiles } from './sniffFiles'

export async function functionToSniffFiles({ selectedFiles, settings }) {
  const stringsToSniff = (Number.isFinite(settings.linesToBePreload)
&& settings.linesToBePreload > 0) ? settings.linesToBePreload : 5
  const responce = await sniffFiles({ selectedFiles, stringsToSniff })
  return responce
}

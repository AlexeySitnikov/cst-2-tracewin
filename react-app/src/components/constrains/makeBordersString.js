export function makeBordersString(borders) {
  if (borders.type === '3D') {
    return (`${String((borders.Zmax - borders.Zmin) / borders.deltaZ)} ${String((borders.Zmax - borders.Zmin) / 1000)}
${String((borders.Xmax - borders.Xmin) / borders.deltaX)} ${String(borders.Xmin / 1000)} ${String(borders.Xmax / 1000)}
${String((borders.Ymax - borders.Ymin) / borders.deltaY)} ${String(borders.Ymin / 1000)} ${String(borders.Ymax / 1000)}
1\n`)
  } if (borders.type === 'EM') {
    return (`${String((borders.Zmax - borders.Zmin) / borders.deltaZ)} ${String((borders.Zmax - borders.Zmin) / 1000)}
${String((borders.Xmax - borders.Xmin) / borders.deltaX)} ${String(borders.Xmin / 1000)} ${String(borders.Xmax / 1000)}
${String((borders.Ymax - borders.Ymin) / borders.deltaY)} ${String(borders.Ymin / 1000)} ${String(borders.Ymax / 1000)}
1\n`)
  } if (borders.type === '1D') {
    return (`${String(borders.linesZ)} ${String(borders.Zmax / 1000)}
1\n`)
  }
  return ('unknown')
}

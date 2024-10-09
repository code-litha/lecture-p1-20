function formatDate (value) {
  const date = new Date(value)
  const tanggal = date.toISOString().split('T')[0]
  const result = tanggal.split('-').reverse().join('-')
  // console.log('string')
  // console.log(date)
  // console.log(tanggal)
  // console.log(result)

  return result
}


// formatDate('2024-10-04 10:36:11.11+07')

module.exports = formatDate
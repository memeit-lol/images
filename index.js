const fs = require('fs')

function reload () {
  let json = []
  const files = fs.readdirSync('./media')
  files.forEach(function (file) {
    let tags = file.slice(1, file.length - 4)
    let tagsArray = tags.split(/_/)
    tagsArray = tagsArray.filter(function (tag) {
      return tag !== ''
    })
    tagsArray = tagsArray.map(function (tag) {
      return tag.toLowerCase()
    })
    json.push({'filename': file, tags: tagsArray})
  })
  fs.writeFileSync('./images.json', JSON.stringify(json), {encoding: 'utf-8'})
}

function search (query) {
  let returns = []
  let images = JSON.parse(fs.readFileSync('./images.json', {encoding: 'utf-8'}))
  for (let image of images) {
    for (let tag of image.tags) {
      if (tag.indexOf(query) > -1) returns.push(image.filename)
    }
  }
  return returns
}

function returnFile (filename) {
  return fs.readFileSync('./media/' + filename, {encoding: 'base64'})
}

module.exports = {
  reload, search, returnFile
}

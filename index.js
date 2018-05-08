const fs = require('fs')
const path = require('path')

function reload () {
  let json = []
  const files = fs.readdirSync(path.join(__dirname, 'media'))
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
  fs.writeFileSync(path.join(__dirname, 'images.json'), JSON.stringify(json), {encoding: 'utf-8'})
}

function search (query) {
  let returns = []
  let images = JSON.parse(fs.readFileSync(path.join(__dirname, 'images.json'), {encoding: 'utf-8'}))
  for (let image of images) {
    for (let tag of image.tags) {
      if (tag.indexOf(query) > -1) returns.push(image.filename)
    }
  }
  return returns
}

function list () {
  return fs.readdirSync(path.join(__dirname, 'media'))
}

function returnFile (filename) {
  return fs.readFileSync(path.join(__dirname, 'media', filename), {encoding: 'base64'})
}

module.exports = {
  reload, search, returnFile, list
}

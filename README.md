# MemeIt.LOL Images

This module is used to pull in images to the memeit.lol site.

## Install

```
npm install @memeit.lol/images
```

## Usage

```javascript
let images = require('@memeit.lol/images')
```

```javascript
images.reload()
```
Reload means look through the media folder and parse the images' names to images.json.

```javascript
images.search("")
```
The search function search the tags made from the naming convention (below) and returns any matches.

```javascript
images.returnFile("")
```
returnFile function returns the base64 format of an image.

## Naming Convention
The reload function looks at the filenames for the search feature. If you look in the media folder, you can see that their named like 1_Different_Words_To_Describe_Image.png. The parser removes the 1 and .png. Then the different, words, to, describle, image strings will be searchable.
const { statSync, readdirSync, readFileSync } = require('fs')

let searchTerm = new RegExp(process.argv[2])

for (let arg of process.argv.slice(3)) {
  search(arg)
}

function search (file) {
  let stats = statSync(file)
  if (stats.isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + '/' + f)
    }
  } else if (searchTerm.test(readFileSync(file, 'utf8'))) {
    console.log(file)
  }
}

// second exercise

// const { mkdir } = require('fs').promises

// methods.MKCOL = async function (request) {
//   let path = urlPath(request.url)
//   let stats
//   try {
//     stats = await stat(path)
//   } catch (error) {
//     if (error.code != 'ENOENT') throw error
//     await mkdir(path)
//     return { status: 204 }
//   }
//   if (stats.isDirectory()) return { status: 204 }
//   else return { status: 400, body: 'Not a directory' }
// }

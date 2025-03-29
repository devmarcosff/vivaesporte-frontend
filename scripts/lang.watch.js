import path from 'path'
import { exec } from 'child_process'
import chokidar from 'chokidar'
import { jsonPatterns } from './lang.pattern.js'

const watcher = chokidar.watch(jsonPatterns(), {
  persistent: true,
  ignoreInitial: true // Ignora eventos de adição inicial para não disparar bundling no início
})

watcher
  .on('add', (filePath) => handleFileEvent(filePath, 'adicionado'))
  .on('change', (filePath) => handleFileEvent(filePath, 'modificado'))
  .on('unlink', (filePath) => handleFileEvent(filePath, 'removido'))

function handleFileEvent(filePath, event) {
  if (path.extname(filePath) === '.json') {
    console.log(`Arquivo ${event}: ${filePath}`)
    exec('npm run lang', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o bundling: ${error}`)
        return
      }
      console.log(stdout)
      console.error(stderr)
    })
  }
}

console.log('Observando mudanças nos arquivos JSON...')

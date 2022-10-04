import path from 'path'
import fs from 'fs'

export default class KeyboardDataManager {
  data: {
    [k: string]: number
  } = {}
  file

  constructor () {
    const HOME = process.env.HOME
    this.file = path.resolve(HOME, 'electron-app-data.log')
    if (!fs.existsSync(this.file)) {
      fs.appendFileSync(this.file, '')
    }
  }

  load () {
    const content = fs.readFileSync(this.file, 'utf-8')
    this.handler(content)
  }

  handler (content: string) {
    const list = content.split('\n')
    list.forEach(item => {
      const d = item.split('->')
      const key = d[d.length-1].trim()
      if (!key) return
      if (this.data[key]) {
        this.data[key]++
      } else {
        this.data[key] = 1
      }
    })
  }

  getData () {
    return this.data
  }

  getRankList (length: number) {
    return Object.keys(this.data).map(key => ({ name: key, count: this.data[key] }))
      .sort((a, b) => b.count - a.count)
      .slice(0, length)
  }

  clearData () {
    this.data = {}
    fs.writeFileSync(this.file, '')
  }

  // append and log to the file
  append (e: { name: string }) {
    const {name} = e
    if (!this.data[name]) this.data[name] = 1
    else this.data[name]++

    const time = new Date(Date.now()).toLocaleString()
    const log  = `${time} -> ${name}\n`
    fs.appendFileSync(this.file, log)
  }
}
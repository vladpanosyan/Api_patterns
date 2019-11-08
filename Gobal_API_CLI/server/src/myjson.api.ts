import axios from 'axios'
import * as fs from 'fs'
import * as path from 'path';
const filePath = path.resolve(__dirname, './data_dog/breed.json')

function fetch(url: string) {
   return axios.get(url)
    .then(({data}) => data)
}

function readJson(kind: string): any {
    let files: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    if (files) {
        return files.reduce((arr: any, item: any) => {
            if (kind in item) return arr.length ? [...arr, item[kind]] : [item[kind]]
            return arr
        }, [])
    }
    return
}
export {fetch, readJson};
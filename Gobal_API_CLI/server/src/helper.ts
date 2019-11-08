// import {dogs} from './data'
import * as path from 'path';
import * as fs from 'fs'
import axios from 'axios';

const fsPromises = fs.promises;
const PATH = path.resolve(__dirname, './data_dog/breed.json')

async function fileActions(path: string, data: any) {
    try {
      let  dataFromFile: any = await fsPromises.readFile(path);
      dataFromFile = JSON.parse(dataFromFile); 
        dataFromFile.push(data)
      writeDir(path, JSON.stringify(dataFromFile, null, 2)) 
    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }

  async function writeDir(path: string, data: any) {
    try {
        fsPromises.writeFile(path, data, 'utf-8');
    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }

function useAxiosJson( data: string[], breed: breed, subBreed?: subBreed) {
console.log(data)
    axios({
        url:  "https://api.myjson.com/bins",
        method: 'POST',
        data:  {
            [breed]: data,
            cretedTime: new Date(Date.now()).toString().match(/.* (?=G)/g)
          }
    })
    .then(({data}) => {
        const val = data.uri;
        data = {[(subBreed ? `${breed}-${subBreed}` : `${breed}-All`)]: val}
        fileActions(PATH, data)
    }) 
    .catch(result => console.log(result.response.data)) 
}

function useAxiosBreed(url: string, item: breed, subItem: any) {
    
    axios({
        method: 'get',
        url:  url
    })
    .then(({data}) => {
        if (subItem) useAxiosJson(data, item, subItem)
        else useAxiosJson(data, item)
        
    })
    .catch(result => {
        const data = result.response.data // it becomes from axios response
        console.log(data.message)
    });
}

function checkForSubBreed(item: breed, count: number, subItem?: subBreed) { // any tex@ inch dnem ???
    // let selectedBreed = dogs[item];
    // if(selectedBreed.some(item => item === subItem)) {
        const subItemPAth = subItem ? `${subItem}/` : ``;
        const url: string =  `https://dog.ceo/api/breed/${item}/${subItemPAth}images/random/${count}`
    // console.log(url)
        useAxiosBreed(url, item, subItem)

    // }
}
export {checkForSubBreed}
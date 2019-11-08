import express from 'express';
import * as path from 'path';
import { fetch, readJson } from './myjson.api';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, response, next) => {
    const url = req.originalUrl.split('/');
    switch(url.length) {
        case 2: {
            let breed = url[1]
            const checking: Array<breed> = ['bulldog', 'bullterrier', 'chihuahua', 'corgi'] // chishtem are te che ???
            if(checking.includes(breed)) {
                let files = readJson(`${breed}-All`)
                if(files.length) {
                    // console.log(files)
                    Promise.all(files.map(fetch))
                        .then((res: any) => response.render('breed.ejs', { dogs: res, breed: breed, flag: true }))
                } else  response.status(404).end(`you need to add dogs( ${breed} ) from command prompt`)
            } else next(`API does not support specified dog\'s breed `)
        }
        break;
        case 3: {
            let breed = url[1];
            const checking: Array<subBreed> = ['cardigan', 'boston', 'english', 'french']
            if(checking.includes(url[2])) {
                const subBreedd:string = `${breed}-${url[2]}`;
                let files = readJson(subBreedd)
                if(files.length) {
                    Promise.all(files.map(fetch))
                    .then((res: any) => response.render('breed.ejs', { dogs: res, breed: breed, flag: false }))
                } else  response.status(404).end("you need to add dogs from command prompt")
            } else {
                next("That subBred doesn't exisit in current dog\'s breed")
            }
        }
        break;
    }
})

app.listen(3000, () => {
    console.log("server started in port 3000")
})
app.use((err:Error, req:any, res: any, next: any) => {
    if(err) {
        res.status(404).end(err)
    } else res.status(400).end("try again -only->     breed/subbred ")
})
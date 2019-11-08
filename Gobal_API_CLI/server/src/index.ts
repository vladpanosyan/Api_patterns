import * as yargs from 'yargs';
import {checkForSubBreed} from './helper';

const brOp: ReadonlyArray<breed> = ['bulldog', 'bullterrier', 'chihuahua', 'corgi']
const subOP: ReadonlyArray<subBreed> = ['cardigan', 'boston', 'english', 'french']

yargs.option({
    breed: { choices: brOp, decribe: "Dog breed" },
    subBreed: { choices: subOP, decribe: "Dog subbreed" },
    
});

const argv = yargs.command({
    command: 'add <breed> [subBreed]',
    aliases: ['a'],
    describe: 'Add dogs into cloud store',
    builder: {
        count: {type: 'number', default: 4}
    },
    handler: (argv: any) => { // any poxaren inch type texadrvi ???
        console.log(argv)
        if (argv.subBreed) {
            checkForSubBreed(argv.breed, argv.count, argv.subBreed)
        } else {
            checkForSubBreed(argv.breed, argv.count)

        }
    }
}).argv
// yargs.parse() // using only for typescript



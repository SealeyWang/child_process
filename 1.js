const util = require('util')
const child_process = require('child_process')

const { execFile } = child_process


// exec('ls ../', (error, stdout, stderr) => {
//     console.log(error);
//     console.log(stdout);
//     console.log(stderr);
// })

///////////////////////////////
// const stream = exec('ls ../')
//
//
// stream.stdout.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.stderr.on('data', (err) => {
//
// })

///////////////////////////////////

// const exec2 = util.promisify(exec)
// exec2('ls ../')
//     .then(data => {
//         console.log(data.stdout)
//     })


/////////////////////////

// const userInput = '../'
// execFile('ls', ['-la', userInput], {
//     cwd: 'C:\\', //可以修改执行目录， 命令默认在当前目录执行
//     env: {NODE_ENV: 'development'},
//     // shell: '' 可以指定shell类型 默认bash
//
//     maxBuffer: 1024*1024, // 结果存储在内存的最大值
// },(error, stdout) => {
//     console.log(stdout)
// })


const { spawn } = child_process

const stream = spawn('ls', ['-la', '../'])

stream.stdout.on('data', (chunk) => {
    console.log(chunk.toString())
})
stream.stderr.on('data', (err) => {
    console.log(err.toString())

})

const childProcess = require('child_process')
const n = childProcess.fork('./child.js')

n.on('message',  (m) => {
    console.log('n.js get message ', m);
})
// 给子进程发送消息
n.send({hello: 'word'})

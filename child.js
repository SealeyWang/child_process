setTimeout(() => {
    // 给父进程发信息
    process.send({foo: 'bar'})
},2000)

process.on('message', (m) => {
    console.log('child.js get message', m);
})

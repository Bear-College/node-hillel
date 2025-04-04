// console.log(process.argv);
console.log(process.env.PORT);

process.on('SIGINT', () => {
    console.log('\nGracefully shutting down...');
    process.exit();
});

'SIGINT'
'exit'
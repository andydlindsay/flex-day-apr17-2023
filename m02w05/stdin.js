process.stdin.on('data', (messageFromTerminal) => {
  console.log('message from terminal:', messageFromTerminal);
});

process.stdin.setEncoding('utf-8');

const first = readFileSync('./folder/first.txt', 'utf-8')
const second = readFileSync('./folder/second.txt', 'utf-8')

console.log(first, second);

//writeFileSync('./folder/result-sync.txt', `Here is the result: ${first}, ${second}`) //to overwrite
writeFileSync('./folder/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}) // open a file
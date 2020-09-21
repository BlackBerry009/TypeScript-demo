import { Dictionary } from "./dictionary";
const dic = new Dictionary<string,number>();
dic.set('a', 1)
dic.set('b', 2)
dic.set('c', 3)
dic.set('d', 4)
dic.set('a', 0)
// console.log(dic)

// dic.forEach((k, v) => {
//   console.log(k,v)
// })

// console.log(dic.delete('a'))
console.log(dic)
console.log(dic.size)

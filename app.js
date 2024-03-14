//string argumnets
let msg="   hel     lo  "
console.log(msg)
// let password=prompt("enter your password")
// let newpass= password.trim()
// console.log(password)
// let s="namrata raj";
// console.log(s.toUppercase())
// method chaining
let string="i love coding"
console.log(string.indexOf("j"))
console.log(string.indexOf("o"))
console.log(string.toUpperCase().trim())
console.log(string.toLowerCase().trim())
//slice
let intro="my name is nams"
console.log(intro.slice(5))
console.log(intro.slice(3,7))
console.log(intro.slice(-6))
//replace
let c="i love you"
console.log(c.replace("love","owe"))
console.log(c.replace("o","x"))
//repeat
let d="namarta"
console.log(d.repeat(4))
//practice ques1

let e="      help!!!   "
console.log(e.toUpperCase().trim())
//ques2
let f="apnacollege"
console.log(f.slice(4,9))
console.log(f.indexOf("na"))
console.log(f.replace("apna","our"))
//ques 3
console.log(f.slice(4).replace("l","t").replace("l","t"))
//arrays
let students=["nam","milky","rit","ankit","hardik"]
console.log(students)
console.log(students[4])
//mixed array
let info=["nams",22,8.30]
console.log(info)
//length
console.log(info.length)
console.log(students.length)
//mutable
let fruits=["banana","mango","orange"]
console.log(fruits[0]="apple")
console.log(fruits)
console.log(fruits[7]="papaya")
console.log(fruits) 
//array methods
let cars=["audi","bmw","xuv","jaguar"]
console.log(cars)
console.log(cars.push("mercedes"))
console.log(cars)
console.log(cars.unshift("toyota"))
console.log(cars)
console.log(cars.pop())
console.log(cars)
console.log(cars)
console.log(cars)
console.log(cars.shift())
console.log(cars)
console.log(cars)
//practice questions
let months=["january","july","march","august"]
console.log(months)
console.log(months.shift())

console.log(months)

console.log(months.pop())

console.log(months.pop())
console.log(months)
console.log(months.push("june"))
console.log(months.push("march"))
console.log(months.push("august"))
console.log(months)
//array methods
console.log(months.indexOf("march"))
console.log(months.indexOf("hh"))
//includes
console.log(months.includes("march"))
console.log(months.includes("dec"))
//concat
console.log(cars.concat(months))
mix=(cars.concat(months))
console.log(mix)
//reverse
console.log(mix.reverse())
//slice
console.log(mix.slice(2,4))
console.log(mix.slice(2))
console.log(mix.slice(-3,-6))
//splice
arrays=["nam","milky","rit","ankit","hardik","sumit","aditya"]
console.log(arrays)
console.log(arrays.splice(3))
console.log(arrays.splice(0,1))
console.log(arrays.splice(0,1,"rahul","somi"))
console.log(arrays)
//sort
console.log(arrays.sort())
console.log(mix.sort())
//practice ques1

g=["january","july","march","august"]
console.log(g)
console.log(g.splice(0,1))
console.log(g.splice(1,0,"june"))
console.log(g)
//ques2
lang=["c","c++","html","javascript","python","java","c#","sql"]
console.log(lang)
console.log(lang.reverse())
console.log(lang.indexOf("javascript"))

//array refrences
h=["a","b","c","d"]
console.log(h)
hcopy=h
console.log(hcopy)
console.log(hcopy.push("e","f","g"))
console.log(hcopy)
console.log(h)
//nested array
let i=[[1,2],[3,4],[5,6],[7,8]]
console.log(i)
console.log(i.length)
console.log(i[0].length)
console.log(i[0][1])
console.log(i[2][1])
console.log(i[3][1])
//practice questions
j=[["x",null,"o"][null,"x",null]["o",null,"x"]]
console.log(j)
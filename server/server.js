const path = require('path')
const fs = require('fs')

let chirpsArray = [
    {username:"Jake",text:"Node is fun"},
    {username:"Josh",text:"Node sure is a blast"},
    {username:"Garret",text:"I sure do love using Node"},
    {username:"Colin",text:"Node is weird but cool"},
    {username:"Taylor",text:"I just started Node today"}
]

let chirpsPath = path.join(__dirname, '../chirps.json')

fs.writeFile(chirpsPath, JSON.stringify(chirpsArray), err => {
    if(err) console.log(err)
})


fs.readFile(chirpsPath,{
    encoding:"utf-8"
}, (err, data) => {
    // console.log(data)
    let chirps =JSON.parse(data)

    console.log(chirps)

})


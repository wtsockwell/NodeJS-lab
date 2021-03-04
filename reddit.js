const path = require('path')
const fs = require('fs')
const reqprom = require('request-promise')

let redditPath = path.join(__dirname, "/popular-articles.json")


reqprom('https://reddit.com/r/popular.json')
.then((body) => {
    let posts = []
    JSON.parse(body).data.children.forEach(item=>{
        posts = [...posts,{title:item.data.title, url:item.data.url, author:item.data.author}]
        // console.log(item.data.title)
        // console.log(item.data.url)
        // console.log(item.data.author)
    })
    return posts
})
.then((posts)=>{
    fs.writeFile(redditPath, JSON.stringify(posts), err => {if (err) console.log(err)})
})
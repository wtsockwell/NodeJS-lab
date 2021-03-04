const path = require('path')
const fs = require('fs')
const reqprom = require('request-promise')

let imagePath = path.join(__dirname, './downloads/')

reqprom("https://reddit.com/r/popular.json")
.then((body) => {
    JSON.parse(body).data.children.forEach(item => {
        if(path.extname(`${item.data.url}`) === '.jpg' || path.extname(`${item.data.url}`)==='.png'){
            let id = item.data.id
            let extention = item.data.url
            console.log(extention)
            // fs.writeFile(`./downloads/${id}`, `${image}.${path.extname(image)}`, (err) => {if(err) console.log(err)})
           reqprom({
               uri:`${item.data.url}`,
               encoding:"base64"
        })
           .then((image) => {
               
            fs.appendFile(`./downloads/${id}${path.extname(extention)}`, image, "base64", (err) => {if(err) console.log(err)})
           })
           
        }
    });
    
})
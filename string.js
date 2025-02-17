const client = require('./client')

async function init() {
    const result = await client.get("name:2");
    console.log("Result -> ", result);
    await client.set("msg:1","first message");
    console.log("msg:1 value is:- ",await client.get('msg:1'))
} 

init();
const {Worker} = require('bullmq')
const IORedis = require('ioredis');

const connection = new IORedis({
    host: '127.0.0.1', 
    port: 6379, 
    maxRetriesPerRequest: null, 
});


const sendEmail = new Promise((res , rej)=>setTimeout(()=>{res()},5*1000))

const worker = new Worker('email-queue',async (job)=>{
    console.log(`message recived with id: ${job.id}`)
    console.log('Processing message')
    console.log(`sending email to ${job.data.email}`);
    await sendEmail()
    console.log('Email is sent')
},
{connection}
);


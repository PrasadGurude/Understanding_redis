const {Queue} = require('bullmq');
const { Redis } = require('ioredis');

const connection = new Redis({
    host: '127.0.0.1',
    port: 6379,
    maxRetriesPerRequest: null,
});

const notificationQueue = new Queue('emai.-queue',{connection});

async function init(){
    const res  = await notificationQueue.add('email to piyush',{
        email:'piyush@gnail.com',
        subject:"welcome message",
        body:"Hey Piyush , welcome"
    });
    console.log('job added to queue',res.id)
}

init();
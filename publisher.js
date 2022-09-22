const amqp = require('amqplib/callback_api');


amqp.connect (`amqp://localhost`,(err, connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err, Channel)=>{
        if(err){
            throw err;
        }
        let queueName = "technical";
        let message = "This is technical babaji";
        Channel.assertQueue(queueName,{
            durable: false
        });
        Channel.sendToQueue(queueName, Buffer.from(message));
        console.log(`message : ${message}`);
        setTimeout(()=>{
            connection.close();
            
        }, 1000)
    })
})
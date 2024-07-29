const dgram = require('dgram');
const admin = require('firebase-admin');

const UDP_PORT = 41234;
const serviceAccount = require('../firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const udpServer = dgram.createSocket('udp4');

udpServer.on('message', (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  const messageData = JSON.parse(msg);

  const message = {
    notification: {
      title: messageData.title,
      body: messageData.message
    },
    topic: 'your-topic'
  };

  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
});

udpServer.bind(UDP_PORT, () => {
  console.log(`UDP server listening on port ${UDP_PORT}`);
});

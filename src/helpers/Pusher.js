import Pusher from 'pusher-js';

const socket = new Pusher('6d34b01fb0271f6ffac1', {
  cluster: 'us3',
});

function subsbcribeToChannel(channel) {
  return socket.subscribe(channel);
}

export default subsbcribeToChannel;

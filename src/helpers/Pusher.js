import Pusher from 'pusher-js';

const socket = new Pusher(APP_KEY, {
  cluster: APP_CLUSTER,
});

function subsbcribeToChannel(channel) {
  return socket.subscribe(channel);
}

export default subsbcribeToChannel;

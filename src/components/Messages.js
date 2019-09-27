import React, {useEffect} from 'react';
import Pusher from 'pusher-js';

const Message = ({ uuid, handleMessage, handleCombat }) => {
  const pusher = new Pusher('6d34b01fb0271f6ffac1', {
    cluster: 'us3',
  });

  useEffect(() => {
    const channel = pusher.subscribe(`p-channel-${uuid}`);
    channel.bind('broadcast', data => {
      handleMessage(data);
    });
    channel.bind('combat', data => {
      handleCombat(data);
    })

    return () => {
      pusher.unsubscribe(`p-channel-${uuid}`);
    }
  }, []);

  return <></>;
}

export default Message;

import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'https://immuneapi-production.up.railway.app';
const socket = io(SOCKET_SERVER_URL, {
  transports: ['websocket'],
});

export default socket;

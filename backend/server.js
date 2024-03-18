import { createServer } from 'http';
import { env } from 'process';
import { app } from './api/app.js';

const PORT = env.PORT;
const HOST = env.HOST;

const server = createServer(app);

server.listen({ port: PORT, host: HOST }, () => {
  console.log(`Server is running in ${HOST}:${PORT}`);
});

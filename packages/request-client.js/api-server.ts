import * as dotenv from 'dotenv';
import * as express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

import * as RequestNetwork from './dist';

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get('/request', async function (req, res) {
  const requestNetwork = new RequestNetwork.RequestNetwork();
  const requestId = req.query.id as string;

  if (!requestId) {
    res.status(400).send('No request id given');
    return;
  }

  let request: RequestNetwork.Request;
  try {
    request = await requestNetwork.fromRequestId(requestId);
  } catch (e) {
    console.log(e);
    res.status(400).send(`Cannot get request from request id: ${requestId}, ${e.message}`);
    return;
  }

  try {
    await request.refresh();
    res.json(request.getData());
  } catch (e) {
    console.log(e);
    res.status(500).send(`Something is wrong while getting request info, ${e.message}`);
  }
});

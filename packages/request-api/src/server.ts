import express from 'express';

const app = express();
app.get('/test', (_req, res) => {
  res.json({ test: 'Hello world!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { origin } from './config/configs';

const port = process.env.PORT;
const app = express();

app.use(
  cors({
    origin,
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send(`Sample node server!`);
});

app.get('/api/:id', (req, res) => {
  const param = req.params.id;
  const isEvenOdd = Number(param) % 2 === 0 ? 'Even' : 'Odd';

  res.json({ ans: isEvenOdd, num: param });
});
app.listen(80, () => {
  console.log(`Server running at port ${port}. Supporting ${origin}`);
});

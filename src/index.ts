import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { Origin } from './config/configs';
import checkOrigin from './middlewares/originCheck';

const port = process.env.PORT || 80;
const app = express();

app.use(checkOrigin);

app.use(
  cors({
    origin: Origin,
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send(`Sample node server!`);
});

app.post('/api/:id', (req, res) => {
  const param = req.params.id;
  const isEvenOdd = Number(param) % 2 === 0 ? 'Even' : 'Odd';
  res.cookie('hi', param, {
    maxAge: 600 * 6000,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
  res.json({ ans: isEvenOdd, num: param });
});
app.listen(port, () => {
  console.log(`Server running at port ${port}. Supporting ${Origin}`);
});

import { Origin } from '../config/configs';
import { Middleware } from '../type/middleware';

const checkOrigin: Middleware = (req, res, next) => {
  const { origin, referer } = req.headers;
  if (origin === Origin || referer === Origin) {
    next();
  } else {
    res.status(400).json({ msg: 'Lol' });
  }
};

export default checkOrigin;

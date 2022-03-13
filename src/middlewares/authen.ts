import { Middleware } from '../type/middleware';

const Authen: Middleware = (req, res, next) => {
  const cookie = req.cookies?.hi;
  console.log(req.ip, cookie);
  next();
};

export default Authen;

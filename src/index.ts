import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "calabrezzo";

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    sub: "john",
  },
  secret,
});

const decoded = verify({ secret, token });
console.log("🚀 ~ file: index.ts:15 ~ decoded:", decoded);

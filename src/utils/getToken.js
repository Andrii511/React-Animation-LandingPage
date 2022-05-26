import jsonwebtoken from "jsonwebtoken";

const getToken = () => {
  const jwtSecretKey = process.env.REACT_APP_JWT_SECRET_KEY;
  const data = {
    time: Date(),
  };

  const token = jsonwebtoken.sign(data, jwtSecretKey, {
    expiresIn: 10,
  });
  return token;
};

export default getToken;

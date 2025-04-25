import jwt from "jsonwebtoken";
const generateAccessToken = ({
  _id,
  email,
}: {
  _id: string;
  name: string;
  email: string;
}) => {
  return jwt.sign(
    {
      _id,
      email,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: "1h",
    }
  );
};

export default generateAccessToken;

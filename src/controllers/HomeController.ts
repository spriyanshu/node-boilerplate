import { RequestHandler, Request, Response } from "express";
import User from "../models/User";

const Home: RequestHandler = (req: Request, res: Response) => {
  return res.send("hello");
};

const createUser: RequestHandler = async (req: Request, res: Response) => {
  console.log(req.body);

  const {
    name,
    email,
    avatar,
  }: { name: String; email: String; avatar: string } = req.body;
  const userCheck = await User.find({ email: email });

  if (userCheck.length > 0) {
    return res.json({ message: "user already exists" });
  }

  const newUser = new User({
    name: name,
    email: email,
    avatar: avatar,
  });

  await newUser.save();

  return res.json({ message: "successful" });
};

module.exports = { Home, createUser };

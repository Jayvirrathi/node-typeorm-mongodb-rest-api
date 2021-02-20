import { Request, Response } from "express";
import { User } from "../entity/User";

import {getMongoRepository} from "typeorm";

// const userRepository = getMongoRepository(User); 

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
	const userRepository = getMongoRepository(User); 
  const users = await userRepository.find();
  return res.json(users);
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
	const userRepository = getMongoRepository(User); 
  const results = await userRepository.findOne(req.params.id);
  return res.json(results);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
	const userRepository = getMongoRepository(User); 
  const newUser = await userRepository.create(req.body);
  const results = await userRepository.save(newUser);
  return res.json(results);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
	const userRepository = getMongoRepository(User); 
  const user = await userRepository.findOne(req.params.id);
  if (user) {
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
	const userRepository = getMongoRepository(User); 
  const results = await userRepository.delete(req.params.id);
  return res.json(results);
};

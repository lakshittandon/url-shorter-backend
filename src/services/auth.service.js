import bcrypt from 'bcryptjs';
import { createUser, findUserByEmail } from '../dao/user.dao.js';
import { signToken } from '../utils/helper.js';


export const registerUser = async ({ name, email, password }) => {
  if (await findUserByEmail(email)) throw new Error('User already exists');

  const user = await createUser(name, email, password);  // hashing happens in DAO
  return signToken({ id: user._id, email: user.email });
};

export const loginUser = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('User not found');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('Wrong password');

  return signToken({ id: user._id, email: user.email });
};
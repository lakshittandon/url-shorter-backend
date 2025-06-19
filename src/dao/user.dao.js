import UserSchema from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const findUserByEmail = async (email) => {    
    try {
        const user = await UserSchema.findOne({ email });
        return user;
    } catch (error) {
        throw new Error('Error finding user by email: ' + error.message);
    }
}   

export const findUserById = async (id) => {
    try {
        const user = await UserSchema.findById(id);
        return user;
    } catch (error) {
        throw new Error('Error finding user by ID: ' + error.message);
    }
}



export const createUser = async (name, email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  return new UserSchema({ username: name, email, password: hashed }).save();
};
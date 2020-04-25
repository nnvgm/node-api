import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  age: Number,
});

export default model('users', UserSchema, 'users');

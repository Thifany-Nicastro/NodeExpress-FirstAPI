import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

const { Schema } = mongoose;

const userSchema = new Schema({
  uuid: {type: String, required: true},
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
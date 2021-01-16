import HttpStatus from 'http-status-codes';
import { uuid } from 'uuidv4';
import User from '../models/userModel';

/**
 * Get all users.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function indexUser(request, response, next) {
  response.json({ users: 'All users! :D' });
}

/**
 * Get a user by id.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function showUser(request, response, next) {
  const { id } = request.params

  User.find({ _id: id })
    .then(result => {
      response.json(result);
    })
    .catch(err => {
      response.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
    });
}

/**
 * Create a new user.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function storeUser(request, response, next) {
  const { name, email, password } = request.body

  const user = new User({
    uuid: uuid(),
    name: name,
    email: email,
    password: password
  });

  user.save()
    .then(result => {
      response.status(HttpStatus.CREATED).json({
        message: 'User stored!',
        user: user
      });
    })
    .catch(err => {
      console.log(err);
      response.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
    });
}

/**
 * Update a user.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function updateUser(request, response, next) {
  response.json({ user: `Update user ${request.params.id}` });
}

/**
 * Delete a user.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function deleteUser(request, response, next) {
  const { id } = request.params;

  User.deleteOne({ _id: id })
    .then(result => {
      response.sendStatus(HttpStatus.NO_CONTENT);
    })
    .catch(err => {
      response.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
    });
}

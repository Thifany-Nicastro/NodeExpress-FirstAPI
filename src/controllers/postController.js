import HttpStatus from 'http-status-codes';
import { uuid } from 'uuidv4';
import post from '../models/post';

/**
 * Get all posts.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function indexpost(request, response, next) {
  response.json({ posts: 'All posts! :D' });
}

/**
 * Get a post by id.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function showpost(request, response, next) {
  const { id } = request.params
  response.json({ post: `Show post ${id}` });
}

/**
 * Create a new post.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function storepost(request, response, next) {
  const { name } = request.body
  response.json({ post: `Store post ${name}` });
}

/**
 * Update a post.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function updatepost(request, response, next) {
  response.json({ post: `Update post ${request.params.id}` });
}

/**
 * Delete a post.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function deletepost(request, response, next) {
  response.json({ post: `Delete post ${uuid()}` });
}

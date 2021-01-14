import HttpStatus from 'http-status-codes';

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
    response.json({ user: `Show user ${id}` });
}

/**
 * Create a new user.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export function storeUser(request, response, next) {
    const { name } = request.body
    response.json({ user: `Store user ${name}` });
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
    response.json({ user: `Delete user ${request.params.id}` });
}

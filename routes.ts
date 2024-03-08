/**
 * An Array of public routes that are accessible to all users
 * These routes are not protected by the authentication middleware
 * @type {string[]}
 */

export const publicRoutes=[
    "/",
    "/new-verification",
]

/**
 * An Array of routes that are protected by the authentication middleware
 * These routes are only accessible to authenticated users
 * @type {string[]}
 */

export const authRoutes=[
    "/login",
    "/register",
    "/error"
]

/**
 * The prefix for all API routes
 * Routes that start with this prefix are considered API routes and are protected by the authentication middleware
 * @type {string}
 */


export const apiAuthPrefix = "/api/auth"


/**
 * The default redirect path after a user logs in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"
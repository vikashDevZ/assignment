const { Router } = require("express");
const router = Router();

const {
  createUser,
  createUserResponse,
  getUserResponse,
} = require("../controllers/user.js");


/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with the provided name and email
 *     requestBody:
 *       description: User details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user to be created
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email of the user to be created
 *             required:
 *               - name
 *               - email
 *     responses:
 *       200:
 *         description: The created user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: The request was not properly formatted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 *       500:
 *         description: An internal server error occurred
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 */
router.post("/create", createUser);


/**
 * @swagger
 * /user/question:
 *   post:
 *     summary: Create user response for a question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               questionId:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: User response created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 selectedOptions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       questionId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           question:
 *                             type: string
 *                           options:
 *                             type: array
 *                             items:
 *                               type: string
 *                       options:
 *                         type: array
 *                         items:
 *                           type: number
 *       401:
 *         description: Please provide all the values
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/question", createUserResponse);

/**
 * @swagger
 * /user/responses/{id}:
 *   get:
 *     summary: Get user's responses
 *     description: Retrieves a user's responses with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The user's id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserResponse'
 *       401:
 *         description: The request was not properly formatted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 *       500:
 *         description: An internal server error occurred
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 */
router.get("/responses/:id", getUserResponse);

module.exports = router;

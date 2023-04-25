const express = require("express");
const router = express.Router();

const {
  createQuestion,
  deleteQuestion,
  getQuestion,
  updateQuestion,
} = require("../controllers/question");

// router
//   .route("/question")
//   .get(getQuestion)
//   .post(createQuestion)
//   .delete(deleteQuestion)
//   .put(updateQuestion);

/**
 * @swagger
 * /question:
 *   get:
 *     summary: Get all questions
 *     description: Returns a list of all questions
 *     parameters:
 *       - name: limit
 *         in: query
 *         description: Maximum number of question to return
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", getQuestion);

/**
 * @swagger
 * /question:
 *   post:
 *     summary: Create a question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: The question to be created
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The list of options for the question
 *               correctOptions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The correct options for the question
 *             required:
 *               - question
 *               - options
 *               - correctOptions
 *     responses:
 *       200:
 *         description: The created question object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier for the question
 *                 question:
 *                   type: string
 *                   description: The question text
 *                 options:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: The list of options for the question
 *                 correctOptions:
 *                   type: array
 *                   items:
 *                     type: number
 *                   description: The correct options for the question
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
router.post("/", createQuestion);

/**
 * @swagger
 * /question/{id}:
 *   put:
 *     summary: Update an existing question
 *     description: Updates an existing question with the provided details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Question details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateQuestion'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier for the question
 *                 question:
 *                   type: string
 *                   description: The updated question text
 *                 options:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: The updated list of options for the question
 *                 correctOptions:
 *                   type: array
 *                   items:
 *                     type: number
 *                   description: The updated correct options for the question
 *       401:
 *         description: The request was not properly formatted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The request was not properly formatted
 *       500:
 *         description: An internal server error occurred
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: internal server error
 */
router.put("/:id", updateQuestion);

/**
 * @swagger
 * /question/{id}:
 *   delete:
 *     summary: Delete a question
 *     description: Deletes the question with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the question to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete("/:id", deleteQuestion);

module.exports = router;

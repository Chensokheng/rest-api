import express from 'express';
import TodoValidator from '../validator';
import Middleware from '../../middleware';
import TodoController from '../controller';

const router = express.Router();

router.post(
	'/create',
	TodoValidator.checkCreateTodo(),
	Middleware.handleValidationError,
	TodoController.create
);

router.get(
	'/read',
	TodoValidator.checkReadTodo(),
	Middleware.handleValidationError,
	TodoController.readPagination
);

router.get(
	'/read/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	TodoController.readByID
);

router.put(
	'/update/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	TodoController.update
);

router.delete(
	'/delete/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	TodoController.delete
);

export default router;

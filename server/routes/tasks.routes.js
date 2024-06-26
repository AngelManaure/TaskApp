import { Router } from "express";

import { authRequired } from "../middlewares/auth.middleware.js";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/tasks.schema.js";

import prisma from '../db.js'

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);

router.delete("/tasks/:id", authRequired, deleteTask);


router.put("/tasks/:id", authRequired, updateTask);



export default router;

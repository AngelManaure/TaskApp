import prisma from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.tasks.findMany({
        where: {
            authorId: req.user.id
        }
    });
    if (!tasks) {
      res.status(404).json({ message: "Tareas no encontradas" });
    } else {
      res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await prisma.tasks.findUnique({
      where: {
        id: parseInt(req.params.id),
        authorId: req.user.id
      },
    });
    if (!task) {
      res.status(404).json({ message: "Tarea no encontrada" });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTask = await prisma.tasks.create({
      data: {
        title: title,
        description: description,
        authorId: req.user.id,
      },
    });
    if (!newTask) {
      res.status(404).json({ message: "Error al crear la tarea" });
    } else {
      res.status(200).json(newTask);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskDeleted = await prisma.tasks.delete({
        where: {
            id: parseInt(req.params.id),
            authorId: req.user.id
        }
    });
    if (!taskDeleted) {
        res.status(404).json({ message: 'Tarea a eliminar no encontrada' })
    }else {
        res.sendStatus(204)
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
    try {
        const taskUpdated = await prisma.tasks.update({
            where: {
                id: parseInt(req.params.id),
                authorId: req.user.id
            },
            data: req.body
        });
        if (!taskUpdated) {
            res.status(404).json({ message: 'Tarea a actualizar no encontrada' })
        }else {
            res.status(200).json(taskUpdated)
        }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

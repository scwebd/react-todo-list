const router = require("express").Router();
const todoController = require("../../controllers/todoController");

// Matches with "/api/todos"
router.route("/")
  .get(todoController.findAll)
  .post(todoController.create);

// Matches with "/api/todos/:id"
router
  .route("/:id")
  .get(todoController.findById)
  .put(todoController.update)
  .delete(todoController.remove);

module.exports = router;

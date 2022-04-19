import { todosService } from "../services/TodosService";
import BaseController from "../utils/BaseController";

export class TodosController extends BaseController {
    constructor() {
        super('api/:user/todos')
        this.router
            .get('', this.getAllTodos)
            .post('', this.createTodo)
            .put('/:id', this.editTodo)
            .delete('/:id', this.removeTodo)
    }

    async getAllTodos(req, res, next) {
        try {
            req.query.user = req.params.user
            const todos = await todosService.getAllTodos(req.query)
            res.send(todos)
        } catch (error) {
            next(error)
        }
    }

    async createTodo(req, res, next) {
        try {
            req.body.user = req.params.user
            const newTodo = await todosService.createTodo(req.body)
            res.send(newTodo)
        } catch (error) {
            next(error)
        }
    }

    async editTodo(req, res, next) {
        try {
            const todoToEdit = req.body
            res.send(await todosService.editTodo(req.params.id, todoToEdit))
        } catch (error) {
            next(error)
        }
    }

    async removeTodo(req, res, next) {
        try {
            const deletedTodo = await todosService.removeTodo(req.params.id)
            res.send(deletedTodo)
        } catch (error) {
            next(error)
        }
    }
}
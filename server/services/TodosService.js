import { dbContext } from "../db/DbContext"

class TodosService {

    async getAllTodos(query = {}) {
        const todos = await dbContext.Todos.find(query)
        return todos
    }
    async createTodo(body) {
        const newTodo = await dbContext.Todos.create(body)
        return newTodo
    }
    async editTodo(id, todoToEdit) {
        const editedTodo = await dbContext.Todos.findById(id)
        editedTodo.description = todoToEdit.description
        // null coalescence... if user 
        editedTodo.completed = todoToEdit.completed != null ? todoToEdit.completed : editedTodo.completed
        await editedTodo.save()
        return editedTodo
    }

    async removeTodo(id) {
        await dbContext.Todos.findByIdAndDelete(id)
    }

}

export const todosService = new TodosService()
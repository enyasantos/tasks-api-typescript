import {Router, Request, Response} from 'express'

import { getTasks, saveTask, getTask, updateTask, finishedTask, destroyTask } from './controller/TasksController';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World' })
})

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.patch('/tasks/:id', finishedTask) //alterar apenas um registro
routes.delete('/tasks/:id', destroyTask)

export default routes;

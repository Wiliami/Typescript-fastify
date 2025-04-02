import { FastifyInstance } from 'fastify'
import home from './home.ts'
import users from './users/create.ts'
import sum from '../utils/sum.ts';

async function routes(app: FastifyInstance) {
    const routes = [home, users] 
    
    routes.forEach((route) => {
        app.register(route)
    })
}

export default routes;
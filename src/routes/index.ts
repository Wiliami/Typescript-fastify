import { FastifyInstance } from 'fastify'
import home from './home.ts'
import sum from '../utils/sum.ts';

async function routes(app: FastifyInstance) {
    const routes = [home, sum] 
    
    routes.forEach((route) => {
        app.register(route)
    })
}

export default routes;
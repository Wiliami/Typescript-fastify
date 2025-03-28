import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import sum from '../utils/sum.ts'

try {
    const soma = await sum(1, 2);
    console.log(soma)
} catch (error) {
    console.error('Falhou')
}

async function home(app: FastifyInstance) {
    app.get('/users', (request: FastifyRequest, reply: FastifyReply) => {
       
    })
}

export default home;
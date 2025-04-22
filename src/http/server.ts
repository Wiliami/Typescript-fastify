import Fastify, { FastifyReply } from "fastify"
import routes from '../routes/index.ts'

const app = Fastify();

app.register(routes);
app.get('/', (req, reply: FastifyReply) =>{
    reply.send('Hello')
})

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        console.log(err)
    }
    console.log(`Server running on port ${address}`)
})
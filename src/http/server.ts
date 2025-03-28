import Fastify from "fastify"
import routes from '../routes/index.ts'

const app = Fastify();

app.register(routes);

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        console.log(err)
    }
    console.log(`Server running on port ${address}`)
})
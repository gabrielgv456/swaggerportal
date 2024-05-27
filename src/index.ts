import express from 'express'
import swagger from 'swagger-ui-express'
import json from './swagger.json'

const app = express()

app.use(express.json())
app.use('/', swagger.serve, swagger.setup(json))
app.listen(80, ()=> console.log('running port 80'))
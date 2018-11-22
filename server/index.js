import { resolve } from 'path';
import express from 'express';
import router from './router'

const app = express();

const port = process.env.PORT | 3000

app.set('views', resolve(__dirname, '../dist/views'))
app.use(express.static(resolve(__dirname, '../dist')))
app.set('view engine', 'pug')
app.use(router)

app.listen(port, () => console.log(`server is up and running on port ${port}`))
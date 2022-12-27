import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import userRoutes from "./routers/users.routes"
import handleError from "./errors/handleError"
import loginRoute from "./routers/login.route"
import categoryRoutes from "./routers/category.routes"
import propertiesRoutes from "./routers/properties.routes"
import scheduleRoutes from "./routers/schedule.routes"

const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', loginRoute)
app.use('/categories', categoryRoutes)
app.use('/properties', propertiesRoutes)
app.use('/schedules', scheduleRoutes)

app.use(handleError)

export default app
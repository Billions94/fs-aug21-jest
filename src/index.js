import { app } from './app.js'
import mongoose from "mongoose"

const port = process.env.PORT || 3001;

console.log(process.env.MONGO_URL_CONNECTION)

mongoose.connect(process.env.MONGO_URL_CONNECTION)
    .then(() => {
        console.log(`Connected to Mongo 🟢`);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })

   
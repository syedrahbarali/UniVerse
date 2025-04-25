import { config } from "dotenv";
config();
import app from "./app.js";
import dbConnect from "./db/dbConenct.js";
dbConnect().then((res) => {
    if (res?.connection.host) {
        console.log(`Database is connected at localhost  : ${process.env.MONGODB_URI}`);
        app.listen(process.env.PORT, () => {
            console.log(`Server is started at PORT : ${process.env.PORT}`);
        });
    }
});

import { app } from "./app";
import Db from "./infra/db";

const db = new Db()
db.createConnection()

app.listen(3050, () => { 'Server is running' })
import { server } from "./app";
import Db from "./infra/db";

const db = new Db()
db.createConnection()

server.listen(3050, () => { console.log('Server is running') })
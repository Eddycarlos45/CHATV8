import mongoose from 'mongoose'

class Db {
    private DB_URL = 'mongodb://localhost/chatv8'

    createConnection() {
        mongoose.connect(this.DB_URL)
    }
}

export default Db
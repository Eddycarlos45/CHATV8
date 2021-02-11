import mongoose from 'mongoose'

class Db {
    private DB_URL = 'mongodb://localhost:27017/chatv8'

    createConnection() {
        mongoose.connect(this.DB_URL)
    }
}

export default Db
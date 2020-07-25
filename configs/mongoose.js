const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// const uri = 'mongodb+srv://trieult:trieult@cluster0-7ejsu.mongodb.net/clother?retryWrites=true&w=majority'
const uri = 'mongodb://127.0.0.1:27017/testing'
const connection = async function () {
  return await  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
}

const closed = async function () {
  return await mongoose.connection.close()
}
const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () {
  return this.toString()
}

module.exports = {
  connection,
  closed
}
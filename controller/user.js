const userService = require("../service/userService.js")

exports.signup = async (req, res) => {
   try {
      const username = req.body.username
      const password = req.body.password
      const email = req.body.email
      const signup = await userService.userSignup(username, email, password)
      res.send({ "status": signup.statusCode, "data": signup.data })
   }
   catch (e) {
      throw (e)
   }
}

exports.login = async (req, res) => {
   try {
      const password = req.body.password
      const email = req.body.email
      const login = await userService.login(email, password)
      res.send({ "status": login.statusCode, "data": login.data })
   }
   catch (e) {
      throw (e)
   }
}

exports.fetch = async (req, res) => {
   try {
      const id = req.params.id
      const get = await userService.fetchData(id)
      res.send({ "status": get.statusCode, "data": get.data })
   }
   catch (e) {
      throw (e)
   }
}

exports.update = async (req, res) => {
   try {
      const id = req.params.id
      const age = req.body.age
      const gender = req.body.gender
      const dob = req.body.dob
      const mobile = req.body.mobile
      const update = await userService.update(age, gender, dob, mobile, id)
      res.send({ "status": update.statusCode, "data": update.data })
   }
   catch (e) {
      throw (e)
   }
}

exports.insert = async (req, res) => {
   try {
      const age = req.body.age
      const gender = req.body.gender
      const dob = req.body.dob
      const mobile = req.body.mobile
      const loginId = req.params.id
      const insert = await userService.insert(age, gender, dob, mobile, loginId)
      res.send({ "status": insert.statusCode, "data": insert.data })
   }
   catch (e) {
      throw (e)
   }
}
const db = require("../database/connection.js");
const queries = require("../database/queries.json");


exports.userSignup = (username, email, password) => {
    return new Promise((resolve, reject) => {
        db.connect.query(queries.signup, [username, email, password], (err, result) => {
            if (err) {
                console.log(err);
                reject({ statusCode: 403 })
            }
            else {
                resolve({ statusCode: 200, data: result })
            }
        })
    }).then((data) => {
        return { statusCode: data.statusCode, data: data.data }
    }).catch((err) => {
        return { statusCode: err.statusCode }
    })
}


exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        db.connect.query(queries.login, [email], (err, result) => {


            console.log(result, "result")

            if (result[0] === undefined) {
                console.log("this");
                reject({ statusCode: 403 })
            }

            else if (result[0].password !== password) {
                reject({ statusCode: 403 })
            }
            else {
                resolve({ statusCode: 200, data: result })
            }
        })
    }).then((data) => {
        return { statusCode: data.statusCode, data: data.data }
    }).catch((err) => {
        return { statusCode: err.statusCode }
    })
}

exports.fetchData = (id) => {
    return new Promise((resolve, reject) => {
        db.connect.query(queries.get, [id], (err, result) => {
            if (err) {
                reject({ statusCode: 403 })
            }
            else {
                resolve({ statusCode: 200, data: result })
            }
        })
    }).then((data) => {
        return { statusCode: data.statusCode, data: data.data }
    }).catch((err) => {
        return { statusCode: err.statusCode }
    })
}

exports.update = (age, gender, dob, mobile, loginId) => {
    return new Promise((resolve, reject) => {
        db.connect.query(queries.update, [age, gender, dob, mobile, loginId], (err, result) => {
            if (err) {
                console.log(err)
                reject({ statusCode: 403 })
            }
            else {
                resolve({ statusCode: 200, data: result })
            }
        })
    }).then((data) => {
        return { statusCode: data.statusCode, data: data.data }
    }).catch((err) => {
        return { statusCode: err.statusCode }
    })
}

exports.insert = (age, gender, dob, mobile, id) => {
    return new Promise((resolve, reject) => {
        db.connect.query(queries.insert, [age, gender, dob, mobile, id], (err, result) => {
            if (err) {
                console.log(err)
                reject({ statusCode: 403 })
            }
            else {
                resolve({ statusCode: 200, data: result })
            }
        })
    }).then((data) => {
        return { statusCode: data.statusCode, data: data.data }
    }).catch((err) => {
        return { statusCode: err.statusCode }
    })
}



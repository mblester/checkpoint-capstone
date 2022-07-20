const res = require("express/lib/response");
const mysql = require("mysql");
const pool = require("../sql/connection");

const getUser = (req, res) => {  
    pool.query("SELECT * FROM users", (err, rows) => {
       res.json(rows);
    })
  }


const getUserById = (req, res) => {
    let id = req.params.id;
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    sql = mysql.format(sql, ["users", "id", id]);
       res.json(rows)
  }

  const createUser = (req, res) => {
    console.log(req.body);
    const { first_name, last_name } = req.body;
    let sql = `INSERT INTO ?? VALUES (null, ?, ?)`;
  
    sql = mysql.format(sql, ["users", first_name, last_name]);
  
    pool.query(sql, (err, rows) => {
      return res.json(rows);
    })
  }

  const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    let sql = "UPDATE ?? SET ? WHERE ?? = ?";
    sql = mysql.format(sql, ["users", body, "id", id]);
  
    pool.query(sql, (err, results) => {
      return res.status(204).json();
    })
  }

  const deleteUserById = (req, res) => {
    const { id } = req.params;
    let sql = "DELETE FROM ?? WHERE ?? = ?;";
    sql = mysql.format(sql, ["users", "id", id])
  
    pool.query(sql, (err, results) => {
      console.log(err)
      console.log(results)
      return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
    })
  }

  module.exports = {getUser, getUserById, createUser, updateUser, deleteUserById}
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default sql;

// const mysql = require("mysql2");
let db = null;
class DB {
  constructor() {
  //   db = mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "DB_PASSWORD",
  //     database: "advanced-chat-app",
  //   });
  //   db.connect(function (err) {
  //     if (err) console.log(err);
  //   });
  }

  async addUser(data) {
    // return new Promise(async (resolve, reject) => {
    //   if (await this.isUserExist(data)) {
    //     resolve(true);
    //   } else
    //     db.execute(
    //       "INSERT INTO users (name, user_id) VALUES (?,?)",
    //       [data.name, data.user_id],
    //       function (err, rows) {
    //         if (err) reject(new Error(err));
    //         else resolve(rows);
    //       }
    //     );
    // });
    
    try {
      if (await this.isUserExist(data)) {
        const data = await sql`
        INSERT INTO users (name, user_id)
        VALUES (${data.name}, ${data.user_id});
        `
        return data;
      }
  
    } catch (error) {
      console.error('Database Error: ', error);
      throw new Error('Failed to add user.')
    }
  }

  async isUserExist(data) {
    // return new Promise((resolve, reject) => {
    //   db.execute(
    //     "SELECT * FROM users WHERE name = ?",
    //     [data.name],
    //     function (err, rows) {
    //       if (err) reject(new Error(err));
    //       else resolve(rows[0]);
    //     }
    //   );
    // });
    try {
      const data = await sql`
      SELECT *
      FROM users
      WHERE name = ${data.name}
      `
      return data;
  
    } catch (error) {
      console.error('Database Error: ', error);
      throw new Error('Failed to add user.')
    }
  }

  fetchUserMessages(data) {
    const messages = [];
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * from messages where name =?",
        [data.name],
        function (err, rows) {
          if (err) reject(err);
          else resolve(rows);
        }
      );

    });
  }

  storeUserMessage(data) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO messages (message, user_id, name) VALUES (?,?,?)",
        [data.message, data.user_id, data.name],
        function (err, rows) {
          if (err) reject(new Error(err));
          else resolve(rows);
        }
      );
    });
  }
}

module.exports = DB;
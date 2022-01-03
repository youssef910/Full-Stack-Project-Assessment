const { Pool } = require('pg');
const config = require('./config');
const pool = new Pool(config);

const getAllVideos = {
  get: (resolve, reject) => {
    pool.query('SELECT * FROM videos ORDER BY id', (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  },
  getById: (id, resolve, reject) => {
    pool.query(`SELECT * FROM videos WHERE id=${id}`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  },
  search: (searchWord, resolve, reject) => {
    pool.query(
      `SELECT * FROM videos WHERE LOWER(title)  LIKE '%'||$1||'%'`,
      [searchWord],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  },
  UpVote: (id, resolve, reject) => {
    pool.query(
      'UPDATE videos set rating = (rating+1) where id =$1 ',
      [id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  },
};

module.exports = getAllVideos;

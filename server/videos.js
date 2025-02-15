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
  sortBy: (sorter = 'id', resolve, reject) => {
    pool.query(
      `SELECT * FROM videos ORDER BY ${sorter} ASC`,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
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
      `SELECT * FROM videos WHERE LOWER(title)  ~ $1  `,
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
  upVote: (id, resolve, reject) => {
    pool.query(
      `UPDATE videos set rating = (rating + 1 ) where id =${id}`,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  },
  downVote: (id, resolve, reject) => {
    pool.query(
      `UPDATE videos set rating = (rating - 1 ) where id =${id}`,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  },
  addVideo: (newData, resolve, reject) => {
    pool.query(
      `INSERT INTO videos(title ,url)VALUES ($1,$2)`,
      [newData.title, newData.url],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  },
  deleteVideo: (id, resolve, reject) => {
    pool.query(`DELETE FROM videos WHERE id =${id}`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  },
};

module.exports = getAllVideos;

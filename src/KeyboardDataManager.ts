import sqlite3 from 'sqlite3';
import { DatabaseFilename } from './constant';
import { formatDate } from './share';
import { getConfig } from './store';

const databaseFilename = getConfig(DatabaseFilename) as string;
console.log('\ndatabaseFilename', databaseFilename);

const sqlite = sqlite3.verbose();
const db = new sqlite.Database(databaseFilename);

export default class KeyboardDataManager {
  constructor() {
    db.run('CREATE TABLE IF NOT EXISTS record (key_name TEXT, create_time TEXT);');
  }

  getRankList(config:
  {
    begin: string,
    end: string,
    page: number,
    pageSize: number
  }) {
    const {
      begin, end, page, pageSize,
    } = config;
    return new Promise((resolve, reject) => {
      let searchSQL = '';
      let totalSQL = '';
      if (begin && end) {
        searchSQL = /* SQL */`
          SELECT key_name as name, COUNT(key_name) as count
          from record
          WHERE create_time >= $begin AND create_time <= $end
          GROUP BY key_name
          ORDER BY COUNT(key_name) DESC
          LIMIT $pageSize OFFSET $page;
        `;
        totalSQL = /* SQL */'SELECT count(key_name) as total FROM record WHERE create_time >= $begin AND create_time <= $end';
      } else {
        searchSQL = /* SQL */`
          SELECT key_name as name, COUNT(key_name) as count
          from record
          GROUP BY key_name
          ORDER BY COUNT(key_name) DESC
          LIMIT $pageSize OFFSET $page;
        `;
        totalSQL = /* SQL */'SELECT count(key_name) as total FROM record';
      }

      db.all(searchSQL, {
        $page: page,
        $pageSize: pageSize,
        $begin: begin,
        $end: end,
      }, (err, data) => {
        if (err) reject(err);
        db.get(totalSQL, {
          $begin: begin,
          $end: end,
        }, (e, total) => {
          if (e) reject(e);
          const result = {
            total: total.total,
            list: data,
          };
          resolve(result);
        });
      });
    });
  }

  clearData() {
    return new Promise((resolve, reject) => {
      db.run(/* SQL */'DROP TABLE record;', (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }

  dispose() {
    db.close();
  }

  append(e: { name: string }) {
    const { name } = e;
    const time = formatDate(new Date());

    return new Promise((resolve, reject) => {
      db.run(/* SQL */'INSERT INTO record VALUES (?, ?)', [name, time], (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
}

import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('fuelmanager.db');

    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Expenses(id INTEGER PRIMARY KEY NOT NULL, fuel INT NOT NULL, date TEXT NOT NULL, value REAL NOT NULL, volume REAL NOT NULL, odometer REAL NOT NULL);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;

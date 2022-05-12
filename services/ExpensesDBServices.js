import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const retrieveExpense = async () => {
  let results = await DB_EXEC(`SELECT * FROM Expenses`);
  //console.log(results);
  return results.rows._array;
}

export const insertExpense = async (param) => {
  let results = await DB_EXEC(`INSERT INTO Expenses(fuel, date, value, volume, odometer)
  VALUES(?,?,?,?,?)`, [param.fuel, param.date, param.value, param.volume, param.odometer]);
  //console.log(results);
  return results.rowsAffected;
}
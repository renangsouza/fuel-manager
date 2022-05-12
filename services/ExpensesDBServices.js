import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const retrieveExpense = async () => {
  let results = await DB_EXEC(`SELECT * FROM Expenses`);
    return results.rows._array;
}

export const insertExpense = async (param) => {
  let results = await DB_EXEC(`INSERT INTO Expenses(fuel, date, value, volume, odometer)
  VALUES(?,?,?,?,?)`, [param.fuel, param.date, param.value, param.volume, param.odometer]);
  return results.rowsAffected;
}

export const updateExpense = async (param) => {
  let results = await DB_EXEC(`UPDATE Expenses SET fuel=?, date=?, value=?, volume=?, odometer=? WHERE id=?`, [param.fuel, param.date, param.value, param.volume, param.odometer, param.id]);
  return results.rowsAffected;
}

export const deleteExpense = async (id) => {
  let results = await DB_EXEC(`DELETE FROM Expenses WHERE id=?`, [id]);
  console.log("OPA")
  return results.rowsAffected;
}
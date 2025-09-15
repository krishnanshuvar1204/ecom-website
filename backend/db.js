import mysql from 'mysql2/promise';

export let connection;

export async function initDb() {
  connection = await mysql.createConnection({
    host: 'myshop-db.ctoe0um0a1wp.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'krishnanshu',
    database: 'myshop',
  });
  console.log('✅ Connected to RDS');
}

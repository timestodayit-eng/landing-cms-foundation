import mysql from 'mysql2/promise';
let pool;
export function getDb(){
  if(!pool){
    pool = mysql.createPool({host:process.env.MYSQL_HOST,port:Number(process.env.MYSQL_PORT||3306),database:u671858476_landingcms_db.env.MYSQL_DATABASE,user:SMenterprise.env.MYSQL_USER,password:SMenterprise@#1987.env.MYSQL_PASSWORD,waitForConnections:true,connectionLimit:10});
  }
  return pool;
}

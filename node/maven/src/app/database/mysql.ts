import mysql from 'mysql2'; // mysql 配置
import { MYSQL_HOST,MYSQL_PORT,MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWARD} from '../app.config';
export const connection = mysql.createConnection({
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT),
  user: MYSQL_USER,
  password:MYSQL_PASSWARD,
  database: MYSQL_DATABASE
})

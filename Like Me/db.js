import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Hikari@2024',
  database: 'likeme',
  port: 5432,
  allowExitOnIdle: true
});

export default pool;

import { Pool } from 'pg';

// Configuración de conexión
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_movies',
  password: '',
  port: 5432,
  options: '-c search_path=public'
});

// Probar la conexión
pool.connect()
  .then(client => {
    console.log('Conectado a PostgreSQL');
    client.release();
  })
  .catch(err => console.error('Error conectando a PostgreSQL', err));

export default pool;
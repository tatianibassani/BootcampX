const { Pool } = require('pg');

const params = process.argv;
const cohort = params[2];
const limit = params[3];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const values = [`%${cohort}%`, limit];

pool.query(`
SELECT students.id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name like $1
LIMIT $2;
`, values)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

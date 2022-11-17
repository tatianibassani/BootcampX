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

pool.query(`
SELECT students.id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name like '${cohort}%'
LIMIT ${limit};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));
select cohorts.name, count(cohorts.id) from cohorts
join students on students.cohort_id = cohorts.id
group by cohorts.name
having count(cohorts.id) >= 18
order by count(cohorts.id);
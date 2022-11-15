select c.name, count(a.id) as total_submissions from cohorts c
join students s on s.cohort_id = c.id
join assignment_submissions a on a.student_id = s.id
group by c.name
order by total_submissions desc;
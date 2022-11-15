select s.name, avg(a.duration) as average_duration from assignment_submissions a
join students s on s.id = a.student_id
where s.end_date is null
group by s.name
order by average_duration desc;
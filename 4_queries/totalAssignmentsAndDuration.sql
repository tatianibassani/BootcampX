SELECT day, count(*) as number_of_assignments, sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;


 

--Select the day, number of assignments, and the total duration of assignments.
--Order the results by the day.
select count(id), day from assignments 
group by day
having count(id) >= 10;
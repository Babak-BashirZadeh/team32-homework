-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT title, user.email
FROM task
LEFT JOIN user ON task.user_id = user.id
WHERE user.email LIKE '%@spotify.com%';

-- Get all the tasks for 'Donald Duck' with status 'Not started'

 SELECT
    task.title AS task_title,
    user.name AS user_name,
    status.name AS status
FROM task
    JOIN user ON task.user_id = user.id
    JOIN status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
    AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    task.title AS task_title,
    task.created AS created_date,
    user.name AS user_name
FROM task
    JOIN user ON task.user_id = user.id
WHERE
    user.name = 'Maryrose Meadows'
    AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTHNAME(task.created) AS month_name, COUNT(*) AS task_amount
FROM task
GROUP BY
    MONTH(task.created),
    MONTHNAME(task.created)
ORDER BY MONTH(task.created);
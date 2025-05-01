-- 1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
SELECT * from task;
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('online class', 'Attent to class', '2017-10-14 06:54:16', '2017-10-15 13:05:09', '2017-10-16 13:05:09', 2, 10);

-- 2. Change the title of a task
UPDATE task SET title = 'classroom' WHERE task.id = 36;

-- 3. Change a task due date
UPDATE task SET due_date = '2017-10-17 06:54:16' WHERE task.id = 36;

-- 4. Change a task status
UPDATE task SET status_id = 1 WHERE task.id = 36;

-- 5. Mark a task as complete
UPDATE task set status_id = (select id from status where name = 'done') WHERE id = 36;

-- 6. Delete a task
DELETE from task where id = 36;

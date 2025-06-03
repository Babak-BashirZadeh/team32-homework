-- Active: 1744275539295@@127.0.0.1@3306@hyf_lesson1
-- Find out how many tasks are in the task table
select count(*) from task where not title = 'NULL';
-- Find out how many tasks in the task table do not have a valid due date
select COUNT(*) from task where due_date is NULL;
-- Find all the tasks that are marked as done
select * from task where status_id = 3;
select * from task join status on task.status_id = status.id where status.name = 'done';
-- Find all the tasks that are not marked as done
select * from task where not status_id = 3;
select * from task join status on task.status_id = status.id where not status.name = 'done';
-- Get all the tasks, sorted with the most recently created first
select * from task  ORDER BY created DESC;
-- Get the single most recently created task
select * from task  ORDER BY created DESC LIMIT 1;
-- Get the title and due date of all tasks where the title or description contains database
select task.title, task.due_date from task where task.title like '%database%' or task.description like '%database%';
-- Get the title and status (as text) of all tasks
select task.title, status.name from task join status on task.status_id = status_id;
-- Get the name of each status, along with a count of how many tasks have that status
select status.name, COUNT(task.status_id) as total_task from task join status on status.id = task.status_id GROUP BY status.name;
-- Get the names of all statuses, sorted by the status with most tasks first
select status.name, count(task.status_id) as total_task from task join status on status.id = task.status_id group by status.name ORDER BY total_task DESC;

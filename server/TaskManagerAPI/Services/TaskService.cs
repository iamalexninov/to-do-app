using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Data;
using TaskManagerAPI.Interfaces;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Services
{
    public class TaskService : ITaskService
    {
        private readonly TaskContext context;

        public TaskService(TaskContext context)
        { 
            this.context = context;
        }

        public async Task<TaskItem> GetTaskByIdAsync(int id) =>
            await this.context.Tasks.FirstOrDefaultAsync(t => t.Id == id);

        public async Task<IEnumerable<TaskItem>> GetPendingTaskAsync() =>
            await this.context.Tasks
                .Where(task => !task.IsCompleted && (task.DueDate == null || task.DueDate >= DateTime.UtcNow))
                .ToListAsync();

        public async Task<IEnumerable<TaskItem>> GetAllTasksAsync() =>
            await this.context.Tasks
                .Where(task => !task.IsCompleted)
                .ToListAsync();

        public async Task<IEnumerable<TaskItem>> GetOverdueTaskAsync() => 
            await this.context.Tasks
                .Where(task => !task.IsCompleted && task.DueDate < DateTime.Now)
                .ToListAsync();
        
        public async Task<TaskItem> CreateTaskAsync(TaskItem task)
        {
            try
            {
                this.context.Tasks.Add(task);
                await this.context.SaveChangesAsync();
                return task;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occured while creating a task: {ex.Message}");

                throw new InvalidOperationException("Failed to create a task. Please try again later.");
            }
        }

        public async Task<TaskItem> UpdateTaskAsync(int id, TaskItem updatedTask)
        {
            var task = await this.context.Tasks.FirstOrDefaultAsync(t => t.Id == id);

            if(task == null)
            {
                throw new KeyNotFoundException($"Task with ID {id} was not found.");
            }

            task.Title = updatedTask.Title;
            task.DueDate = updatedTask.DueDate;
            task.IsCompleted = updatedTask.IsCompleted;

            await this.context.SaveChangesAsync();

            return task;
        }

        public async Task<bool> MarkTaskAsDoneAsync(int id)
        {
            var task = await this.context.Tasks.FirstOrDefaultAsync(t => t.Id == id);
            if(task == null)
            {
                throw new KeyNotFoundException("Task Not Found");
            }

            task.IsCompleted = true;
            await this.context.SaveChangesAsync();

            return true;    
        }
    }
}

using TaskManagerAPI.Models;

namespace TaskManagerAPI.Interfaces
{
    public interface ITaskService
    {
        Task<TaskItem> GetTaskByIdAsync(int id);
        Task<IEnumerable<TaskItem>> GetAllTasksAsync();
        Task<IEnumerable<TaskItem>> GetPendingTaskAsync();
        Task<IEnumerable<TaskItem>> GetOverdueTaskAsync();
        Task<TaskItem> CreateTaskAsync(TaskItem task);
        Task<TaskItem> UpdateTaskAsync(int id, TaskItem task);
        Task<bool> MarkTaskAsDoneAsync(int id);
    }
}

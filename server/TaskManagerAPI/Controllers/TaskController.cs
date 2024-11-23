using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManagerAPI.Interfaces;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Controllers
{
    [Route("api/tasks/")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService taskService;

        public TaskController(ITaskService task)
        { 
            this.taskService = task;
        }

        [HttpPost]
        public async Task<ActionResult<TaskItem>> AddTask(TaskItem task)
        {
            if (task == null) 
                BadRequest("Insert task data, it is required.");

            var createdTask = await this.taskService.CreateTaskAsync(task);
            return CreatedAtAction(nameof(AddTask), new { id = createdTask.Id }, createdTask);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(int id)
        {
            var task = await this.taskService.GetTaskByIdAsync(id);
            if (task == null)
                return NotFound();
            return Ok(task);
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetAllTasks()
        {
            var tasks = await taskService.GetAllTasksAsync();
            return Ok(tasks);
        }

        [HttpGet("pending")]
        public async Task<ActionResult<TaskItem>> GetPendingTasks() =>
            Ok(await this.taskService.GetPendingTaskAsync());

        [HttpGet("overdue")]
        public async Task<ActionResult<TaskItem>> GetOverdueTasks() =>
            Ok(await this.taskService.GetOverdueTaskAsync());

        [HttpPut("{id}")]
        public async Task<ActionResult<TaskItem>> UpdateTask(int id, [FromBody] TaskItem updatedTask)
        {
            if(updatedTask == null)
            {
                return BadRequest();
            }

            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            var task = await this.taskService.UpdateTaskAsync(id, updatedTask);
            return Ok(task);
        }

        [HttpPut("{id}/complete")]
        public async Task<ActionResult<TaskItem>> MarkTaskAsDone(int id)
        {
            var success = await this.taskService.MarkTaskAsDoneAsync(id);
            if(!success)
                return NotFound();
            return NoContent();
        }
    }
}

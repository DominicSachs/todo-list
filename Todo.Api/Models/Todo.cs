using System.Collections.Generic;

namespace Todo.Api.Models
{
    public class Todo
    {
        private static List<Todo> _todos;

        static Todo()
        {
            _todos = new List<Todo>
            {
                new Todo
                {
                    Id = 1,
                    Title = "Einkaufsliste",
                    Items = new List<TodoItem>
                    {
                        new TodoItem(0, "Möhren"),
                        new TodoItem(1, "Gurke"),
                        new TodoItem(2, "Wein"),
                        new TodoItem(3, "Bier"),
                        new TodoItem(4, "Äpfel"),
                    }
                },
                new Todo
                {
                    Id = 2,
                    Title = "Einladungsliste",
                    Items = new List<TodoItem>
                    {
                        new TodoItem(0, "Robert de Niro"),
                        new TodoItem(1, "Al Pacino"),
                        new TodoItem(2, "Joe Pesci"),
                        new TodoItem(3, "Frank Vincent"),
                        new TodoItem(4, "Andy García"),
                        new TodoItem(5, "Chazz Palminteri"),
                    }
                }
            };
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public List<TodoItem> Items { get; set; } = new List<TodoItem>();

        public static List<Todo> GetData() => _todos;
    }
}

namespace Todo.Api.Models
{
    public class TodoItem
    {
        public TodoItem(int index, string title)
        {
            Index = index;
            Title = title;
        }

        public string Title { get; set; }
        public bool IsImportant { get; set; }
        public bool Completed { get; set; }
        public int Index { get; set; }
    }
}

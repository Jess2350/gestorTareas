// Traemos la lista de tareas del almacenamiento local
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion para agregar una tarea
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    task.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(task));
};

// Funcion para eliminar una tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(task));
};

// Funcion para actualizar la tarea
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Funcion para llevar las tareas
export const getTasks = () => tasks;
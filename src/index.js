import "./styles.css";
import { addTask, deleteTsk, toggleTask } from "./task";
import { renderTasks } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementsById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementsById("task-input").value;
        if(taskInput !== "") {
            addTask(taskInput);
            renderTasks();
            // Limpiar el cuadro de texto
            document.getElementById("task-input").value = "";
        }
    });

    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            toggleTask(taskId);
            renderTasks();
        }
    });
});
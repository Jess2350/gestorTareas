import "./styles.css";
import { addTask, deleteTsk, toggleTask } from "./task";
import { renderTasks } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementsById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementsById("task-input").value;
    });
});
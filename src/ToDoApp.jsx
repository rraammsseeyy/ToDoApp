import React, { useState } from "react"
import "./ToDoApp.css";

// Creating a ToDoApp function
export default function ToDoApp() {
    // Defined a state variable to store the current input
    const [input, setInput ] = useState("");

    // Defined a state variable to store the list of tasks
    const [tasks, setTasks] = useState([]);
    // An array is being used because that is where the tasks will be stored

    // Function to add a new tasks to the list
    function addTasks(){ 
        if (input.trim() !== ""){
            setTasks( [...tasks, input] );
            setInput("");
        }
        // trim removes an empty space before and after, but not in-between.
        // (...)spread operator helps us to create a copy of existing data
        // If the input field is not empty, it updates the tasks state by adding the input value to the existing tasks array 
        // And clears the input field by adding setInput to an empty string.
    }

    // Function to Remove a task on the tasks array based on its index
    function removeTask(index){
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    // It first creates a copy of the tasks array using the spread operator ([...tasks]) and stores it in a variable called updatedTasks.
    // Then, it uses the splice method to remove the task at the specified index (removing 1 item).
    // Finally, it updates the tasks state with the modified array, effectively removing the task.


  return (
    <div class="to-do-app-container"> <h1 class="heading">ToDoApp</h1>
        <div>
            <input class= "task-input" type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter a Task'/>
            <button class="add-task-btn" onClick={addTasks}>Add a Task</button>
        </div>
        <ul>
            {tasks.map ((data, index) => (
                <li class="list" key={index}>
                    {data}
                    <button class="delete-task-btn" onClick={() => removeTask(index)}>Remove</button>
                </li>
            )) }
            
        </ul>
    </div>
  )
}

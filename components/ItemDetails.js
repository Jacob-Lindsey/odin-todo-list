
export function displayItemDetails(id,todos) {
    let task = '';
    const reference = window.localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        const taskDetails = todos.filter(function(e) {
            return (e.id == id);
        });
        task = taskDetails[0];
    }
    
    const hiddenID = document.getElementById('hidden-id');
    hiddenID.innerHTML = id;
    document.getElementById('modal-window').style.display = 'block';
    document.querySelector('.modal-card-title').textContent = task.title + ' - ' + task.project;
    document.querySelector('.modal-card-title').value = task.title;
    document.getElementById('modal-task-title').textContent = task.title;
    document.getElementById('modal-task-title').value = task.title;
    document.getElementById('modal-details').textContent = task.details;
    document.getElementById('modal-details').value = task.details;
    document.getElementById('priority-list').value = task.priority;
    document.getElementById('date-picker').value = task.deadline;
    document.getElementById('project-selector').value = task.project;
    
    for (let i = 0; i < 5; i++) {
        if (task.category[i] == true) {
            document.getElementById(`cat${i+1}`).checked = true;
        } else {
            document.getElementById(`cat${i+1}`).checked = false;
        }
    }
}

// Pulls a specific Todo object's data to populate the modal form when opened
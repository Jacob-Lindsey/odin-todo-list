
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
    document.querySelector('.modal-card-title').innerHTML = `Task: ${task.title}`;
    document.getElementById('modal-details').textContent = task.details;

}
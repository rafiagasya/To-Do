function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Buat elemen list item baru
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Tambahkan teks tugas
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Tombol "Complete"
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = () => {
        listItem.classList.toggle('completed');
    };

    // Tombol "Delete"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        listItem.remove();
    };

    // Gabungkan elemen ke dalam list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);

    // Tambahkan list item ke dalam daftar tugas
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(listItem);

    // Hapus input setelah tugas ditambahkan
    input.value = '';
}

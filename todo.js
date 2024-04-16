function addTask () {
    // 入力された値をtaskに代入
    const task = document.getElementById('input');
    const date = document.getElementById('date');
    // ulを取得 ここにliを足していく
    const list = document.getElementById('ul');
    const listItem = document.createElement('li');
    listItem.textContent = task.value + "   " + date.value;
    list.appendChild(listItem);
    task.value = "";
}
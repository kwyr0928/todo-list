function addTask () {
    // 入力された値をtaskに代入
    const task = document.getElementById('input');
    // ulを取得 ここにliを足していく
    const list = document.getElementById('ul');
    const listItem = document.createElement('li');
    listItem.textContent = task.value;
    list.appendChild(listItem);
    task.value = "";
}
// document.getElementById('id-comp-btn').addEventListener('click', function() {
//     let taskTitle = document.querySelector('#task-section h1').innerText;
//     let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
//     let historyLog = document.getElementById('history-log');

//     let newEntry = document.createElement('p');
//     newEntry.className = 'p-3 bg-gray-200 rounded-2xl mt-3';
//     newEntry.innerText = `You have completed the task of "${taskTitle}" at ${currentTime}`;

//     historyLog.appendChild(newEntry);
// });

document.getElementById('id-comp-btn').addEventListener('click', function () {
    getSetHistory('task-section-1');
});
document.getElementById('id-comp-btn2').addEventListener('click', function () {
    getSetHistory('task-section-2');
});
document.getElementById('id-comp-btn3').addEventListener('click', function () {
    getSetHistory('task-section-3');
});
document.getElementById('id-comp-btn4').addEventListener('click', function () {
    getSetHistory('task-section-4');
});
document.getElementById('id-comp-btn5').addEventListener('click', function () {
    getSetHistory('task-section-5');
});
document.getElementById('id-comp-btn6').addEventListener('click', function () {
    getSetHistory('task-section-6');
});


document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("history-log").innerHTML = "";
});
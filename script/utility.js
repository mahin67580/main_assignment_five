 
function convertInnerTextToNumber(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function disableButton (id)
{
    document.getElementById(id).disabled = true;
}
function  update()
{
    const noOfTaskAssigned = convertInnerTextToNumber('id-task-assigned');
    const noOfTotalTask = convertInnerTextToNumber('id-total-task');
    const updatedNoOfTaskAssigned = noOfTaskAssigned - 1;
    const updatedNoOfTotalTask  =  noOfTotalTask + 1;
    document.getElementById('id-task-assigned').innerText = updatedNoOfTaskAssigned;
    document.getElementById('id-total-task').innerText = updatedNoOfTotalTask;
    alert("Board Updated Successfully");

    if(noOfTaskAssigned == 1)
    {
        alert("congrats !!! You have completed all the current task");
    }
}
function getSetHistory(taskSectionId) {
    let taskSection = document.getElementById(taskSectionId);
    let taskTitle = taskSection.querySelector('h1').innerText;
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let historyLog = document.getElementById('history-log');

    let newEntry = document.createElement('p');
    newEntry.className = 'p-3 bg-dbg rounded-2xl mt-3 text-sm';
    newEntry.innerText = `You have completed the task of ${taskTitle} at ${currentTime}`;

    historyLog.appendChild(newEntry);
}
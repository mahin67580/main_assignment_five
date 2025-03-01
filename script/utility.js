 
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
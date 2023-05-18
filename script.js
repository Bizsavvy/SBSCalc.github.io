function addTaskRow() {
    var table = document.getElementById("taskTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="number" class="timeAllocated">';
    cell2.innerHTML = '<input type="number" class="taskRating">';
    cell3.innerHTML = '<input type="text" class="hoursDone" readonly>';
  }
  
  function calculateWorkHours() {
    var rows = document.querySelectorAll("#taskTable tr:not(:first-child)");
  
    rows.forEach(function(row) {
      var timeAllocated = parseFloat(row.querySelector(".timeAllocated").value);
      var taskRating = parseFloat(row.querySelector(".taskRating").value);
  
      var hoursDone = (timeAllocated * taskRating) / 3600;
      row.querySelector(".hoursDone").value = hoursDone.toFixed(2);
    });
  }
  
  function calculateTotalHours() {
    var rows = document.querySelectorAll("#taskTable tr:not(:first-child)");
  
    var totalHours = 0;
    rows.forEach(function(row) {
      var hoursDone = parseFloat(row.querySelector(".hoursDone").value);
      if (!isNaN(hoursDone)) {
        totalHours += hoursDone;
      }
    });
  
    alert("Total Hours: " + totalHours.toFixed(2));
  }
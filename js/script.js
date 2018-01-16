var items = [1, 55, 38, 45, 75, 12, 199, 213];
console.log(items);

// Data to array convert keeping type.
function ToArrayConver(values) {
    var values = prompt("Enter array values using comma ','");
    values = values.split(",");
    for (i = 0; i < values.length; i++) {
        if (isNaN(parseInt(values[i]))) {
            values[i] = values[i];
        } else {
            values[i] = parseInt(values[i]);
        }
    }
}


var arrName = prompt("Enter the array name");
console.log(arrName);
document.getElementById("arrName").innerHTML = "Array: <span>" + arrName + "</span>";
var arrValue = prompt("Enter the array value");
document.getElementById("searchValue").innerHTML = "Search Value: <span>" + arrValue + "</span>";
console.log(arrValue);

function Binary_search(arrName, arrValue) {
    for (i = 0; i < items.length; i++) {
        if (arrValue == items[i]) {
            return i;
        }
    }
    console.log("Value not found in " + arrName + " array.");
    document.getElementById("result").innerHTML = "Value not found in <span>" + arrName + "</span> array.";
}

var index = Binary_search(arrName, arrValue);

if (index == undefined) {

} else {
    console.log(index);
    document.getElementById("result").innerHTML = "Search Result: <span>" + index + "</span>";
}
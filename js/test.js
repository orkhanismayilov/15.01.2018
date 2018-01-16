var arrays = [];

function CreateArray(arrName, values) {
    var arrName = prompt("Enter array name");
    var values = prompt("Enter array values using comma ','");
    values = values.split(",");
    for (i = 0; i < values.length; i++) {
        if (isNaN(parseInt(values[i]))) {
            values[i] = values[i];
        } else {
            values[i] = parseInt(values[i]);
        }
    }
    var arrValue = values;
    var arrName = [];

    arrName[arrName.length] = arrValue;

    
    console.log(arrName);
}
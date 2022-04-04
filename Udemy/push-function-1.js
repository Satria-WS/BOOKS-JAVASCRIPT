var output = [];
function PushItem(item) {
    return output.push(item);
}

PushItem('string');
PushItem('string');
PushItem('string');
PushItem('string');

//chalenge
//adding item
var SequenceNumber = [];
var TotalNumber = 1;

function AddNumber() {
   var add = SequenceNumber.push(TotalNumber ++);
   return SequenceNumber;
}

//reset
function ResetArray() {
   TotalNumber -= SequenceNumber.length;
}

function ResetTotal() {
   SequenceNumber.length = 0;
}


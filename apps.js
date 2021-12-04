var nameV, rollV, secV, genV;

function ready() {
    nameV = document.getElementById('namebox').value;
    rollV = document.getElementById('rollbox').value;
    secV = document.getElementById('secbox').value;
    genV = document.getElementById('genbox').value;
}


// Insert Process

document.getElementById('insert').onclick = function () {
    ready();
    firebase.database().ref('student/' + rollV).set({
        nameofstudent: nameV,
        rollno: rollV,
        section: secV,
        gender: genV,

    });
}

// Delete Process

document.getElementById('select').onclick = function () {
    ready();
    firebase.database().ref('student/' + rollV).on('value', function(snapshot){
        document.getElementById('namebox').value = snapshot.val().nameofstudent;
        document.getElementById('secbox').value = snapshot.val().section;
        document.getElementById('genbox').value = snapshot.val().gender;

    });
}

// Update Process

document.getElementById('update').onclick = function () {
    ready();
    firebase.database().ref('student/' + rollV).update({
        nameofstudent: nameV,
        section: secV,
        gender: genV,

    });
}

// Delete Process

document.getElementById('delete').onclick = function () {
    ready();
    firebase.database().ref('student/' + rollV).remove();
}


function fnfname(uname) {
    var letters = /^[ A-Za-z ]+$/;
    if (uname.value.length != 0) {
        if (uname.value.match(letters)) {
            document.getElementById('nameError').style.display = "none";
            return true;
        } else {
            document.getElementById('nameError').style.display = "block";
            document.getElementById(uname.id).focus();
            return false;
        }
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value) {
        if (uemail.value.match(mailformat)) {
            document.getElementById('emailError').style.display = "none";
            return true;
        } else {
            document.getElementById('emailError').style.display = "block";
            document.getElementById(uemail.id).focus();
            return false;
        }
    }
}

function CheckLength() {
    var msg_area = document.getElementById("MessageEnough");
    msg_area.innerHTML = "";
    if (document.getElementById("membershortdescription").value.length < 10) {
        msg_area.innerHTML = "YOU DID NOT ENTER ENOUGH INFORMATION";
        return false;
    }
}

function textCounter(membershortdescription, counterID, minLen) {
    cnt = document.getElementById(counterID);

    if (membershortdescription.value.length < minLen) {
        var x = minLen - membershortdescription.value.length
        cnt.innerHTML = "Total character: " + x;
    } else {
        cnt.innerHTML = "OK";
    }

}

function validateForm() {
    var f = document.forms["theform"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length - 1; i++) {
        if (f[i].value.length == 0)
            cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('submitbutton').disabled = false;
    } else {
        document.getElementById('submitbutton').disabled = true;
        alert("Please fill all the Fields");
        document.getElementById('submitbutton').disabled = false;
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var enroll = document.getElementById("enroll").value;

    var nameex = /^[a-zA-Z]+$/;
    var nregex = new RegExp(nameex);

    var phoneex = /^[0-9]+$/;
    var pregex = new RegExp(phoneex);

    var emailex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    var eregex = new RegExp(emailex);

    var enrollex = /^[0-9]{2}[A-Z]{4}[0-9]{5}$/;
    var enregex = new RegExp(enrollex);

    if (name == null || name == "") {
        alert("Name cannot be blank");
        return false;
    }
    else if (phone.length < 10 && phone.length > 10) {
        alert("phone number is not appropriate");
        return false;
    }
    else if (!nregex.test(name)) {
        alert("regular expression error in name");
        return false;
    }
    else if (!pregex.test(phone)) { 
        alert("regular expression error in phone number");
        return false;
    }
    else if (!eregex.test(email)) {
        alert("regular expression error in email");
        return false;
    }
    else if (!enregex.test(enroll)) {
        alert("regular expression error in enrollment number");
        return false;
    }
    display();
}
console.log("hello");
function checkForm() {
    var elem = $(":input");
    var i;
    for (i = 0; i < elem.length - 1; i++) {
        if (elem[i].value == "") {
            alert("empty")
            break;
        }
    }


    var mail = $('[name="mail"]').val();
    var at = mail.indexOf("@");
    var per = mail.lastIndexOf(".");
    if (at < 1 || per < at + 2 || per + 2 >= mail.length) {
        alert("Invalid E-mail");
    }

    var state = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
    ];

    var len = state.length;

    function ac(value) {
        $('#datalist').html('');


        for (var i = 0; i < len; i++) {
            if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {


                $("#datalist").append(`<option value=${state[i]}></option>`);


            }
        }
    }
}


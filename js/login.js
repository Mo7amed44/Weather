var userEmail = document.getElementById("userEmailLog");
var userPass = document.getElementById("userPassLog");
var login = document.getElementById("login");
var incorrect = document.getElementById("incorrect")
var activeUser = '';





function validateLog() {
    var elementsArray = JSON.parse(localStorage.getItem("userList"))
    for (var i = 0; i < elementsArray.length; i++) {
        if (userEmail.value === elementsArray[i].email && userPass.value === elementsArray[i].password) {
            console.log("hello");
            activeUser = elementsArray[i].name;
            window.location.href = "home.html"
            localStorage.setItem("hambzoo", activeUser)

            incorrect.classList.add("d-none")

        }

    }
    Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
        text: 'incorrect email or password',

    });
    // incorrect.classList.remove("d-none")  كاتب الاسم والايميل صح بيطلعله الكومنت ده الاول وبعدين يروح للصفحه اللى بعدها عادي user لما بحط الكومنت ده لو ال  


    cleanLog()
}

function cleanLog() {
    userEmail.value = "";
    userPass.value = ""
}






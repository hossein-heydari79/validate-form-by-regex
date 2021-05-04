const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const name = document.getElementById("name")
const family = document.getElementById("family")
const phone = document.getElementById("phone")

form.addEventListener("submit", e => {
    e.preventDefault()
    checkInputs()
})

const checkInputs = () => {
    let counter = 0;
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    const nameValue = name.value.trim()
    const familyValue = family.value.trim()
    const phoneValue = phone.value.trim()

    const nameFamilyPattern = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
    const usernamePattern = /^[a-zA-Z]+([-_]?[a-zA-Z0-9]){4}/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(\+98|0)?9\d{9}$/;
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


    console.log(typeof nameFamilyPattern);

    if (nameValue === "") {
        setError(name, "نام خود را وارد کنید")
    } else if (!nameFamilyPattern.test(nameValue)) {
        setError(name, "نام خود را فارسی وارد کنید")
    }
    else {
        setSuccess(name)
        counter++;
    }

    if (familyValue === "") {
        setError(family, "نام خانوادگی خود را وارد کنید")
    } else if (!familyValue.match(nameFamilyPattern)) {
        setError(family, "نام خانوادگی خود را فارسی وارد کنید")
    }
    else {
        setSuccess(family)
        counter++;
    }

    if (usernameValue === "") {
        setError(username, "نام کاربری را وارد کنید")
    } else if (!usernameValue.match(usernamePattern)) {
        setError(username, "نام کاربری را صحیح وارد کنید")
    }
    else {
        setSuccess(username)
        counter++;
    }

    if (emailValue === "") {
        setError(email, "ایمیل را وارد کنید")
    } else if (!emailValue.match(emailPattern)) {
        setError(email, "ایمیل خود را به صورت صحیح وارد کنید")
    }
    else {
        setSuccess(email)
        counter++;
    }

    if (phoneValue === "") {
        setError(phone, "شماره تلفن خود را وارد کنید")
    }
    else if (!phoneValue.match(phonePattern)) {
        setError(phone, "شماره تلفن خود را صحیح وارد کنید")
    }
    else {
        setSuccess(phone)
        counter++;
    }

    if (passwordValue === "") {
        setError(password, "پسورد را وارد کنید")
    } else if (!passwordValue.match(passPattern)) {
        setError(password, "پسورد را صحیح وارد کنید")
    }
    else {
        setSuccess(password)
        counter++;
    }


    if (password2Value === "") {
        setError(password2, "تکرار پسورد را وارد کنید")
    } else if (passwordValue !== password2Value) {
        setError(password2, "پسورد اشتباه وارد شده است")
    } else if (!passwordValue.match(passPattern)) {
        setError(password2, "پسورد را صحیح وارد کنید")
    }
    else {
        setSuccess(password2)
        counter++;
    }

    if (counter === 7) {
        alert("با موفقیت ارسال شد");

    }

    counter = 0;
}


const setSuccess = (input) => {
    const formControl = input.parentElement

    formControl.className = "form-control success"
}

const setError = (input, msg) => {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    formControl.className = "form-control error"
    small.innerText = msg
}
function signUp() {

    let name = document.getElementById('names').value
    let email = document.getElementById('emails').value
    let password = document.getElementById('passwords').value
    let gender = document.getElementById('genders').value
    let phonenumber = document.getElementById('phonenumbers').value

    let user = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        phonenumber: phonenumber
    }
    // console.log(user)


    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.230:3000/signup';
    // const url = 'https://legend-99.herokuapp.com/signup';
    Http.open("POST", url);
    // Http.send(user);
    Http.setRequestHeader("Content-Type", "application/json");
    // Http.send(JSON.stringify({ name: "John Rambo", time: "2pm" }));
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        document.getElementById("show").innerHTML = Http.responseText;
        // alert(Http.responseText)

    }
    return false;

}

function Login() {

    let loginEmail = document.getElementById("userEmail").value;
    let loginPassword = document.getElementById("userPassword").value;


    const Http = new XMLHttpRequest();
    // const url = 'http://192.168.40.60:3000/login';
    const url = 'http://192.168.50.230:3000/login';
    // const url = 'https://legend-99.herokuapp.com/login';


    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json")

    Http.send(JSON.stringify({
        email: loginEmail,
        password: loginPassword
    }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        document.getElementById("daashbord").innerHTML = Http.responseText;
        // window.location.href = "profile.html"

    }
    return false;
}
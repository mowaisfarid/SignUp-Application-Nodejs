function  SignUp(){
    const Http = new XMLHttpRequest();
    // const url = 'https://192.168.50.177:3000/bulb';
    const url = 'http://192.168.2.104:3000/bulb';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        alert(Http.responseText)
        // var result1 = Http.responseText
        // document.getElementById("one").innerHTML = result1;
    }
}

function Login(){
    const Http = new XMLHttpRequest();
    const url = 'http://192.168.2.104:3000/bulb';
    // const url = 'http://192.168.50.177:3000/bulb';
    Http.open("POST", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        alert(Http.responseText)

        
    }
}
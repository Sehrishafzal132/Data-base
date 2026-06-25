
function signup(){
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value

    localStorage.setItem('Email',email)
    localStorage.setItem('Password',pass)
            location.href = `./signin.html`

}
function signin(){
    var email = document.getElementById('lemail').value
    var pssword= document.getElementById('lpass').value

    if(localstorage.getItem('Email') == email && localStorage.getItem('Password')==pass){
        alert('welcome')
    
    }
    else{
        alert(' signup first')
    }
}

const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    Validite()
})

function Validite(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()

    if(usernameval ===''){
        seterror(username,'user name is requered')
    }else{
        setsuccess(username)
    }

    if(emailval===''){
        seterror(email,'email is requred')
    }
    else if(!validateEmail){
        seterror(email,'enter valid email')
    }
    else{
        setsuccess(email)
    }
    if(passwordval===''){
        seterror(password,'password is requred')
    }
    else if(passwordval.length<8){
        seterror(password,'password more than 8 characters')
    }
    else{
        setsuccess(password)
    }
    if(cpassword===''){
        seterror(cpassword,'cpassword is requred')
    }
    else if(cpasswordval !== passwordval){
        seterror(cpassword,'password does not match')
    }
    else{
        setsuccess(cpassword)
    }

}

function seterror(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}
function setsuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



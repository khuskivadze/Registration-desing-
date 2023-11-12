//passwords variables
const password =  document.getElementById('password');
const error0 =  document.querySelector('.span0')
const error1 =  document.querySelector('.span1')
const error2=  document.querySelector('.span2')
const showError =  document.querySelector('.show')

function  errorPasseord(){
    showError.innerHTML = 'პაროლი უნდა შეუცავდეს : '
    error0.innerHTML =  'პაროლი უნდა შეიცავდეს ერთ დიდ სიმბოლოს'
    error1.innerHTML =  'პაროლი უნდა შეიცავდეს ერთ ციფრს'
    error2.innerHTML =  'პაროლი უნდა  შედგებოდეს მინიმუმ 8 სიმბოლოსგან'
}password.addEventListener('click', errorPasseord)

function checkPassword (e) {
  let uppercaseCese = /[A-Z]/g; 
  let numbersCese = /[0-9]/g; 

  if (password.value.match(uppercaseCese)) { 
     error0.style.color = 'green';
  }if(password.value.match(numbersCese)) {
    error1.style.color = 'green'
  }if(password.value.length >= 8 ) {
     error2.style.color = 'green'
  }if(password.value.length < 8 ) {
    error2.style.color = 'red'
 }
}password.addEventListener('input', checkPassword)




const emailInput =  document.getElementById('email')
const emailError =  document.querySelector('.emailError')

function errorEmails () {
   emailError.innerHTML = 'შეიყვანეთ ახალი იმეილი'
}

emailInput.addEventListener ('click', errorEmails)

function checkEmail () {
    let emailLetters = /[a-z-@]/g; 
     
    if (emailInput.value.match(emailLetters)) { 
        emailError.innerHTML = 'იმეილი ვალიდურია';
        emailError.style.color = 'green';
    }

}
emailInput.addEventListener ('input', checkEmail)


 
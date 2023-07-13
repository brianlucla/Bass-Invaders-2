const signupEmailEl = document.getElementById('signupEmail');
const signupPassEl = document.getElementById('signupPassword');
const submitEl = document.getElementById('sign-up-btn');

console.log(emailEl);
const signUpHandler = async function(event){
  event.preventDefault();
  console.log("hi");
  const response = await fetch('/api/users',{
    method:'POST',
    body:JSON.stringify({
      email:signupEmailEl.value,
      password:signupPassEl.value,
    }),
    headers:{
      'Content-Type':'application/json'
    }
  });

  // handle response
  if(response.ok){
    alert("Sign up success!");
  } else {
    alert("Sign up failed :(");
  }
}

submitEl.addEventListener('click', signUpHandler);
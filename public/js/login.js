const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const signInEl = document.getElementById('sign-in-btn');

const signupEmailEl = document.getElementById("signupEmail");
const signupPassEl = document.getElementById("signupPassword");
const submitEl = document.getElementById("sign-up-btn");

const loginHandler = async function(event){
  event.preventDefault();

  const response = await fetch('/api/users/login', {
    method:'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passEl.value,
    }),
    headers:{
      'Content-Type':'application/json'
    }
  });

  // handle response here. I don't know what we want to do here

  if(response.ok){
    alert("Login success!");
  } else {
    alert("Login failed :(");
  }
}

const signUpHandler = async function (event) {
  event.preventDefault();

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      email: signupEmailEl.value,
      password: signupPassEl.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // handle response
  if (response.ok) {
    alert("Sign up success!");
  } else {
    alert("Sign up failed :(");
  }
};

signInEl.addEventListener("click", loginHandler);

submitEl.addEventListener("click", signUpHandler);
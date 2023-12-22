const loginFunction = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (inputs.email === user.email && inputs.password === user.password) {
    alert("You have successfully logged in");
  } else {
    alert("incorrect email or password");
  }
};

let inputs = {
  email: document.getElementById("email").value,
  password: document.getElementById("password").value,
};

const createFunction = () => {
  localStorage.setItem("user", JSON.stringify(inputs));
  alert("created-successfully");
};

document.getElementById("new-acc").addEventListener("click", createFunction);

document.getElementById("btn").addEventListener("click", loginFunction);



const myLoginFunction = () => {
    localStorage.setItem("username" , "idowusamson0777@gmail.com");
    localStorage.setItem("password" , "ayodele777");
    alert("Logged-in");
};

const myCreateFunction = () => {
    alert("created-succesfully");
};

document.getElementById("new-acc").addEventListener("click" , myCreateFunction);

document.getElementById("btn").addEventListener("click" , myLoginFunction);



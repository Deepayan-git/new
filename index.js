

document.querySelector("form").addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const role = document.querySelector("select[name='role']").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
      name: name,
      email: email,
      role: role,
      status: "active"
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("userRole", role);

  if(role === "admin"){
      window.location.href = "admin_dashboard.html";
  }
  else if(role === "manager"){
      window.location.href = "manager_dashboard.html";
  }
  else{
      window.location.href = "employee_dashboard.html";
  }

});


// logout
function logout(){
   localStorage.removeItem("userRole");
   window.location.href = "login.html";
}







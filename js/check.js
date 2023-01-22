const valid_name = localStorage.getItem("register_name");
const valid_email = localStorage.getItem("register_email");
const valid_password = localStorage.getItem("register_password");

const login_email = localStorage.getItem("login_email");
const login_password = localStorage.getItem("login_password");

// const user_login = document.getElementById("user-login");
// const logout_button = document.getElementById("logout-btn");
// const delete_button = document.getElementById("delete-btn");

window.onload = function () {
  if ((login_email, login_password === null)) {
    alert("You need to create account to create new post");
    window.location = "/pages/log-in.html";
    return false;
  }
  //   else {
  //     logout_button.classList.remove("hidden");
  //     delete_button.classList.remove("hidden");
  //     user_login.innerHTML = `
  //         <center class="font-sans text-md font-bold mt-20">
  //         <h1 class="text-2xl mb-4">Kamu Berhasil Login <span class="animate-pulse">👋🏻</span></h1><br>
  //         <span class="hover:shadow-inner bg-slate-200 text-yellow-700 text-md font-mono px-1 shadow-lg py-0.5 rounded-md inline-block mb-3">Username : <span class="text-green-700">${valid_name}</span></span><br>
  //         <span class="hover:shadow-inner bg-slate-200 text-yellow-700 text-md font-mono px-1 shadow-lg py-0.5 rounded-md inline-block mb-3">Email : <span class="text-green-700">${valid_email}</span></span><br>
  //         <span class="hover:shadow-inner bg-slate-200 text-yellow-700 text-md font-mono px-1 shadow-lg py-0.5 rounded-md inline-block mb-3">password : <span class="text-green-700">${valid_password}</span></span><br>
  //         </center>
  //         `;
  //   }
};

logout_button.addEventListener("click", function () {
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_password");
  window.location = "/pages/log-in.html";
});

delete_button.addEventListener("click", function () {
  localStorage.removeItem("register_name");
  localStorage.removeItem("register_email");
  localStorage.removeItem("register_password");
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_password");
  window.location = "/pages/sign-in.html";
});

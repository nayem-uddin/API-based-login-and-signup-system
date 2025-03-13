const body = document.body.querySelector("#sign-up-form");
body.querySelector("#sign-up").addEventListener("click", (event) => {
  axios({
    url: "https://api-5elw.onrender.com/users",
    method: "POST",
    data: {
      fullname: document.querySelector("#name").value,
      date_of_birth: document.querySelector("#date-of-birth").value,
      gender: document.querySelector("#gender").value,
      phone:
        document.querySelector("#country-code").value +
        document.querySelector("#phone").value,
      address: document.querySelector("#address").value,
      email: document.querySelector("#email").value,
      username: document.querySelector("#username").value,
      pass: document.querySelector("#password").value,
    },
  })
    .then(() => {
      location.replace("index.html");
    })
    .catch((err) => {
      event.preventDefault();
      console.log(err);
    });
});

show = () => {
  let pass = document.querySelector("#password");
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
};

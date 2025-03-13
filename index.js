const form = document.querySelector("#login");
var msg = form.querySelector("#msg");

form.querySelector("#sign-in").addEventListener("click", (event) => {
  const email = form.querySelector("#email").value;
  const password = form.querySelector("#password").value;
  axios({
    url: `https://api-5elw.onrender.com/users/${email}`,
    method: "POST",
  })
    .then((res) => {
      if (res.data.pass != password) {
        event.preventDefault();
        messagePrompt("Wrong password");
      } else {
        let keys = Object.keys(res.data);
        let values = Object.values(res.data);
        for (let i = 0; i < keys.length; i++) {
          sessionStorage.setItem(keys[i], values[i]);
        }
        location.replace("dashboard.html");
      }
    })
    .catch(() => {
      event.preventDefault();
      messagePrompt("Accout doesn't exist");
    });
});

messagePrompt = (message) => {
  let txt = document.createTextNode(message);
  msg.appendChild(txt);
  setTimeout(() => (msg.innerHTML = ""), 1500);
};

show = () => {
  let pass = form.querySelector("#password");
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
};

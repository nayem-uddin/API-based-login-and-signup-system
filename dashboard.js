let un = document.createTextNode(sessionStorage.getItem("fullname"));
document.querySelector("h1").appendChild(un);
let table = document.querySelector("table");
let info = Object.values(sessionStorage);
let fields = [
  "ID",
  "Name",
  "Date of Birth (YYYY-MM-DD)",
  "Gender",
  "Contact No.",
  "Present Address",
  "Email",
  "Username",
];
let fieldNames = [
  "id",
  "fullname",
  "date_of_birth",
  "gender",
  "phone",
  "address",
  "email",
  "username",
];
for (let i = 0; i < fields.length; i++) {
  let row = table.insertRow(-1);
  let cell_values = [fields[i], ":", sessionStorage.getItem(fieldNames[i])];
  for (let j = 0; j < 3; j++) {
    let cell = row.insertCell(j);
    if (j == 0) {
      var key = document.createElement("th");
    } else {
      var key = document.createElement("td");
    }
    let value = document.createTextNode(cell_values[j]);
    key.appendChild(value);
    cell.appendChild(key);
  }
}

document.querySelector("#Logout").addEventListener("click", () => {
  sessionStorage.clear();
  location.replace("index.html");
});

document.querySelector("#delete").addEventListener("click", () => {
  axios({
    url: `https://api-based-login-and-signup-system.onrender.com/users/${sessionStorage.getItem(
      "email"
    )}`,
    method: "DELETE",
  })
    .then(() => {
      sessionStorage.clear();
      location.replace("index.html");
    })
    .catch((err) => console.log(err));
});

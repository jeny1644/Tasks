const params = new URLSearchParams(window.location.search);
const userId = params.get("id");
const url = "http://localhost:3000/users";
const idnumber = document.getElementById("idnum");
const Fname = document.getElementById("name");
const mobileNum = document.getElementById("monum");
const EmailId = document.getElementById("email");
const Sub1 = document.getElementById("sub1");
const Sub2 = document.getElementById("sub2");
const Sub3 = document.getElementById("sub3");

document
  .getElementById("addUserForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const sub1 = Number(Sub1.value);
    const sub2 = Number(Sub2.value);
    const sub3 = Number(Sub3.value);
    const avg = (sub1 + sub2 + sub3) / 3;

    
    const id = idnumber.value;

    const newUser = {
      name: Fname.value,
      mobile: mobileNum.value,
      email: EmailId.value,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      avg: avg.toFixed(2),
      status: avg > 33 ? "PASS" : "FAIL",
    };

    const method = id ? "PUT" : "POST";
    const endpoint = id ? `${url}/${id}` : url;

    fetch(endpoint, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("addUserForm").reset();
        console.log(data);
        window.location.href = "index.html";
      })
      .catch((error) =>
        console.error(
          `Error ${method === "POST" ? "creating" : "updating"} user:`,
          error
        )
      );
  });

if (userId) {
  fetch(`${url}/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      idnumber.value = user.id;
      Fname.value = user.name;
      mobileNum.value = user.mobile;
      EmailId.value = user.email;
      Sub1.value = user.sub1;
      Sub2.value = user.sub2;
      Sub3.value = user.sub3;
    });
}

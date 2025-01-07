const url = "http://localhost:3000/users";
const params = new URLSearchParams(window.location.search);
const userId = params.get("id");
let currentPage = 1;
const itemsPerPage = 5;
const pageLimit = 5;

async function fetchUsers(page = currentPage) {
  const offset = (page - 1) * pageLimit;

  try {
    const response = await fetch(
      `${url}?_limit=${itemsPerPage}&_start=${offset}`
    );
    const data = await response.json();
    const totalItemsResponse = await fetch(`${url}`);
    const totalItems = await totalItemsResponse.json();
    const totalPages = Math.ceil(totalItems.length / itemsPerPage);

    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = `
  <button id="prevbtn" ${page === 1 ? "disabled" : ""} onclick="fetchUsers(${
      page - 1
    })">Previous</button>
`;

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.onclick = () => fetchUsers(i);
      button.classList.add("pagination-btn");

      if (i === page) {
        button.classList.add("active-page");
      }

      paginationDiv.appendChild(button);
    }

    paginationDiv.innerHTML += `
  <button id="nextbtn" ${
    page === totalPages ? "disabled" : ""
  } onclick="fetchUsers(${page + 1})">Next</button>
`;

    const prevbtn = document.getElementById("prevbtn");
    const nextbtn = document.getElementById("nextbtn");

    prevbtn.addEventListener("click", () => {
      if (page > 1) {
        currentPage = page - 1;
        fetchUsers(currentPage);
      }
    });

    nextbtn.addEventListener("click", () => {
      if (page < totalPages) {
        currentPage = page + 1;
        fetchUsers(currentPage);
      }
    });

    // Display the users in the table
    const userList = document.getElementById("userlist");
    userList.innerHTML = `
      <div class="main">
        <table class="tbl">
          <thead>
            <tr class="clm">
              <th>ID</th>
              <th>NAME</th>
              <th>NUMBER</th>
              <th>EMAIL</th>
              <th>MATHS</th>
              <th>PHY</th>
              <th>CHEM</th>
              <th>AVG</th>
              <th id="status">STATUS</th>
              <th colspan="2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          ${data
            .map(
              (user) => `
              <tr class="body-cnt">
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.mobile}</td>
                <td>${user.email}</td>
                <td>${user.sub1}</td>
                <td>${user.sub2}</td>
                <td>${user.sub3}</td>
                <td>${user.avg}</td>
                <td class="${user.status === "pass" ? "green" : "red"}">${
                user.status
              }</td>
                <td>
                  <input type="button" id="bt2" onclick="btn2('${
                    user.id
                  }')" value="EDIT">
                </td>
                <td>
                  <input type="button" id="bt3" onclick="btn3('${
                    user.id
                  }', '${user.name.replace(/'/g, "\\'")}')" value="DELETE">
                </td>
              </tr>`
            )
            .join("")}
          </tbody>
        </table>
      </div>
    `;
  } catch (error) {
    console.error("Error in fetching the data", error);
  }
}

fetchUsers(currentPage);

function btn1() {
  window.location.href = "page2.html";
}

function btn2(userId) {
  window.location.href = `page2.html?id=${userId}`;
}

async function btn3(userId, userName) {
  if (confirm(`Are you sure you want to delete the user: ${userName}?`)) {
    try {
      await fetch(`${url}/${userId}`, {
        method: "DELETE",
      });

      const totalItemsResponse = await fetch(url);
      const totalItems = await totalItemsResponse.json();
      const totalPages = Math.ceil(totalItems.length / itemsPerPage);

      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      fetchUsers(currentPage);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
}

// PAGE NAVIGATION
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

// TEAMS DATA (ALL IPL TEAMS)
const teams = [
  { name: "CSK", captain: "MS Dhoni", ground: "Chennai", wins: 5 },
  { name: "MI", captain: "Rohit Sharma", ground: "Mumbai", wins: 5 },
  { name: "RCB", captain: "Virat Kohli", ground: "Bangalore", wins: 0 },
  { name: "KKR", captain: "Shreyas Iyer", ground: "Kolkata", wins: 2 },
  { name: "SRH", captain: "Pat Cummins", ground: "Hyderabad", wins: 1 },
  { name: "RR", captain: "Sanju Samson", ground: "Jaipur", wins: 1 },
  { name: "DC", captain: "Rishabh Pant", ground: "Delhi", wins: 0 },
  { name: "PBKS", captain: "Shikhar Dhawan", ground: "Mohali", wins: 0 },
  { name: "GT", captain: "Shubman Gill", ground: "Ahmedabad", wins: 1 },
  { name: "LSG", captain: "KL Rahul", ground: "Lucknow", wins: 0 }
];

// LOAD TEAMS
const teamList = document.getElementById("teamList");
teams.forEach(t => {
  teamList.innerHTML += `
    <div class="card">
      <h3>${t.name}</h3>
      <p>Captain: ${t.captain}</p>
      <p>Ground: ${t.ground}</p>
      <p>Titles: ${t.wins}</p>
    </div>
  `;
});

// SEARCH TEAMS
function searchTeams(value) {
  teamList.innerHTML = "";
  teams.filter(t => t.name.toLowerCase().includes(value.toLowerCase()))
    .forEach(t => {
      teamList.innerHTML += `<div class="card"><h3>${t.name}</h3></div>`;
    });
}

// MATCHES
const matches = [
  { teams: "CSK vs MI", date: "20 Mar", venue: "Chennai", result: "Upcoming" },
  { teams: "RCB vs KKR", date: "22 Mar", venue: "Bangalore", result: "Upcoming" }
];

const matchList = document.getElementById("matchList");
matches.forEach(m => {
  matchList.innerHTML += `<p>${m.teams} | ${m.date} | ${m.venue} | ${m.result}</p>`;
});

// POINTS TABLE
const pointsTable = document.getElementById("pointsTable");
teams.forEach(t => {
  pointsTable.innerHTML += `
    <tr>
      <td>${t.name}</td>
      <td>14</td>
      <td>${t.wins}</td>
      <td>${14 - t.wins}</td>
      <td>${t.wins * 2}</td>
    </tr>
  `;
});

// FOOTER YEAR
document.getElementById("year").innerText = new Date().getFullYear();

// CONTACT FORM
function submitForm() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Invalid Email");
    return false;
  }
  document.getElementById("formMsg").innerText = "Message Sent Successfully!";
  return false;
}

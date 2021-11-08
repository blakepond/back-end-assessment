document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};
document.getElementById("fortuneButton").onclick = () => {
  axios.get("http://localhost:4000/api/fortune/").then((response) => {
    const data = response.data;
    alert(data);
  });
};
document.getElementById("suggestions").onclick = () => {
  axios.get("http://localhost:4000/api/suggestion/").then((response) => {
    const data = response.data;
    document.getElementById("printSuggestions").innerHTML = data
      .map(function (suggest) {
        return '<li class="row">' + suggest;
      })
      .join("");
  });
};
const goalsContainer = document.getElementById("pasteGoals");
const submitBtn = document.getElementById("submitButton");
let goalInput = document.getElementById("goalsField");
let goalName = document.getElementById("goalName");
const form = document.querySelector("#goals");
const goalsCallback = ({ data: goals }) => displayGoals(goals);

const sendData = () => {
  let body = {
    name: goalName.value,
    goalInput: goalInput.value,
  };
  console.log(body);
  axios.post("http://localhost:4000/api/goal/", body)
    .then(goalsCallback)
  };

function displayGoals(arr) {
  goalsContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createGoalCard(arr[i]);
  }
}

function createGoalCard(goal) {
  const goalCard = document.createElement("div");
  goalCard.classList.add("goal-card");
  goalCard.innerHTML = `
        <p class="goal-title">${goal.name}</p>
        <div class="goalInput-container">${goal.goalInput}</div>
         <button onclick="deleteGoal(${goal})">delete</button>
      `;
  goalsContainer.appendChild(goalCard);
  goalsContainer.innerHTML = goalCard
  
}

// submitBtn.addEventListener("click", sendData);

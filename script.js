let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let cash = document.getElementById("cash").value
let changeSpans = document.querySelectorAll(".change-span")

function updateCID() {
  
  for (let i = 0; i < changeSpans.length; i++) {
    changeSpans[i].textContent = cid[i][1];
  }
  
}




window.onload = updateCID();
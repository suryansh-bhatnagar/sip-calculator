let monthlyInvest = document.getElementById("monthlyInvestment");
let rate = document.getElementById("expectedRate");
let years = document.getElementById("investmentYears");
let calBtn = document.getElementById("calculateButton");


calBtn.addEventListener("click", function () {
    let chartStatus = Chart.getChart("myChart"); // <canvas> id
if (chartStatus != undefined) {
  chartStatus.destroy();}
  let p = monthlyInvest.value;
  let n = years.value * 12;
  let r = rate.value;
  let i = r / 12 / 100;
  var investedAmount = p * n;
  // P [ (1+i)^n-1 ] * (1+i)/i
  var totalAmount = Math.floor(p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  var returnAmount = totalAmount - investedAmount;
  document.getElementById("investedAmt").innerText = investedAmount;
  document.getElementById("returnAmt").innerText = returnAmount;
  document.getElementById("totalAmt").innerText = totalAmount;
  
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Invested Amount", "Est. Returns"],
      datasets: [
        {
          label: "",
          data: [investedAmount , returnAmount],
          backgroundColor: [
            "#fd7e14",
            "#0d6efd",
          ],
          borderWidth: 0,
        },
      ],
    },
  });
  
});

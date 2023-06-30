document.addEventListener("DOMContentLoaded", () => {

  // PROCESO GET
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const data = response.data;
      const labels = data.map(user => user.name)
      const values = data.map(user => user.id)

      const ctx = document.getElementById("myChart");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Users",
              data: values,
            },
          ],
        },
      });
    })

});

const CLP = document.getElementById("clp");
const Moneda = document.getElementById("moneda");
const btnBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");
const errorMsg = document.getElementById("error");
const ctx = document.getElementById("historial");
let historial;
btnBuscar.addEventListener("click", async () => {
  const monto = parseFloat(CLP.value);
  const tipoMoneda = Moneda.value;
  if (!monto || monto <= 0) {
    resultado.textContent = "Debe ingresa un monto válido.";
    return;
  }
  try {
    errorMsg.textContent = "";
    const res = await fetch(`https://mindicador.cl/api/${tipoMoneda}`);
    if (!res.ok) throw new Error("Ocurrio un problema al obtener los datos");
    const data = await res.json();
    const valorActual = data.serie[0].valor;
    const conversion = (monto / valorActual).toFixed(2);
    resultado.textContent = `Resultado: $${conversion} ${tipoMoneda.toUpperCase()}`;
    // Genera grafico con el historial
    const ultimos10 = data.serie.slice(0, 10).reverse();
    const labels = ultimos10.map(d => new Date(d.fecha).toLocaleDateString());
    const valores = ultimos10.map(d => d.valor);
    renderhistorial(labels, valores, tipoMoneda);
  } catch (error) {
    console.error(error);
    errorMsg.textContent = `Error: ${error.message}`;
  }
});
function renderhistorial(labels, valores, tipoMoneda) {
  if (historial) historial.destroy();
  historial = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: `Historial últimos 10 días (${tipoMoneda})`,
        data: valores,
        borderColor: "rgba(228, 165, 249, 1)",
        backgroundColor: "rgba(236, 248, 102, 1)",
        pointBorderColor: "rgba(0, 123, 255, 1)",
        pointRadius: 5,                              
        pointHoverRadius: 7,                         
        borderWidth: 3,                              
        tension: 0.4   
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#ffffffff",
            font: {
              size: 14,
              weight: "bold"
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "rgba(255, 255, 255, 0.8)",
            font: {
              size: 12
            }
          },
          grid: {
            color: "rgba(255, 255, 255, 0.8)"
          }
        },
        y: {
          beginAtZero: false,
          ticks: {
            color: "rgba(255, 255, 255, 0.8)",
            font: {
              size: 12
            }
          },
          grid: {
            color: "rgba(255, 255, 255, 0.8)"
          }
        }
      }
    }
  });
}
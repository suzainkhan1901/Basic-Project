const ctx = document.getElementById('usageChart').getContext('2d');
const tooltip = document.getElementById('tooltip');

const data = {
    labels: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'],
    datasets: [{
        label: 'Internet Users (in billions)',
        data: [2.8, 0.7, 0.3, 0.4, 0.1, 0.02],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const usageChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        onHover: function(event, chartElement) {
            if (chartElement.length) {
                const datasetIndex = chartElement[0].datasetIndex;
                const dataIndex = chartElement[0].index;
                const value = this.data.datasets[datasetIndex].data[dataIndex];
                
                tooltip.style.display = 'block';
                tooltip.innerHTML = `Users: ${value} billion`;
                tooltip.style.left = event.offsetX + 'px';
                tooltip.style.top = event.offsetY + 'px';
            } else {
                tooltip.style.display = 'none';
            }
        }
    }
});

document.getElementById('toggleData').addEventListener('click', () => {
    const newData = [3, 1, 0.5, 0.6, 0.15, 0.03];
    usageChart.data.datasets[0].data = newData;
    usageChart.update();
});
// Chart.js configuration for revenue pie chart
document.addEventListener('DOMContentLoaded', function() {
    const chartCanvas = document.getElementById('revenueChart');
    
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        // Revenue distribution data from web-idea.md
        const data = {
            labels: ['Medication Sales', 'Tele-pharmacy Consultation Fee', 'Value-Added Bundles & Upselling'],
            datasets: [{
                data: [46.2, 30.8, 23.1],
                backgroundColor: [
                    '#5CBDB9', // Teal
                    '#8CD4D0', // Light Teal
                    '#2E8B87'  // Dark Teal
                ],
                borderWidth: 2,
                borderColor: '#FFFFFF'
            }]
        };
        
        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 14,
                                family: 'Inter, sans-serif'
                            },
                            color: '#1F2937'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed + '%';
                                return label;
                            }
                        }
                    }
                }
            }
        };
        
        new Chart(ctx, config);
    }
});

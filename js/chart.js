$(document).ready(function(){
Chart.defaults.font.size = 12;
Chart.defaults.font.family = 'Cairo';
    var chart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['الاسبوع الرابع', 'الاسبوع الثالث','الاسبوع الثاني', 'الاسبوع الأول'], // responsible for how many bars are 
      datasets: [{
        label: 'مشاريع أخرى',
         data: [60, 60, 50, 70],
            borderRadius: 10,
         backgroundColor: '#C4BE89',
          hoverBackgroundColor: "#F1E9A6",
		  width:40,
		barThickness: 50,
        barPercentage: 0.5,
      }, {
         label: 'مشاريع منتهية',
         data: [100, 100, 80,90],
         borderRadius: 10,
         backgroundColor: '#32502E',
          hoverBackgroundColor: "#597e54",
         barThickness: 50,
      }
    ]
   },
    options: {
    plugins: {
    legend: {
          display: false,
        
      },
      title: {
        display: false,
      },
   
    },
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,

      },
      y: {
    
        stacked: false,
            max: 120,
            min: 0,
        ticks: {
                stepSize: 20,
                min: 20,
                max: 80,
              }
      }
    }
  }
});
});

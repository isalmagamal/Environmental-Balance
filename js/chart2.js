$(document).ready(function(){
Chart.defaults.font.size = 12;
Chart.defaults.font.family = 'Cairo';
var xValues = ["المشاريع المنجزة", "المشاريع المرفوضة", "المشاريع المنتظرة", "مشاريع قيد الانجاز"];
var yValues = [45, 25, 10, 15];
var barColors = [
  "#406343",
  "#D85B5B",
  "#D1D1D1",
  "#52699E",
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
  legend: {
          display: true,
          position:'right',
        
      },
    title: {
      display: true,
    }
  }
});
});

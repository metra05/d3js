(
    function(){

    let data={};
    data={temp:{current:0,high:0,low:100}};

        var temperature = new DonutChart();
        temperature.setSensorDomain([0,80]);//-6,50]);
        temperature.setSvgDiv('#donut1');
        temperature.createChart('\u00B0'+"C", "Temperatur");

        // var humidity = new DonutChart();
        // humidity.setSensorDomain([0,90]);
        // humidity.setSvgDiv('#donut2');
        // humidity.createChart('\u0025', "humidity");

        // var light = new DonutChart();
        // light.setSensorDomain([0,10]);
        // light.setSvgDiv('#donut3');
        // light.createChart('', "light");

        // socket.on("initial-data", function(data){
        function waktu() {setInterval(() => {
                data.temp.current=data.temp.current+5
                temperature.updateChart(data.temp.current);
                // console.log(data);
                if (data.temp.current>=80){
                    data.temp.current=-5;
                };
            }, 2000);
        }
        waktu();
        //temperature.updateChart(data.temp.current);
        //     humidity.updateChart(data.humidity.current);
        //     light.updateChart(data.light.current);
        // });  

        // socket.on('data', function(data){
        //     temperature.updateChart(data.temp.current);
        //     humidity.updateChart(data.humidity.current);
        //     light.updateChart(data.light.current);
        // });  
   
})();
    
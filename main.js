(
    function(){

    //membuat data dqalam bentuk data objek
    let data={};
    data={temp:{current:0,high:0,low:100}};

    var temperature = new DonutChart();
    temperature.setSensorDomain([0,80]);//-6,50]);
    temperature.setSvgDiv('#donut1');
    temperature.createChart('\u00B0'+"C", "Temperatur");

       
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
       
   
})();
    

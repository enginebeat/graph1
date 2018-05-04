
/*
var g = new Dygraph(
    document.getElementById('graphdiv'),
    //CSV or path to a CSV file
    "Date,Temperature\n" +
    "2008-05-07,75\n" +
    "2008-05-08,70\n" +
    "2008-05-09,80\n"

);
*/


document.addEventListener('DOMContentLoaded', (event)=>{

        // Initialize your application or run some code.
        initGraph();
        
            
         
    
});

/*
$(document).ready(function() {
    var data = [];
    var t = new Date();
    for (var i = 10; i >= 0; i--) {
      var x = new Date(t.getTime() - i * 1000);
      data.push([x, Math.random()]);
    }

    var g = new Dygraph(document.getElementById("graphdiv"), data,
                        {
                          drawPoints: true,
                          showRoller: true,
                          valueRange: [0.0, 1.2],
                          labels: ['Time', 'Random']
                        });
    // It sucks that these things aren't objects, and we need to store state in window.
    window.intervalId = setInterval(function() {
      var x = new Date();  // current time
      var y = Math.random();
      data.push([x, y]);
      g.updateOptions( { 'file': data } );
    }, 1000);
  }
);
*/

/* HTML part

<div id="div_g" style="width:600px; height:300px;"></div>
<p>This test is modeled after a 
<a href="http://www.highcharts.com/demo/?example=dynamic-update&amp;theme=default">highcharts
test</a>. New points should appear once per second. Try zooming and 
panning over to the right edge to watch them show up.</p>

*/

function initGraph(){
    var data = [];
    var t = new Date();
    for (var i = 10; i >= 0; i--) {
        var x = new Date(t.getTime() - i * 1000);
        data.push([x, Math.random()]);
    }

    var g = new Dygraph(document.getElementById("graphdiv"), data,
                        {
                            drawPoints: true,
                            showRoller: true,
                            valueRange: [0.0, 1.2],
                            labels: ['Time', 'Random']
                        });
    // It sucks that these things aren't objects, and we need to store state in window.
    window.intervalId = setInterval(function() {
        var x = new Date();  // current time
        var y = Math.random();
        data.push([x, y]);
        g.updateOptions( { 'file': data } );
    }, 1000);
}
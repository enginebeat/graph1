
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
        initGraph1();
        initGraph2();
        
            
         
    
});


function initGraph1(){
    var data = [];
    var t = new Date();
    // this are vthe first non live data points on the begining of the graph
    // not strictly required
    // actually something is required or you will get an error that it can not plot empty set
    var x = new Date(t.getTime() - 1 * 1000);
    data.push([x, Math.random()]);
    //for (var i = 5; i >= 0; i--) {
        //var x = new Date(t.getTime() - i * 1000);
        //data.push([x, Math.random()]);
    //}

    var g = new Dygraph(document.getElementById("graphdiv1"), data,
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
    }, 500);
}

function initGraph2(){
    var data = [];
    var t = new Date();
    // this are vthe first non live data points on the begining of the graph
    // not strictly required
    for (var i = 5; i >= 0; i--) {
        var x = new Date(t.getTime() - i * 1000);
        data.push([x, Math.random()]);
    }

    var g = new Dygraph(document.getElementById("graphdiv2"), data,
                        {
                            drawPoints: false,
                            showRoller: true,
                            valueRange: [0.0, 1.2],
                            labels: ['Time', 'Voltage']
                        });
    // It sucks that these things aren't objects, and we need to store state in window.
    window.intervalId = setInterval(function() {
        var x = new Date();  // current time
        var y = Math.random();
        data.push([x, y]);
        g.updateOptions( { 'file': data } );
    }, 500);
}

function initGraph3(){
    var data = [];
    var t = new Date();
    // this are vthe first non live data points on the begining of the graph
    // not strictly required
    //for (var i = 5; i >= 0; i--) {
        //var x = new Date(t.getTime() - i * 1000);
        //data.push([x, Math.random()]);
    //}

    var g = new Dygraph(document.getElementById("graphdiv2"), data,
                        {
                            drawPoints: false,
                            showRoller: true,
                            valueRange: [0.0, 1.2],
                            labels: ['Time', 'Voltage']
                        });
    // It sucks that these things aren't objects, and we need to store state in window.
    window.intervalId = setInterval(function() {
        var x = new Date();  // current time
        var y = Math.random(); // this would be where you ask for data.
        data.push([x, y]);
        g.updateOptions( { 'file': data } );
    }, 500);
}

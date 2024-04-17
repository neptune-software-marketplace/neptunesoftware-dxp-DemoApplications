var data = [
    ['eu', 0],
    ['oc', 1],
    ['af', 2],
    ['as', 3],
    ['na', 4],
    ['sa', 5]
];

// var maps = Highcharts.maps["custom/world-continents"];
// var worldGeo = Highcharts.geojson(Highcharts.maps["custom/world-continents"]);


// Custom Init - Happens only once
sap.ui.getCore().attachInit(function (startParams) {

    setTimeout(function () {

        Highcharts = null;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://code.highcharts.com/maps/highmaps.js";
        script.onload = function () {
            console.log("Highmaps is ready!");

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://code.highcharts.com/mapdata/custom/world-continents.js";
            script.onload = function () {
                console.log("Map Continents is ready!");
                Highcharts.mapChart(oHBox.getDomRef(), {
                    chart: {
                        map: 'custom/world-continents'
                    },

                    title: {
                        text: 'Highmaps basic demo'
                    },

                    subtitle: {
                        text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-continents.js">World continents</a>'
                    },

                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },

                    colorAxis: {
                        min: 0
                    },

                    series: [{
                        data: data,
                        name: 'Random data',
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }]
                });
            };
            document.body.appendChild(script);



        };
        document.body.appendChild(script);




        // Highcharts.mapChart(oHBox.getDomRef(), {
        //     chart: {
        //         map: 'custom/world-continents'
        //     },

        //     title: {
        //         text: 'Highmaps basic demo'
        //     },

        //     subtitle: {
        //         text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-continents.js">World continents</a>'
        //     },

        //     mapNavigation: {
        //         enabled: true,
        //         buttonOptions: {
        //             verticalAlign: 'bottom'
        //         }
        //     },

        //     colorAxis: {
        //         min: 0
        //     },

        //     series: [{
        //         data: data,
        //         name: 'Random data',
        //         states: {
        //             hover: {
        //                 color: '#BADA55'
        //             }
        //         },
        //         dataLabels: {
        //             enabled: true,
        //             format: '{point.name}'
        //         }
        //     }]
        // });



    }, 1000);

});




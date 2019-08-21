function GroceryStoresDollarStoresByCounty(selectedState, selectedCounty) {

    setTimeout(function () {

        // from .js data sets
        var data = results;
        var filtered_data = data.filter(d => (d.State === selectedState) && (d.County === selectedCounty))

        var years = filtered_data.map(a => a.Year)
        var num_dollarstores = filtered_data.map(a => a.D_Etab)
        var num_grocerystores = filtered_data.map(a => a.G_Etab)
        var food_desert_percentage = filtered_data.map(a => a.FD_pct)
        var total_population = filtered_data.map(a => a.Pop)
        var fooddesert_population = filtered_data.map(a => a.FD_num)

        var GroceryStores = {
            x: years,
            y: num_grocerystores,
            opacity: 0.5,
            line: {
                width: 3
            },
            // mode: 'markers',
            // marker: {
            //     size: food_desert_percentage,
            //     color: '00bfa5'
            // },
            name: '# Grocery Stores',
            type: 'scatter'
        };

        var DollarStores = {
            x: years,
            y: num_dollarstores,
            opacity: 0.5,
            line: {
                width: 3
            },
            // mode: 'markers',
            // marker: {
            //     size: food_desert_percentage,
            //     color: '00bfa5'
            // },
            name: '# Dollar Stores',
            type: 'scatter'
        };

        var graphdata = [GroceryStores, DollarStores];

        var layout = {
            showlegend: true,
            legend: { "orientation": "h" },
            height: 500,
            width: 520,
            margin: {
                l: 60,
                r: 10,
                b: 0,
                t: 10,
                pad: 4
            },
            yaxis: {

            }
        };

        Plotly.newPlot('graph1', graphdata, layout, { displayModeBar: false });

        var Population = {
            x: years,
            y: total_population,
            opacity: 0.5,
            line: {
                width: 3
            },
            // mode: 'markers',
            // marker: {
            //     size: food_desert_percentage,
            //     color: '00bfa5'
            // },
            name: 'Total Population',
            type: 'scatter'
        };

        var FoodDesertPopulation = {
            x: years,
            y: fooddesert_population,
            opacity: 0.5,
            line: {
                width: 3
            },
            // mode: 'markers',
            // marker: {
            //     size: food_desert_percentage,
            //     color: '00bfa5'
            // },
            name: 'Food Desert Population',
            type: 'scatter'
        };

        var verticalLine = {
            x: [2010, 40000],
            y: [2010, 80000],
            type: 'scatter'
          };

        var graphdata2 = [Population, FoodDesertPopulation, verticalLine];

        var layout2 = {
            showlegend: true,
            legend: { "orientation": "h" },
            height: 500,
            width: 520,
            margin: {
                l: 60,
                r: 10,
                b: 0,
                t: 10,
                pad: 4
            },
            yaxis: {

            }
        };

        Plotly.newPlot('graph2', graphdata2, layout2, { displayModeBar: false });

    }, 800);
}
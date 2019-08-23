function GroceryStoresDollarStoresByCounty(selectedState, selectedCounty) {

    // from .js data set
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
            title: "Count"

        }
    };

    Plotly.newPlot('graph1', graphdata, layout, { displayModeBar: false });

    var Population = {
        x: years,
        y: total_population,
        opacity: 0.5,
        line: {
            width: 3,
            color: '7B1FA2'
        },
        name: 'Total Population',
        type: 'scatter'
    };

    var FoodDesertPopulation = {
        x: years,
        y: fooddesert_population,
        opacity: 0.5,
        line: {
            width: 3,
            color: 'FF1744'
        },
        name: 'Food Desert Population',
        type: 'scatter'
    };

    var graphdata2 = [Population, FoodDesertPopulation];

    var layout2 = {
        shapes: [{
            type: 'line',
            x0: '2010',
            y0: 0,
            x1: '2010',
            yref: 'paper',
            y1: 1,
            line: {
              color: 'blue',
              width: 4.5,
              dash: 'dot'
            }
          },
          {
            type: 'line',
            x0: '2015',
            y0: 0,
            x1: '2015',
            yref: 'paper',
            y1: 1,
            line: {
              color: 'blue',
              width: 4.5,
              dash: 'dot'
            }
          }],
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
            title: "Population"
        }
    };

    Plotly.newPlot('graph2', graphdata2, layout2, { displayModeBar: false });
}
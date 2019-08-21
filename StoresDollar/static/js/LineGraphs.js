function GroceryStoresDollarStoresByCounty(selectedState, selectedCounty) {

    setTimeout(function(){ 

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
        text: num_grocerystores,
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
        text: num_dollarstores,
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
        height: 500,
        width: 1000,
        yaxis: {
            title: 'Count',
            titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            }
        }
    };

    Plotly.newPlot('graph1', graphdata, layout);

    var Population = {
        x: years,
        y: total_population,
        opacity: 0.5,
        line: {
            width: 3
        },
        text: total_population,
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
        text: fooddesert_population,
        // mode: 'markers',
        // marker: {
        //     size: food_desert_percentage,
        //     color: '00bfa5'
        // },
        name: 'Food Desert Population',
        type: 'scatter'
    };

    var graphdata2 = [Population, FoodDesertPopulation];

    var layout2 = {
        showlegend: true,
        height: 500,
        width: 1000,
        yaxis: {
            title: 'Count',
            titlefont: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            }
        }
    };

    Plotly.newPlot('graph2', graphdata2, layout2);

}, 800);
}
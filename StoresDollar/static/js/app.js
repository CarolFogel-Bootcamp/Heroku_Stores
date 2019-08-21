// from Results.js
var data = results;

var stateSel = document.getElementById("stateSel"),
  countySel = document.getElementById("countySel");

var all_states = data.map(eachstate => eachstate.State).sort()
var state_array = new Set(all_states);

function BuildDropdownSelections(dropdownBox, text, value) {
  var dropdownSelection = document.createElement("option");
  dropdownSelection.text = text;
  dropdownSelection.value = value;
  dropdownBox.options.add(dropdownSelection);
}

// Build dropdown option for State Dropdown
for (let item of state_array) {
  BuildDropdownSelections(document.statedropdownList.StateSelection, item, item);
};

var filterbystate = document.getElementById("stateDropdown"),
  filterbycounty = document.getElementById("countyDropdown");

// Listen for state selection
filterbystate.onchange = function () {

  var state_sel_value = filterbystate.value
  var state_filteredData = data.filter(s => s.State === state_sel_value);

  var counties = state_filteredData.map(eachcounty => eachcounty.County).sort()
  var county_array = new Set(counties);

  filterbycounty.length = 1

  for (let item of county_array) {
    BuildDropdownSelections(document.countydropdownList.CountySelection, item, item);
  };

  // Listen for county selection
  filterbycounty.onchange = function () {
    var county_sel_value = filterbycounty.value;

    // Call function to draw graphs
    GroceryStoresDollarStoresByCounty(state_sel_value, county_sel_value);


  }
}
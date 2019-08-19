// from Population.js

var population2 = [{
  "GeoID": 56039,
  "County": "Teton County",
  "State": " Texas",
  "Pop_2010": 21294,
  "Pop_2011": 21414,
  "Pop_2012": 21625,
  "Pop_2013": 22318,
  "Pop_2014": 22777,
  "Pop_2015": 23016,
  "Pop_2016": 23161,
  "Pop_2017": 23261,
  "Pop_2018": 23081
},
{
  "GeoID": 56041,
  "County": "Uinta County",
  "State": " Wyoming",
  "Pop_2010": 21118,
  "Pop_2011": 20893,
  "Pop_2012": 20994,
  "Pop_2013": 20953,
  "Pop_2014": 20827,
  "Pop_2015": 20770,
  "Pop_2016": 20691,
  "Pop_2017": 20456,
  "Pop_2018": 20299
},
{
  "GeoID": 56043,
  "County": "Washakie County",
  "State": " Wyoming",
  "Pop_2010": 8533,
  "Pop_2011": 8448,
  "Pop_2012": 8408,
  "Pop_2013": 8414,
  "Pop_2014": 8275,
  "Pop_2015": 8280,
  "Pop_2016": 8168,
  "Pop_2017": 8035,
  "Pop_2018": 7885
},
{
  "GeoID": 56045,
  "County": "Weston County",
  "State": " Wyoming",
  "Pop_2010": 7208,
  "Pop_2011": 7142,
  "Pop_2012": 7077,
  "Pop_2013": 7137,
  "Pop_2014": 7138,
  "Pop_2015": 7197,
  "Pop_2016": 7213,
  "Pop_2017": 6986,
  "Pop_2018": 6967
}
]
var data = population2;

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
  var state_filteredData = data.filter(pop_state => pop_state.State === state_sel_value);

  var counties = state_filteredData.map(eachcounty => eachcounty.County).sort()
  var county_array = new Set(counties);

  for (let item of county_array) {
    BuildDropdownSelections(document.countydropdownList.CountySelection, item, item);
  };

  // Listen for county selection
  filterbycounty.onchange = function () {

    var county_sel_value = filterbycounty.value

  }
}
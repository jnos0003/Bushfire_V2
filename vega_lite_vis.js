var vg_1 = "bushfires_in_australia.vg.json";
vegaEmbed("#bushfireMapAus", vg_1).then(function(result){
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "Native_area_burned.vg.json";
vegaEmbed("#NativefireBarAus", vg_2).then(function(result){
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "Native_area_burned_2.vg.json";
vegaEmbed("#NativefireBarAus2", vg_3).then(function(result){
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

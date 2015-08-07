
var origjson;

$(document).ready(function(){
    var URL = "1mKxKmuTbvbpC0HcOXxLteA3MtERuKU733iefkXRpVBk";
    Tabletop.init( { key: URL, callback: convertToJSON, simpleSheet: true } )
});

function convertToJSON(data) {
    //console.log(data);
    origjson = data;
    places = [];
    for(i = 0; i < data.length; i++) {
        //console.log(data[i]);
        places =
        { type: 'object',
            properties: {
				title: data[i]["name"],
				date: data[i]["date"],
				venue: data[i]["venue"],
				picture: data[i]["picture"],
            }
        } 
		console.log(places[i].object.properties);
    }
}

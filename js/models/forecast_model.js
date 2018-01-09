
var Forecast = function(info) {
	this.latitude = info.latitude;
	this.longitude = info.longitude;
}

function Icon(value) {
	switch(value) {
		case "rain": 
			return "<i class='fa fa-tint' aria-hidden='true'></i>";
			break;
		case "partly-cloudy-day":
			return "<i class='fa fa-cloud' aria-hidden='true'></i>";
			break;
		default:
			return "<i class='fa fa-sun-o' aria-hidden='true'></i>";
			break;
	}

}

Forecast.prototype.loadForecast = function() {
	var self = this;
	const ds_key = "f5fcf916bad24f6c6c3a002daffc95dc";
	var lat_long = this.latitude + "," + this.longitude;
	//use cors proxy - build locally when ready
	var weather_url = "http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + ds_key + "/" + lat_long + "?units=si";

	var request = $.ajax({
       	url: weather_url,
        type: 'GET',
		success: function(result) {
			$('#loader').hide();
			self.summary = Math.round(result.currently.temperature) + "&deg;C";
			self.icon = Icon(result.currently.icon);
			console.log(result);
		},
        //invalid
        error: function() {
        	console.log("There was an error retrieving the weather information");
        }
	});

	return request;
}
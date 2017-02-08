
var Forecast = function(info) {
	this.latitude = info.latitude;
	this.longitude = info.longitude;
}

Forecast.prototype.loadForecast = function() {
	var self = this;
	const ds_key = "f5fcf916bad24f6c6c3a002daffc95dc";
	//console.log(latitude + "," + longitude + " " + ds_key);
	var lat_long = this.latitude + "," + this.longitude;
	//use cors proxy - build locally when ready
	var weather_url = "http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + ds_key + "/" + lat_long;

	var request = $.ajax({
       	url: weather_url,
        type: 'GET',
		success: function(result) {
			$('#loader').hide();
			self.summary = result.currently.summary;
			console.log(result.currently.summary);
		},
        //invalid
        error: function() {
        	console.log("There was an error retrieving the weather information");
        }
	});

	return request;
}
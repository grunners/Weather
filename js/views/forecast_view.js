
var ForecastView = function(forecast) {
	// set a Forecast model as a property of the view
	this.forecast = forecast;
	// set the div with class forecast as domain of this view
	this.$el = $(".forecast");
	this.$el = $(".icon");
}

ForecastView.prototype = {
	forecastTemplate: function(forecast) {
		var html = $("<div></div>");
		html.append("<p class='description'>" + forecast.summary + "</p>");
		html.append("<p class='icon'>" + forecast.icon + "</p>");
		return(html);
	},
	render: function() {
		var self = this;
		self.$el.html(self.forecastTemplate(self.forecast).html());
	},
	clearContainer: function() {
		this.$el.empty();
	}
}
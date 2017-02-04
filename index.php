<html>
	<head>
		
	</head>

	<body style="font-family: Calibri;">
		
	<form id="weather" action="	">
		<input type="submit" value="Get Forecast">
		<p id="output"></p>
		<img id="loader" src="loader.gif" style="display: none;"/>
	</form>








		<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

		<script type="text/javascript">
			$(function() {

				var ds_key = "f5fcf916bad24f6c6c3a002daffc95dc";

				//on form submit
				$('#weather').on('submit', function (e) {
					$('#loader').show();
					$('#output').html("Loading...");
			        if (e.isDefaultPrevented()) {
			            console.log('form is not valid');
			        } 
			        else {
			            e.preventDefault();
			            var postcode = "LS25+2JJ";
			            $.ajax({
			                url: 'http://api.getthedata.com/postcode/' + postcode,
			                type: 'GET',
			                //valid json response
			                success: function(result) {
			                	handlePostcode(result);
			                },
			                //invalid
			                error: function() {
			                	console.log("There was an error retrieving the postcode information");
			                }
			            })
			        }
				});


				//send the coords to the weather api
				function handlePostcode(response) {
					grabWeather(response.data.latitude, response.data.longitude);
				}

				//get data from weather api
				function grabWeather(latitude, longitude) {
					console.log(latitude + "," + longitude + " " + ds_key);
					var lat_long = latitude + "," + longitude;
					var weather_url = 'https://api.darksky.net/forecast/' + ds_key + "/" + lat_long;

					$.ajax({
						url: weather_url,
						type: 'GET',
						//valid json response
						success: function(result) {
							console.log(result);
							$('#output').html(result);
							$('#loader').hide();
						},
						//invalid
						error: function(result) {
							console.log(result);
							$('#output').html("There was an error retrieving the weather information");
							$('#loader').hide();
						}
					})
				}
			});
		</script>
	</body>

	
</html>
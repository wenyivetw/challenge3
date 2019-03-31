function getAPIdata() {

	var request= 'https://api.nasa.gov/EPIC/api/natural?api_key=gJXHfOdpcd8lYwLgSjlyJutfKSXo3bj55ZiSo8e6';

	fetch(request)

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		 return response.json();
	})
	// render weather per day
	.then(function(response) {
		console.log(response[0]);
		var date = new Date(response[0].date);
		console.log(date);
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		if (parseInt(month)<10) 
		{
			month = "0"+(month+1);
		}
		if (parseInt(day)<10) 
		{
			day = "0"+day;
		}
		var image = 'https://epic.gsfc.nasa.gov/archive/natural/'+ year +'/'+month+'/'+day+'/png/'+ response[0].image +'.png';

		document.body.style.backgroundImage = "url('"+ image +"')";

		//console.log('https://epic.gsfc.nasa.gov/'+ response[0].image +'.jpg');


		// render weatherCondition
		//onAPISucces(response);
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}
//http://api.openweathermap.org/data/2.5/weather?q=The%20Hague,nl&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric
//http://api.openweathermap.org/data/2.5/weather?q=Oranjestad,aw&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric
//http://api.openweathermap.org/data/2.5/weather?q=Washington,us&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric
function getWeatherAPIdata(id) {
	var land="";
	var stad="";
	var request="";
	switch(id){
		case 1:
			request= 'http://api.openweathermap.org/data/2.5/weather?q=London,gb&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric';
			land= "Verenigde koninkrijk";
			stad= "Londen"; 
			break;
		case 2:
			request= 'http://api.openweathermap.org/data/2.5/weather?q=The%20Hague,nl&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric';
			land= "Nederland";
			stad= "Den Haag"; 
			break;
		case 3:
			request= 'http://api.openweathermap.org/data/2.5/weather?q=Oranjestad,aw&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric';
			land= "Aruba";
			stad= "Oranjestad"; 
			break;
		case 4:
			request= 'http://api.openweathermap.org/data/2.5/weather?q=Washington,us&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric';
			land= "Verenigde staten";
			stad= "Washington DC"; 
			break;
		default:
			request= 'http://api.openweathermap.org/data/2.5/weather?q=The%20Hague,nl&appid=0a51065693a4d2c800cd740ee0467c1e&units=metric';
			land= "Nederland";
			stad= "Den Haag"; 
			break;
	}

	fetch(request)

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		 return response.json();
	})
	

	// render weather per day
	.then(function(response) {
		document.getElementById('land').innerHTML= land;
		document.getElementById('stad').innerHTML= stad;

		console.log(response.weather[0].main);
		document.getElementById('weer').innerHTML= response.weather[0].main;

		console.log(response.main.temp);
		document.getElementById('temperatuur').innerHTML= response.main.temp;

		console.log(response.visibility);
		document.getElementById('zichtbaarheid').innerHTML= response.visibility;

		console.log(response.wind.speed);
		document.getElementById('windsnelheid').innerHTML= response.wind.speed;

		if (response.main.temp<50 && response.visibility>500 ){
			document.getElementById('advice').innerHTML= 'Veilig om te landen!';
			document.getElementById('alertImg').src = "./img/go.png";
		}
		else{
			document.getElementById('advice').innerHTML= 'Niet veilig om te landen!';
			document.getElementById('alertImg').src = "./img/warning.png";
		}
		// set main(vb Cloud, Sun...) into html
		// set temp
		// set visibility
		// set wind speed
		// render weatherCondition
		//onAPISucces(response);
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}

getAPIdata();
/*getWeatherLondenAPIdata();*/


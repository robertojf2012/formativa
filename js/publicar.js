function getData(){
	
	$.ajax({
	  url: 'https://examen3api.herokuapp.com/api/cars',
	  dataType: 'json',
	  type: 'GET',
  
  success: function(data) {
		//called when successful
		console.log(data);
  },
  error: function(e) {
  	console.log(e.message);
  }
});
}

/*
"https://examen3api.herokuapp.com/api/cars"
*/
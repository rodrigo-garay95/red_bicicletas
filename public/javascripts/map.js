var map = L.map('main_map', {
    center: [-25.294787005520924, -57.58146835396689],
    zoom: 13
});


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map)

/*L.marker([-25.292067931432953, -57.58402863385648]).addTo(map);
L.marker([-25.294787005520924, -57.58146835396689]).addTo(map);
L.marker([-25.292422196136105, -57.58933125291121]).addTo(map);*/

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);            
        });
    }
})

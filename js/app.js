function mapInits() {

  L.mapbox.accessToken = 'pk.eyJ1Ijoic25vd2dhZ2UiLCJhIjoiUnhjQVVqMCJ9.IwvvLu1WhgtaSryHAf5Daw';

  var mapBoxBaseTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/snowgage.75c0e7c1/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
  });

  var map = new L.Map('map', {
    zoomControl: false,
    center: [45.67,-111.04],
    zoom: 12
  });

  map.addLayer(mapBoxBaseTiles);  
  
  cartodb.createLayer(map, 'https://gagecartog.cartodb.com/u/gagecarto/api/v2/viz/2b3f2790-4822-11e5-99b3-0e9d821ea90d/viz.json')
      .addTo(map)
   .on('done', function(layer) {
   /* layer.setInteraction(true);
    layer.on('featureOver', function(e, latlng, pos, data) {
      cartodb.log.log(e, latlng, pos, data);
    });
    layer.on('error', function(err) {
      cartodb.log.log('error: ' + err);
    });*/
  });
  
}
window.onload = mapInits;
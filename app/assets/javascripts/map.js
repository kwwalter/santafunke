// /* START Maps Controller */
//
// SantaFunke.controller('MapController', ['$scope', '$http', function($scope, $http){
//
//   var controller = this;
//   var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//
//   var geocoder;
//   var map;
//
//   this.initialize = function() {
//     geocoder = new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(-34.397, 150.644);
//     var mapOptions = {
//       zoom: 8,
//       center: latlng
//     }
//     map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   }
//
//   // run the function..
//   this.initialize();
//
//   this.initMap = function() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8,
//       mapTypeId: google.maps.MapTypeId.HYBRID
//     });
//   }
//
//   this.initMap();
//
//   this.codeAddress = function() {
//     var address = document.getElementById("address").value;
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location
//         });
//       } else {
//         alert("Geocode was not successful for the following reason: " + status);
//       }
//     });
//   }
//
// }]);
//
// /* END Maps Controller */

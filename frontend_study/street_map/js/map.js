var map, infowindow, bounds;
var markers = [];
/**
 * 包含地点名称和坐标的对象数组
 */

var styles = [
  {
    featureType: 'water',
    stylers: [
      { color: '#19a0d8' }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' },
      { weight: 6 }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -40 }
    ]
  },{
    featureType: 'transit.station',
    stylers: [
      { weight: 9 },
      { hue: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      { lightness: 100 }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      { lightness: -100 }
    ]
  },{
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { visibility: 'on' },
      { color: '#f0e4d3' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -25 }
    ]
  }
];


/**
 * 初始化地图,由googleapi调用
 */
function initMap() {
    infowindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();
    map = new google.maps.Map(document.getElementById('map'), {
        /**
         * 1：世界
         * 5：大陆/洲
         * 10：城市
         * 15：街道
         * 20：建筑物
         */
        zoom: 15,
        styles: styles,
        center: {
            lat: 32.04136,
            lng: 118.780422
        }
    });
    setMarkers(locations);
    map.fitBounds(bounds);
    document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', hideListings);
    document.getElementById('zoom-to-area').addEventListener('click', function() {
        zoomToArea();
    });
}

function zoomToArea() {
    // Initialize the geocoder.
    var geocoder = new google.maps.Geocoder();
    // Get the address or place that the user entered.
    var address = document.getElementById('zoom-to-area-text').value;
    // Make sure the address isn't blank.
    geocoder.geocode({
        address: address,
        componentRestrictions: {
            locality: locations[0].title
        }
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
        } else {
            window.alert('We could not find that location - try entering a more' +
                ' specific place.');
        }
    });
}


// This function will loop through the markers array and display them all.
function showListings() {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideListings() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

/**
 * 设置地图上显示的markers
 * @param {Array} locations 包含地点名称和坐标的对象数组
 */
function setMarkers(locations) {
    clearMarker();
    for (var i = 0; i < locations.length; i++) {
        var loc = locations[i];
        var position = loc.position;
        var title = loc.title;
        var marker = showMarker(loc, i);
        markers.push(marker);
        bounds.extend(loc.position);
        marker.addListener('click', function() {
            var self = this;
            requestApi(self, function(data) {
                populateInfoWindow(self, data);
            })
        });
    }
}
/**
 * 清除地图上的marker
 */
function clearMarker() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}
/**
 * 在地图上显示marker
 * @param {Object} marker marker对象
 * @param {Number} index marker在数组中的index
 */
function showMarker(marker, index) {
    return new google.maps.Marker({
        position: marker.position,
        map: map,
        title: marker.title,
        animation: google.maps.Animation.DROP,
        id: index
    })
}
/**
 *
 * @param { Object } marker Marker对象
 * @param { Object } infowindow InfoWindow对象
 */
function populateInfoWindow(marker, displayContent) {
    if (!marker.map) {
        marker.setMap(map);
    }
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent(displayContent);
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker = null;
        });
        // bounce marker
        marker.setAnimation(google.maps.Animation.BOUNCE);
        // clear animation
        setTimeout(function() {
            marker.setAnimation(null);
        }, 1400)
    }
}
/**
 * Google Map Error Handler
 */
function mapError() {
    alert('Google Map initialized Error');
}

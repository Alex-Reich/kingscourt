function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(38.5806415, -121.5018078),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
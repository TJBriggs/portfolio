/*------------------------------------*\
    //Google Maps
\*------------------------------------*/
/////////////////////////////
// Contact Page Map
/////////////////////////////
// set up page global position/format
var hmapCenter = new google.maps.LatLng(39.726413, -105.009541);
var hmap = new google.maps.Map(document.getElementById('map'), {
    center: hmapCenter,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_RIGHT
    },
    panControl: true,
    panControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: false,
    streetViewControl: false
});

//style the map
var styles = [
    {
        stylers: [
            { hue: "#000000" },
            { saturation: -1000 }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
          { "visibility": "on" },
          { "color": "#ffa409" }
        ]
      }
];
var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
hmap.mapTypes.set('map_style', styledMap);
hmap.setMapTypeId('map_style');

google.maps.event.addDomListener(window, "resize", function() {
    var hcenter = hmap.getCenter();
    google.maps.event.trigger(hmap, "resize");
    hmap.setCenter(hcenter);
    hmap.setZoom(15);
});

// set up popup windows
var hlocations = [
    [
        '<p><strong>Proctor Productions</strong><br>'+
        '501 Raritan Way<br>'+
        'Denver, CO 80204<br>'+
        'Phone: 303.572.1149<br>'+
        '<a href="https://www.google.com/maps/place/Proctor+Productions/@39.723607,-105.009455,15z/data=!4m6!1m3!3m2!1s0x0:0x5e1e3987bdacd2e3!2sProctor+Productions!3m1!1s0x0:0x5e1e3987bdacd2e3" target="_blank">'+
        'Get Directions'+
        '</a></p>',
        39.723607,
        -105.009455
    ]
];
var hinfowindow = new google.maps.InfoWindow();
var hmarker, hi;
for (hi = 0; hi < hlocations.length; hi++) {
    hmarker = new google.maps.Marker({
        position: new google.maps.LatLng(hlocations[hi][1], hlocations[hi][2]),
        map: hmap
    });

    google.maps.event.addListener(hmarker, 'click', (function(hmarker, hi) {
        return function() {
            hinfowindow.setContent(hlocations[hi][0]);
            hinfowindow.open(hmap, hmarker);
        }
    })(hmarker, hi));
}
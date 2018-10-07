/*------------------------------------*\
    //Google Maps
\*------------------------------------*/
/////////////////////////////
// Footer Map
/////////////////////////////
// set up page global position/format
//var image = '/sites/drdamon/drdamon/wp-content/themes/drdamon/images/global/map-marker.png';
var sroot = siteUrl.theUrl;
var image = sroot + "/wp-content/themes/drdamon/images/global/map-marker.png";
var mapCenter = new google.maps.LatLng(38.571689, -121.409254);
var map = new google.maps.Map(document.getElementById('foot__map'), {
    center: mapCenter,
    zoom: 15,
    minZoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    scaleControl: false,
    streetViewControl: false
});

// style the map
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
          { "color": "#00a4e3" }
        ]
      }
];
var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');

// add resize event to the map
google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
    map.setZoom(map.zoom);
});

// set up popup windows
var locations = [
    [
        '<p><strong>Szymanowski Orthodontics</strong><br>'+
        '99 Scripps Drive, Suite 201<br>'+
        'Sacramento, CA 95825<br>'+
        'Phone: 916-993-4171<br>'+
        '<a href="https://www.google.com/maps/place/99+Scripps+Dr,+Sacramento,+CA+95825/@38.571689,-121.409254,17z/data=!3m1!4b1!4m2!3m1!1s0x809adaf8701a1ddb:0x9866c7c4285241f3" target="_blank">'+
        'Get Directions'+
        '</a></p>',
        38.571689,
        -121.409270
    ]
];
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}

/////////////////////////////
// Contact Page Map
/////////////////////////////
// set up page global position/format

if($(".hero--map").length > 0) { // Check to see if element is on current page
    var hmapCenter = new google.maps.LatLng(38.574398, -121.409356);
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
              { "color": "#00a4e3" }
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
            '<p><strong>Szymanowski Orthodontics</strong><br>'+
            '99 Scripps Drive, Suite 201<br>'+
            'Sacramento, CA 95825<br>'+
            'Phone: 916-993-4171<br>'+
            '<a href="https://www.google.com/maps/place/99+Scripps+Dr,+Sacramento,+CA+95825/@38.571689,-121.409254,17z/data=!3m1!4b1!4m2!3m1!1s0x809adaf8701a1ddb:0x9866c7c4285241f3" target="_blank">'+
            'Get Directions'+
            '</a></p>',
            38.571689,
            -121.409270
        ]
    ];
    var hinfowindow = new google.maps.InfoWindow();
    var hmarker, hi;
    for (hi = 0; hi < hlocations.length; hi++) {
        hmarker = new google.maps.Marker({
            position: new google.maps.LatLng(hlocations[hi][1], hlocations[hi][2]),
            map: hmap,
            icon: image
        });

        google.maps.event.addListener(hmarker, 'click', (function(hmarker, hi) {
            return function() {
                hinfowindow.setContent(hlocations[hi][0]);
                hinfowindow.open(hmap, hmarker);
            }
        })(hmarker, hi));
    }
}
(function($) {

    // global array of maps
    var allMaps = [];

    /*------------------------------------*\
        ::Render Map
    \*------------------------------------*/
    function renderMap($el) {
        // marker elements
        var $markers = $el.find('.marker');
        // map setup
        var args = {
            zoom        : 13,
            center      : new google.maps.LatLng(0, 0),
            draggable: true,
            scrollwheel: false,
            mapTypeId   : google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            scaleControl: false,
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_TOP
            },
        };
        // create map
        var map = new google.maps.Map($el[0], args);
        // add a markers reference
        map.markers = [];
        // add markers
        $markers.each(function(){
            addMarker($(this), map);
        });
        // center map
        centerMap(map);
        // style the map
        styleMap(map);

        // collect this in an array
        allMaps.push(map);
    }

    /*------------------------------------*\
        ::Style Map
    \*------------------------------------*/
    function styleMap(map) {
        // establish styles
        // taken from
        var styles = [ 
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 0
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -10
                    },
                    {
                        "color": "#74aaca"
                    },
                    {
                        "lightness": 30
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    },
                    {
                        "color": "#000"
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 60
                    }
                ]
            }
        ];
        // apply them to the map
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    }

    /*------------------------------------*\
        ::Add Markers
    \*------------------------------------*/
    function addMarker($marker, map) {
        // set location
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        // create marker
        var marker = new google.maps.Marker({
            position    : latlng,
            map         : map,
            icon        : urls.image
        });
        // add to array
        map.markers.push(marker);
        // if marker contains HTML, add it to an infoWindow
        if($marker.html()) {
            // create the info window
            var infowindow = new google.maps.InfoWindow({
                content     : $marker.html(),
                icon        : ''
            });
            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    }
    /*------------------------------------*\
        ::Center Map to Markers
    \*------------------------------------*/
    function centerMap(map) {
        // set bounds
        var bounds = new google.maps.LatLngBounds();
        // loop through all markers and create bounds
        $.each(map.markers, function(i, marker){
            var xAdjust = 0; // negative shifts left and positive shifts right
            var yAdjust = 0; // positive shifts up and negative shifts down
            var latlng = new google.maps.LatLng(marker.position.lat() + yAdjust, marker.position.lng() + xAdjust);
            bounds.extend(latlng);
        });
        // if there's only 1 marker
        if(map.markers.length == 1) {
            // set it as the center of map
            map.setCenter(bounds.getCenter());
            map.setZoom(13);
        // if there are many markers
        } else {
            // fit to bounds
            map.fitBounds(bounds);
        }
    }
    // recenter the map on window resize
    $(window).resize(function(){
        for (var i = 0; i < allMaps.length; i++) {
            centerMap(allMaps[i]);
            // set draggable for mobile
            var mapHeight = $(allMaps[i].__gm.ca).height();
            var isMobile = ($(window).height() > mapHeight + 100 ? true : false);
            allMaps[i].setOptions({draggable: isMobile});
        }
    });

    /*------------------------------------*\
        ::Add Map
    \*------------------------------------*/
    $(document).ready(function(){
        $('.header-map').each(function(){
            renderMap($(this));
        });
    });

})(jQuery);
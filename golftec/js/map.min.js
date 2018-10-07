/*------------------------------------*\
    ::Map
\*------------------------------------*/
(function($) {

    // global array of maps
    var allMaps = [];

    /*------------------------------------*\
        ::Render Map
    \*------------------------------------*/
    function renderMap($el) {
        // marker elements
        var $markers = $el.find('.js-map-marker');
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
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.LEFT_BOTTOM
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
        var styles = [];
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
            icon        : '../images/modules/map-block/marker-green-lg.png'
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
            var yAdjust = ($(window).width() > 800 ? 0.005 : 0.012); // positive shifts up and negative shifts down
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
        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCiRv6_rpOrMHFKAOvvCCLWazCdwWge-Aw')
            .done(function( script, textStatus ) {
                $('#js-map').each(function(){
                    renderMap($(this));
                });
                $('#js-center-map').each(function(){
                    renderMap($(this));
                });
            })
            .fail(function( jqxhr, settings, exception ) {
                console.log('error getting map: ' + exception);
            });
    });

})(jQuery);
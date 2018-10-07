(function($) {
    // global array of maps
    var allMaps = [];
    /*------------------------------------------------*\
        ::  Render Map
        ::  This function will render a Google Map 
        ::  onto the selected jQuery element
    \*------------------------------------------------*/
    function render_map( $el ) {
        // var
        var $markers = $el.find('.marker');
        // vars
        var args = {
            zoom        : 16,
            scrollwheel: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            center      : new google.maps.LatLng(0, 0),
            mapTypeId   : google.maps.MapTypeId.ROADMAP
        };
        // create map               
        var map = new google.maps.Map( $el[0], args);
        // add a markers reference
        map.markers = [];
        // add markers
        $markers.each(function(){
            add_marker( $(this), map );
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
        var styles = [
        // {
        //     "featureType": "water",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#193341"
        //         }
        //     ]
        // },
        // {
        //     "featureType": "landscape",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#2c5a71"
        //         }
        //     ]
        // },
        // {
        //     "featureType": "road",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#29768a"
        //         },
        //         {
        //             "lightness": -37
        //         }
        //     ]
        // },
        // {
        //     "featureType": "poi",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#406d80"
        //         }
        //     ]
        // },
        // {
        //     "featureType": "transit",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#406d80"
        //         }
        //     ]
        // },
        // {
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //         {
        //             "visibility": "on"
        //         },
        //         {
        //             "color": "#3e606f"
        //         },
        //         {
        //             "weight": 2
        //         },
        //         {
        //             "gamma": 0.84
        //         }
        //     ]
        // },
        // {
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //         {
        //             "color": "#ffffff"
        //         }
        //     ]
        // },
        // {
        //     "featureType": "administrative",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "weight": 0.6
        //         },
        //         {
        //             "color": "#1a3541"
        //         }
        //     ]
        // },
        // {
        //     "elementType": "labels.icon",
        //     "stylers": [
        //         {
        //             "visibility": "off"
        //         }
        //     ]
        // },
        // {
        //     "featureType": "poi.park",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#2c5a71"
        //         }
        //     ]
        // }
    ];
        // apply them to the map
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    }

    /*----------------------------------------*\
        ::  Add Marker
        ::  This function will add a marker 
        ::  to the selected Google Map
    \*----------------------------------------*/
    function add_marker( $marker, map ) {
        // var
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
        // create marker
        var marker = new google.maps.Marker({
            position    : latlng,
            draggable   : true, // set marker to draggable to hide duplicates
            crossOnDrag : false, // hide cross icon on drag event
            map         : map,
            icon        : urls.image
        });

        // Set marker back to original position on drag event
        var origPos = marker.getPosition();
        marker.addListener("drag",function(e){
            marker.setPosition(origPos);
        });
        // add to array
        map.markers.push( marker );
        // if marker contains HTML, add it to an infoWindow
        if( $marker.html() )
        {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content     : $marker.html()
            });
            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open( map, marker );
            });
        }
    }
    /*-------------------------------------------------*\
        ::  Center Map
        ::  This function will center the map, 
        ::  showing all markers attached to this map
    \*-------------------------------------------------*/
    function centerMap( map ) {
        // vars
        var bounds = new google.maps.LatLngBounds();
        // loop through all markers and create bounds
        var isDesktop = $(window).width() >= 450 ? true : false;
        if(!isDesktop && $(map).hasClass('header-map--distributor')) {
            var latlng = new google.maps.LatLng( 60.897057, -11.053661 );
            bounds.extend( latlng );
            latlng = new google.maps.LatLng( 22.927635, 69.172664 );
            bounds.extend( latlng );
        } else {
            $.each( map.markers, function( i, marker ){
               var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
               bounds.extend( latlng );
           }); 
        }
        // only 1 marker?
        if( map.markers.length == 1 ) {
            // set center of map
            map.setCenter( bounds.getCenter() );
            map.setZoom( 16 );
        } else {
            // fit to bounds
            map.fitBounds( bounds );
        }
    }
    // recenter the map on window resize
    $(window).resize(function(){
        for (var i = 0; i < allMaps.length; i++) {
            centerMap(allMaps[i]);
        }
    });


    function initialize() {
        var myLatlng = new google.maps.LatLng(0,0);
        var mapOptions = {
            zoom: 0,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            draggable: true, // set marker to draggable to hide duplicates
            crossOnDrag : false, // hide cross icon on drag event
        });
        // Set marker back to original position on drag event
        var origPos = marker.getPosition();
        marker.addListener("drag",function(e){
            marker.setPosition(origPos);});
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    
    /*-----------------------------------------------*\
        ::  Document Ready
        ::  This function will render each map when 
        ::  the document is ready (page has loaded)
    \*-----------------------------------------------*/
    $(document).ready(function(){
        $('.header-map--contact').each(function(){
            render_map( $(this) );
        });
        $('.header-map--distributor').each(function(){
            render_map( $(this) );
        });
    });
})(jQuery);
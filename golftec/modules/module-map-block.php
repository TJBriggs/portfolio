<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>GolfTEC | Map Block</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="../favicon.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
        <link rel="stylesheet" href="../style.css">
    </head>
    <body>
    <div class="wrap-all-the-things"> <!-- Needed to make Sticky Footer work -->
    <div class="main-torso"> <!-- Needed to make Sticky Footer work -->
        <article class="map-block main-torso__group">
            <header class="map-block__head">
                <div class="map-block__head-left">
                    <span>Find the Closest GolfTEC Improvement Center</span>
                    <a href="#" class="map-block__btn btn">
                        Use Your Location
                        <img src="../images/modules/map-block/location-icon.svg" alt="Location Icon">
                    </a>
                </div> <!-- map-block__head-left -->
                <div class="map-block__head-right">
                    <div class="map-block__legend">
                        <div class="map-block__marker">
                            <img src="../images/modules/map-block/marker-green.png" alt="">
                            <span>GolfTEC<br>Center</span>
                        </div>
                        <div class="map-block__marker">
                            <img src="../images/modules/map-block/marker-red.png" alt="">
                            <span>GolfTEC inside<br>Golfsmith</span>
                        </div>
                        <div class="map-block__marker">
                            <img src="../images/modules/map-block/marker-black.png" alt="Black Map Marker">
                            <span>GolfTEC<br>coming soon</span>
                        </div>
                    </div> <!-- map-block__legend -->
                    <div class="map-block__search">
                        <span>Find Centers Near</span>
                        <form action="#">
                            <input type="text" placeholder="Search by city, state, zip or airport">
                            <input id="find-icon" type="submit">
                        </form>
                    </div> <!-- map-block__search -->
                </div> <!-- map-block__head-right -->
            </header> <!-- map-block__head -->
            <div class="map-block__left">
                <div id="js-map" class="map-block__map">
                    <div class="js-map-marker map-block__marker" data-lat="39.708856" data-lng="-104.941762" style="display: none;">
                        <div class="map__marker">
                            <div class="marker__distance">
                                <strong>7.2</strong><br>
                                <span>Miles<br>Away</span>
                            </div>
                            <div class="marker__details">
                                <h5>Cherry Creek</h5>
                                <a href="tel:3033884832">303.388.4832</a>
                                <p>3773 Cherry Creek Drive<br>North #130 Denver, CO</p>
                            </div>
                            <a class="btn" href="#">Center Details Page</a>
                        </div> <!-- // marker -->
                    </div> <!-- // map-block__marker -->
                </div> <!-- // map-block__map -->
            </div> <!-- // map-block__left -->
            <div class="map-block__right">
                <div class="map-block__locations-wrap">
                    <ul class="map-block__locations">
                        <li class="active">
                            <a href="#">
                                <img class="map-block__icon" src="../images/modules/map-block/marker-green.png" alt="Green Map Marker">
                                <span><strong>7.2</strong><br> Miles<br>Away</span>
                                <img class="map-block__location-img" src="../images/modules/map-block/golftec-sign.jpg" alt="Image of GolfTEC Sign">
                                 <div class="map-block__text">
                                    <h5>Cherry Creek</h5>
                                    <strong>303.388.4832</strong>
                                    <p>
                                        3773 Cherry Creek Drive<br>
                                        North #130 Denver, CO
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="map-block__icon" src="../images/modules/map-block/marker-red.png" alt="Red Map Marker">
                                <span><strong>22.8</strong><br> Miles<br>Away</span>
                                <img class="map-block__location-img" src="../images/modules/map-block/golftec-sign.jpg" alt="Image of GolfTEC Sign">
                                <div class="map-block__text">
                                    <h5>Westminster</h5>
                                    <strong>303.426.6600</strong>
                                    <p>
                                        9440 Sherican BLVD.<br>
                                        Westminster, CO
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="map-block__icon" src="../images/modules/map-block/marker-red.png" alt="Red Map Marker">
                                <span><strong>26.9</strong><br> Miles<br>Away</span>
                                <img class="map-block__location-img" src="../images/modules/map-block/golftec-sign.jpg" alt="Image of GolfTEC Sign">
                                <div class="map-block__text">
                                    <h5>Golden</h5>
                                    <strong>303.278.3589</strong>
                                    <p>
                                        1712 West Colfax Ave,<br>
                                        Wuite 108 Golden, CO
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="map-block__icon" src="../images/modules/map-block/marker-green.png" alt="Green Map Marker">
                                <span><strong>34.2</strong><br> Miles<br>Away</span>
                                <img class="map-block__location-img" src="../images/modules/map-block/golftec-sign.jpg" alt="Image of GolfTEC Sign">
                                <div class="map-block__text">
                                    <h5>Boulder</h5>
                                    <strong>720.379.4843</strong>
                                    <p>
                                        1712 West Colfax Ave,<br>
                                        Suite 108 Golden, CO
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="map-block__icon" src="../images/modules/map-block/marker-black.png" alt="Black Map Marker">
                                <span><strong>104.2</strong><br> Miles<br>Away</span>
                                <img class="map-block__location-img" src="../images/modules/map-block/golftec-sign.jpg" alt="Image of GolfTEC Sign">
                                <div class="map-block__text">
                                    <h5>Fort Collins</h5>
                                    <strong>720.379.4843</strong>
                                    <p>
                                        1234 Main Street,<br>
                                        Fort Collins, CO
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul> <!-- // map-block__locations -->
                </div> <!-- // map-block__locations-wrap -->
            </div> <!-- // map-block__right -->
        </article> <!-- // map-block -->
        <article class="module-separator">
            <h3>Map Block</h3>
        </article>
    </div> <!-- // main-torso -->
    </div> <!-- // wrap-all-the-things -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript" src="../js/map.min.js"></script>
    <script type="text/javascript" src="../js/scripts.min.js"></script>
    </body>
</html>
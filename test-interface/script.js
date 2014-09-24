$(document).ready(function() {

            window.onload = function () {
                // var r = Raphael("holder", 619, 419),
                var r = Raphael("holder", 619, 419), //Raphael(0, 0, "100%", "100%"),
                    dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
                // rond 1-1
                (function () {
                    var path1 = "M50.5,20.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 302.55742,112.06246 506.31373,1.11088 -206.67272,400.63142 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path:path2 , fill: "green", "fill-opacity": 1,  stroke: "none"}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 97){
                            // el.stop().animate(elattrs[+(now = !now)], 2000);
                            $('#canvasball').css('display', 'block');
                        }
                    });
                })(); 

                (function () {
                    var path1 = "M50.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 959.99998,269.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "yellow", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 122){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 
                // rond 1-3
                (function () {
                    var path1 = "M50.5,220.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        if(e.which == 101){
                          // el.stop().animate(elattrs[+(now = !now)], 1000);
                          $('#canvas2').css('display', 'block');
                        }
                    });
                })(); 

                // rond 2-1
                (function () {
                    var path1 = "M150.5,20.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).click(function(e){
                        el.stop().animate(elattrs[+(now = !now)], 1000);
                    });
                })(); 
                // rond 2-2
                (function () {
                    var path1 = "M150.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        if(e.which == 100){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 

                // rond 2-3
                (function () {
                    var path1 = "M150.5,220.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        if(e.which == 121){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 
                // rond 3-1
                (function () {
                    var path1 = "M250.5,20.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 100){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 

                // rond 3-2
                (function () {
                    var path1 = "M250.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 115){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 

                // rond 3-3
                (function () {
                    var path1 = "M250.5,220.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 113){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 
                // rond 4-1
                (function () {
                    var path1 = "M350.5,20.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 100){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 

                // rond 4-2
                (function () {
                    var path1 = "M350.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#000", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 100){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 

                // rond 4-3
                (function () {
                    var path1 = "M350.5,220.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z";
                    var path2 = "M520,89.5c0-20 400,200 200,0";
                    r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2, "stroke-opacity": 0.5});
                    var el = r.path(path1).attr({fill: "#fff", "fill-opacity": 0, stroke: "#fff", "stroke-width": 2}),
                    elattrs = [{path: path2, fill: "#fff", "fill-opacity": 1,  stroke: "#fff", "stroke-width": 2}, {path:path1, fill: "#fff", "fill-opacity": 0}],
                    now = 1;
                    $(document).keypress(function(e){
                        console.log(e.which, " is keydown");
                        if(e.which == 197){
                            el.stop().animate(elattrs[+(now = !now)], 1000);
                        }
                    });
                })(); 
            };
       //         // Pussy to dick
       //          (function () {
       //              r.path("m 402.55742,212.06246 206.31373,1.11088 -96.67272,176.63142 z").attr(dashed);
       //              r.path("m 71.836744,190.6836 c 0,0 -5.71429,-57.14285 31.428566,-48.57143 37.14286,8.57143 24.28571,40 24.28571,40 L 278.10096,84.969324 c 0,0 32.85715,-8.57143 50,8.57143 17.14286,17.142846 -12.85714,51.428566 -12.85714,51.428566 l -142.85714,90 32.85714,4.28571 c 0,0 24.28571,12.85714 7.14286,35.71429 -17.14286,22.85714 -92.85716,35.71428 -108.57144,7.14285 -15.714286,-28.57142 12.85714,-61.42857 12.85714,-61.42857 0,0 -45.714276,12.85715 -45.714276,-30 z").attr(dashed);
       //              var el = r.path("m 402.55742,212.06246 206.31373,1.11088 -96.67272,176.63142 z").attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
       //                  elattrs = [{path: "m 402.55742,212.06246 206.31373,1.11088 -96.67272,176.63142 z"}, {path: "m 71.836744,190.6836 c 0,0 -5.71429,-57.14285 31.428566,-48.57143 37.14286,8.57143 24.28571,40 24.28571,40 L 278.9796,84.969324 c 0,0 32.85715,-8.57143 50,8.57143 17.14286,17.142846 -12.85714,51.428566 -12.85714,51.428566 l -142.85714,90 32.85714,4.28571 c 0,0 24.28571,12.85714 7.14286,35.71429 -17.14286,22.85714 -92.85716,35.71428 -108.57144,7.14285 -15.714286,-28.57142 12.85714,-61.42857 12.85714,-61.42857 0,0 -45.714276,12.85715 -45.714276,-30 z"}],
       //                  now = 1;
       //              $(document).keypress(function(e){
							// console.log(e.which, " is keydown");
							// if(e.which == 97){
       //                  		el.stop().animate(elattrs[+(now = !now)], 1000);
       //                  	}
       //              });
       //          })();

       //          //star to heart
       //          (function () {
       //              r.path("m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z").attr(dashed);
       //              r.path("m 357.14286,292.36218 c 0,0 -34.28572,-125.71428 -160,-91.42857 -125.714289,34.28572 8.57143,205.71429 8.57143,205.71429 L 374.28571,498.07647 508.57143,386.6479 c 0,0 105.71428,-177.14286 14.28571,-171.42857 -91.42857,5.71428 -111.42857,-25.71429 -165.71428,77.14285 z").attr(dashed);
       //              var el = r.path("m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z").attr({fill: "none", stroke: "#fff", "stroke-width": 2}),
       //                  elattrs = [{path: "m 459.99998,369.50503 -107.78596,4.53174 -57.37237,91.36062 -37.61764,-101.11015 -104.61815,-26.33238 84.53698,-67.02126 -7.2852,-107.63493 89.86437,59.68874 100.11564,-40.18966 -28.99774,103.91093 z"}, {path: "m 357.14286,292.36218 c 0,0 -34.28572,-125.71428 -160,-91.42857 -125.714289,34.28572 8.57143,205.71429 8.57143,205.71429 L 374.28571,498.07647 508.57143,386.6479 c 0,0 105.71428,-177.14286 14.28571,-171.42857 -91.42857,5.71428 -111.42857,-25.71429 -165.71428,77.14285 z"}],
       //                  now = 1;
       //              $(document).keypress(function(e){
							// if(e.which == 122){
       //                  		el.stop().animate(elattrs[+(now = !now)], 1000);
       //                  	}
       //              });
       //          })();

       //          //B to spirale
       //          (function () {
       //              r.path("M 508.10673,31.09796 493.9646,228.0777 c 0,0 66.67006,3.03046 68.69037,-21.2132 2.02031,-24.24366 -27.27412,-69.70053 -64.64976,-63.63961 -37.37565,6.06091 119.198,-24.24366 95.96449,-62.629456 C 570.73619,42.209638 508.10673,31.09796 508.10673,31.09796 z").attr(dashed);
       //              r.path("m 440,775.2193 c 3.15156,2.00553 -1.14855,5.2377 -3.33333,5.2381 -5.92061,0.001 -8.43364,-7.02434 -7.14287,-11.90476 2.30889,-8.72992 12.61924,-11.98372 20.47619,-9.04763 11.5304,4.30882 15.61729,18.28217 10.9524,29.04761 -6.21757,14.34864 -23.96824,19.28513 -37.61904,12.85717 -17.17814,-8.08894 -22.97044,-29.66508 -14.76194,-46.19047 9.9416,-20.01447 35.36793,-26.66581 54.7619,-16.6667 22.85512,11.7836 30.36749,41.07452 18.57147,63.33332 -13.61897,25.69866 -46.78362,34.07338 -71.90475,20.47624 -28.54423,-15.44994 -37.78221,-52.49447 -22.38101,-80.47618 17.27783,-31.39125 58.20661,-41.49319 89.04761,-24.28577 34.23935,19.10349 45.20577,63.91971 26.19054,97.61903").attr(dashed);
       //              var el = r.path("M 508.10673,31.09796 493.9646,228.0777 c 0,0 66.67006,3.03046 68.69037,-21.2132 2.02031,-24.24366 -27.27412,-69.70053 -64.64976,-63.63961 -37.37565,6.06091 119.198,-24.24366 95.96449,-62.629456 C 570.73619,42.209638 508.10673,31.09796 508.10673,31.09796 z").attr({fill: "#ff0000", stroke: "#000", "stroke-width": 2}),
       //                  elattrs = [{path: "M 508.10673,31.09796 493.9646,228.0777 c 0,0 66.67006,3.03046 68.69037,-21.2132 2.02031,-24.24366 -27.27412,-69.70053 -64.64976,-63.63961 -37.37565,6.06091 119.198,-24.24366 95.96449,-62.629456 C 570.73619,42.209638 508.10673,31.09796 508.10673,31.09796 z", fill: "#ff0000", stroke: "#000", "stroke-width": 2, "fill-opacity": 1}, {path: "m 440,775.2193 c 3.15156,2.00553 -1.14855,5.2377 -3.33333,5.2381 -5.92061,0.001 -8.43364,-7.02434 -7.14287,-11.90476 2.30889,-8.72992 12.61924,-11.98372 20.47619,-9.04763 11.5304,4.30882 15.61729,18.28217 10.9524,29.04761 -6.21757,14.34864 -23.96824,19.28513 -37.61904,12.85717 -17.17814,-8.08894 -22.97044,-29.66508 -14.76194,-46.19047 9.9416,-20.01447 35.36793,-26.66581 54.7619,-16.6667 22.85512,11.7836 30.36749,41.07452 18.57147,63.33332 -13.61897,25.69866 -46.78362,34.07338 -71.90475,20.47624 -28.54423,-15.44994 -37.78221,-52.49447 -22.38101,-80.47618 17.27783,-31.39125 58.20661,-41.49319 89.04761,-24.28577 34.23935,19.10349 45.20577,63.91971 26.19054,97.61903", fill: "#fff", "fill-opacity": 0}],
       //                  now = 1;
       //              $(document).keypress(function(e){
							// if(e.which == 101){
       //                  		el.stop().animate(elattrs[+(now = !now)], 200);
       //                  	}
       //              });
       //          })();
       //    	};


});
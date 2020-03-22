This project is a fork of an already existing node module, gpx-parse. 

I'm only making some changes for it to work in my project.

A library for parsing gpx data. Works against most of the Gpx v1.0 spec and Gpx v1.1. As in the original project please be my guest and fork if you need something specific.


#Installation

	$ npm install viade-gpx-parse

#Usage


```javascript
var gpxParse = require("gpx-parse");

//from file
gpxParse.parseGpxFromFile("/path/to/gpxFile", function(error, data) {
	//do stuff
});

//or from string
gpxParse.parseGpx("<gpx></gpx>", function(error, data) {
	//do stuff
});

// or an external file via HTTP(S)
gpxParse.parseRemoteGpxFile("http://host.tld/my.gpx", function(error, data) {
    //do stuff
});

```

#Tests

Tests are written with nodeunit. To test make sure you have the dev dependencies installed and just run:

	$ npm test

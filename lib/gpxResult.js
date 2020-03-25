/**
 * Constructor for GpxResult
 * @class
 * @classdesc Holds the results of the gpx parse
 * @param {GpxMetaData} metadata The metadata associated with the gpx trace
 * @param {Array.<GpxWaypoint>} waypoints An array of waypoints.
 * @param {Array.<GpxRoute>} routes An array of routes.
 * @param {Array.<GpxTrack>} tracks An array of tracks.
 */
function GpxResult(metadata, waypoints, routes, tracks) {

	this.metadata = metadata || null;
	this.waypoints = waypoints || null;
	this.routes = routes || null;
	this.tracks = tracks || null;

}



module.exports = GpxResult;

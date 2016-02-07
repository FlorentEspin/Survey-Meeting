/* global Meteor */
/* global Template */

if (Meteor.isClient) {
    Template.home.helpers({
        "connected": function () {
            //Voir la connection de la BDD SQL
            //return connected ? true : false; 
            return true;
        }
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        console.log("Server started");
    });
}

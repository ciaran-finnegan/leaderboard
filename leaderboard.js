PlayerList = new Mongo.Collection('players');
console.log("Hello world");
if(Meteor.isClient){
    // this code only runs on the client
Template.leaderboard.helpers({
    // helper functions go here
    'player' : function(){
    return "Some other text from player function"
    },
    'otherHelperFunction' : function(){
        return "Some other Helper Function"
    }
});
}
if(Meteor.isServer){
    // this code only runs on the server

}

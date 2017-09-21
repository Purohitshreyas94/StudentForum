/**
 * FriendService
 */
app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.listOfSuggestedUsers=function(){
		return $http.get("http://localhost:8081/studentforumbackend/getsuggestedusers")
	}
	
	friendService.friendRequest=function(toId){
		return $http.post("http://localhost:8081/studentforumbackend/friendrequest/"+toId)
	}
	
	friendService.listOfPendingRequests=function(){
		return $http.get("http://localhost:8081/studentforumbackend/getpendingrequests")
	}
	/*
	 * {users detail,'A'} -> Accept
	 * {users detail,'D'} -> Deny
	 */
	friendService.updatePendingRequest=function(pendingRequest){
		return $http.put("http://localhost:8081/studentforumbackend/updatependingrequest",pendingRequest)
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8081/studentforumbackend/listoffriends")
	}
	
	return friendService;
})
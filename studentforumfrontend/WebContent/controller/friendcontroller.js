/**
 * FriendController
 */
app.controller('FriendController',function($scope,$location,FriendService){
	/*
     * code for all suggested users(Available users)
    */
	function listOfSuggestedUsers(){
	FriendService.listOfSuggestedUsers().then(function(response){
		$scope.suggestedusers=response.data
	  },function(response){
		  if(response.status==401)
		   $location.path('/login')
		  console.log(response.status)
	  })
	}

       /*
        * code for listofpendingrequests.html
       */
function listOfPendingRequests(){
	FriendService.listOfPendingRequests().then(function(response){
		$scope.pendingrequests=response.data
	  },function(response){
		  if(response.status==401)
		   $location.path('/login')
		  console.log(response.status)
	  })
	}

    /*
    * code for list of all friends
    */
function listOfFriends(){
	FriendService.listOfFriends().then(function(response){
		$scope.friends=response.data
	  },function(response){
		  if(response.status==401)
		   $location.path('/login')
		  console.log(response.status)
	  })
	}
   
        
    /*
     * toId=user.username
    */
     $scope.friendRequest=function(toId){
    	 FriendService.friendRequest(toId).then(function(response){
    		 alert('Request has been sent successfully')
    		 listOfSuggestedUsers();
    		 $location.path('/suggesteduserslist')
    	 },function(response){
    		 if(response.status==401)
    		   $location.path('/login')
    		  console.log(response.status)
    	 
    	 })
     }
     
     $scope.updatePendingRequest=function(pendingRequest,status){
    	 /*
    	  * pendingRequest.status='P'
    	  * pendingRequest.status=status -> 'A'/'D'
    	  */
    	 console.log(pendingRequest.status)
    	 pendingRequest.status=status
    	 /*
    	  * pendingRequest is an object of type Friend
    	  * id,fromId,toId and status (A/D)
    	  */
    	 FriendService.updatePendingRequest(pendingRequest).then(function(response){
    		 listOfPendingRequests()
    		 $location.path('/pendingrequests')
    	 },function(response){
    		 if(response.status==401)
    	 	 $location.path('/login')
    	 	 console.log(response.status)
    	 })

     }
     
  listOfSuggestedUsers()
  listOfPendingRequests()
  listOfFriends()
})
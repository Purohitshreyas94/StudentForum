/**
 * JobService
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.saveJob=function(job){
	  return  $http.post("http://localhost:8081/studentforumbackend/savejob",job)
	}
	jobService.getAllJobs=function(){
		 return  $http.get("http://localhost:8081/studentforumbackend/getalljobs")
	}
	return jobService;
})

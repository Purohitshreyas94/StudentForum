/**
 * JobService
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.saveJob=function(job){
		console.log(job)
	  return  $http.post("http://localhost:8081/studentforumbackend/savejob",job)
	}
	jobService.getAllJobs=function(){
		 return  $http.get("http://localhost:8081/studentforumbackend/getalljobs")
	}
	
	jobService.getJobDetails=function(id){
		return $http.get("http://localhost:8081/studentforumbackend/getjobbyid/"+id)
	}
	
	jobService.updateJob=function(job){
		return $http.put("http://localhost:8081/studentforumbackend/updatejob",job)
	}
	
	jobService.deleteJob=function(id){
		return $http.get("http://localhost:8081/studentforumbackend/deletejob/"+id)
	}
	return jobService;
	
})


/**
 * Job Controller
 */
app.controller('JobController',function(JobService,$scope,$routeParams,$location){
	var id=$routeParams.id
$scope.showJobDetails=false;
	
	$scope.job=JobService.getJobDetails(id).then(function(response){
		$scope.job=response.data;
		console.log(response.data)
	},function(response){
		console.log(response.status)
		if(response.status==401)
			$location.path('/login')
	})
	
	function getAllJobs(){
		JobService.getAllJobs().then(function(response){
			$scope.jobs=response.data;
		},function(response){
			$location.path('/login')
		})
	}
	
	$scope.saveJob=function(){
		JobService.saveJob($scope.job).then(function(response){
			$location.path('/getalljobs')
		},function(response){
			console.log(response.status)
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
			}
			if(response.status==500){
				$scope.error=response.data
				$location.path('/savejob')
			}
			$location.path('/home')
		})
	}
	
	$scope.getJobDetails=function(id){
		$scope.showJobDetails=true
		JobService.getJobDetails(id).then(function(response){
			$scope.job=response.data
		},function(response){
			console.log(response.data)
			$location.path('/login')
		})
	}	
	
	$scope.updateJob=function(){
		console.log($scope.job)
		JobService.updateJob($scope.job).then(function(response){
			alert(" Job Updated successfully")
			console.log(response.status)
			$location.path('/getalljobs')
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.deleteJob=function(id){
		JobService.deleteJob(id).then(function(response){
			alert(" Job Deleted successfully")
			$scope.job=response.data
			getAllJobs()
			console.log(response.status)
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.applyJob=function(id){
		JobService.applyJob(id).then(function(response){
			console.log(response.status)
			alert('Job Applied Successfully..')
			$scope.job=response.data
			getAllJobs()
			console.log(response.status)
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
getAllJobs()	
	
})


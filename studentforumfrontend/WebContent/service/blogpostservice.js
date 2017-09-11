/**
 * BlogPostService
 */

app.factory('BlogPostService',function($http){
	var blogPostService={};
	
	blogPostService.addBlogPost=function(blogPost){
		return $http.post("http://localhost:8081/studentforumbackend/saveblogpost",blogPost)
	}
	
	blogPostService.getBlogPostsWaitingForApproval=function(){
		return $http.get("http://localhost:8081/studentforumbackend/getblogposts/"+0)
	}
	
	blogPostService.getBlogPostsApproved=function(){
		return $http.get("http://localhost:8081/studentforumbackend/getblogposts/"+1)
	}
	
	blogPostService.getBlogPostById=function(id){
		return $http.get("http://localhost:8081/studentforumbackend/getblogpostbyid/"+id)
	}
	
	blogPostService.updateBlogPost=function(blogPost){
		return $http.put("http://localhost:8081/studentforumbackend/updateblogpost",blogPost)
	}
	
	blogPostService.addComment=function(blogComment){
		console.log(blogComment)
		return $http.post("http://localhost:8081/studentforumbackend/addblogcomment",blogComment)
	}
	
	blogPostService.getBlogComments=function(blogPostId){
		return $http.get("http://localhost:8081/studentforumbackend/getblogcomments/"+blogPostId)
	}


	return blogPostService;
})

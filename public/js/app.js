/** @jsx React.DOM */
var CommentBox = React.createClass({
	render: function(){
		return(
			<div className="commentBox">
			<h1> Comments </h1>
			<CommentList />
			<CommentForm />
			</div>
			);
	}
});


var CommentList = React.createClass({
	render: function(){
		return(
			<div className = "commentList">
			Hello, I am a comment list 
			</div>
			);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
			Hello I am a comment form 
			</div>
			);
	}
});

React.render(
	<CommentBox />,
	document.getElementById('content')
);
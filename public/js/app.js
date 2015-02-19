/** @jsx React.DOM */
var CommentBox = React.createClass({
	render: function(){
		return(
			<div className="commentBox">
				Hello, I am a comment Box 
			</div>
			);
	}
});

React.render(
	<CommentBox />,
	document.getElementById('content')
);
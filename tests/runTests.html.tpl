<!DOCTYPE html>
<html>
	<head>
		<title>EmbedJS Test Runner - ${platform}</title>
		<style type="text/css">
			body,html{
				background-color:white;
				color:black;
			}
			a {
				display: block;
				color: #000000;
			}
			#resultsNode h1 {
				font-size: 14px;
				margin: 0;
				padding: 0;
			}
			#resultsNode h1 a {
				padding: 5px 0px;
				text-decoration: none;
				background-color: #FF3F3F;
			}
			#resultsNode h1 span {
				font-weight: normal;
				font-size: 12px;
			}
			#resultsNode .groupResults {
				border: solid 1px #808080;
				margin-bottom: 10px;
				background: #80FF9F;
			}
			#resultsNode .inner {
				padding: 5px 10px;
			}
			#resultsNode .groupResults .passed {
				color: #077F00;
			}
			#resultsNode .groupResults .failed a {
				color: #FF3F3F;
			}
			
			/* toggle details */
			.inner {
				display: none;
			}
			.showDetails .inner,
			.summary .inner {
				display: block;
			}
			.showDetails h1,
			.summary h1 {
				border-bottom: solid 1px #808080;
			}
			
			
			/* messages */
			#resultsNode .messages {
				margin: 5px 3px;
				border-left: dotted 2px #808080;
				padding-left: 10px;
				font-size: 10px;
				color: #404040;
				display: none;
			}
			#resultsNode .showMessages {
				display: block;
			}
			
			#testBoxContainer {
				height: 0;
				overflow: hidden;
			}
		</style>
		<script type="text/javascript" src="runner-embed.js"></script>
	</head>
	<body>
	    <script type="text/javascript">
			//window.onerror = function(e){
			//	var err = [];
			//	for (var key in e){
			//		err.push(key+": "+e[key]);
			//	}
			//	alert("ERROR " + err.join(" "))
			//}
		
			function toggleClass(nodeId, classString){
				var node = document.getElementById(nodeId),
					className = node.className,
					hasClass = (" " + className + " ").indexOf(" " + classString + " ") >= 0;

				if(hasClass){
					node.className = node.className.replace(classString,"");
				}else{
					node.className += ( " " + classString );
				}
			}

			function toggleInner(group){
				toggleClass(group, 'showDetails');
			}

			function showMessages(id){
				toggleClass(id, 'showMessages');
			}
	    </script>
	    <pre id="statusInfo"></pre><br />
	    <pre id="resultsNode"></pre>
	    <div id="testBoxContainer"></div>
		
		<script type="text/javascript" src="${embedjs_filename}"></script>
		<script type="text/javascript" src="modules.js"></script>
		
		<!-- base -->
		<script type="text/javascript" src="tests/base.js"></script>
		<!-- array -->
		<script type="text/javascript" src="tests/array/array.js"></script>
		<!-- connect -->
		<script type="text/javascript" src="tests/connect/connect.js"></script>
		<!-- async -->
		<script type="text/javascript" src="tests/async/promise.js"></script>
		<script type="text/javascript" src="tests/async/when.js"></script>
		<script type="text/javascript" src="tests/async/deferred.js"></script>
		<!-- destroy -->
		<script type="text/javascript" src="tests/destroy/destroy.js"></script>
		<!-- html -->
		<script type="text/javascript" src="tests/html/id_html.js"></script>
		<script type="text/javascript" src="tests/html/id.js"></script>
		<script type="text/javascript" src="tests/html/html_html.js"></script>
		<script type="text/javascript" src="tests/html/html.js"></script>
		<script type="text/javascript" src="tests/html/element_html.js"></script>
		<script type="text/javascript" src="tests/html/element.js"></script>
		<script type="text/javascript" src="tests/html/ready.js"></script>
		<!-- json -->
		<script type="text/javascript" src="tests/json/json.js"></script>
		<!-- lang -->
		<script type="text/javascript" src="tests/lang/toArray.js"></script>
		<script type="text/javascript" src="tests/lang/clone.js"></script>
		<script type="text/javascript" src="tests/lang/hitch.js"></script>
		<script type="text/javascript" src="tests/lang/is.js"></script>
		<script type="text/javascript" src="tests/lang/string.js"></script>
		<script type="text/javascript" src="tests/lang/mixin.js"></script>
		<script type="text/javascript" src="tests/lang/object.js"></script>
		<!-- oo -->
		<script type="text/javascript" src="tests/oo/declare.js"></script>
		<script type="text/javascript" src="tests/oo/delegate.js"></script>
		<script type="text/javascript" src="tests/oo/extend.js"></script>
		<!-- query -->
		<script type="text/javascript" src="tests/query/query_html.js"></script>
		<script type="text/javascript" src="tests/query/query.js"></script>
		<!-- uri -->
		<script type="text/javascript" src="tests/uri/uri.js"></script>
		<!-- transport -->
		<!-- <script type="text/javascript" src="tests/transport/xhr_html.js"></script> -->
		<script type="text/javascript" src="tests/transport/xhr.js"></script>
		<script type="text/javascript" src="tests/transport/jsonp.js"></script>
	</body>
</html>


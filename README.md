#meteor-commonstyles-scroller

Package that includes the commonstyle.io fullpage js plugin. It will be automatically initialised.

To use, add this git repository to meteor smart.json and run  `mrt add`. 

Example `smart.json`:

	{
	  "packages": {
	    "meteor-commonstyles-scroller": {"git": "https://github.com/commoncode/meteor-commonstyles-scroller"}
	  }
	}

##DOM changes

Fullpage will need to be reloaded if you change the DOM relevant to it. E.g. adding or removing sections.

To do this, use the `CommonStyleScroller.reload(page)` method, where page is the optional number of the page to automatically scroll to. 

Example:

	Template.profile.rendered = function() {
		CommonStyleScroller.reload(2);
	}


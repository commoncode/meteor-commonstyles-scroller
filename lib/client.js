
CommonStyleScroller = {};

CommonStyleScroller.reload = function(scrollToPage) {
  if (typeof commonfullpage === 'undefined') {
    
    //fullpage still waiting to be built, just set scrolltopage in session.
    if (typeof scrollToPage === 'number') {
      Session.set('commonfullpage.ScrollToPage', scrollToPage);
    }
  }
  else {
    commonfullpage.rebuild(scrollToPage);
  }
}

Meteor.startup(function() {
  CommonStyle.css(['/lib/plugins/fullpage/jquery.fullPage.css','/lib/plugins/fullpage.custom.css']);
  CommonStyle.js(['/lib/plugins/fullpage/jquery.fullPage.min.js','/lib/plugins/script.js']);
});
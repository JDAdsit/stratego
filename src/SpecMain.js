require(['use!jquery', 'use!jasmine-html'], function() {
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	var specs = [];
	
    //add specs here like this
    //specs.push('../spec/AISpec');
	//specs.push('../spec/TicTacSpec');
	
	$(function(){
		require(specs, function(){
            jasmineEnv.execute();
		});
	});
});

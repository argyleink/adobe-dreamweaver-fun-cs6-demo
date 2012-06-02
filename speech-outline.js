var Adam 	= Human || Dork || {};
var Ratio 	= DigitalAgency || Nerds || {};


var speech = {
	
	intro: function() {
		
		return Adam.bio + Ratio.bio;	
		
	},
	
	
	overview: function() {
		
		this.plan 		= 'Explore mobile, tablet, and web app development with Dreamweaver.';
		this.tools 		= 'Shadow, Live Reload, Adaptive Layouts, Media Queries, jQuery, CSS3';
		this.setup		= 'How I like to use Dreamweaver';
		
		this.coolness	= [
							'HTML5, CSS3, jQuery Code completion',
							'jQuery Mobile Code Completion',
							'Shadow',
							'Live Reload',
							'Mobile and Tablet debugging',
							'Adaptive Layouts'
						  ];
		
	},
	
	
	mobile: function() {
		
		this.subject 	= 'Mobile Development';
		this.example	= 'Ratio Clear';
		this.exampleUrl = 'http://clear-ratio.herokuapp.com/';
		
	},
	
	
	css3: function() {
		
		this.subject 	= 'Dreamweaver CSS3 integration';
		this.example	= 'Fun with CSS3';
		this.exampleUrl	= 'http://dork.local/adobe-demo/css3/'; // gotta be on the wifi here
			
	},
	
	adapt: function() {
		
		this.subject 	= 'Dreamweaver Media Query integration';
		this.example	= 'Fun with CSS3';
		this.exampleUrl	= 'http://dork.local/adobe-demo/adapt/';
			
	},
	
	jQueryMobile: function() {
		
		this.subject 	= 'Dreamweaver jQuery Mobile integration';
		this.example	= 'Fun with jQuery Mobile';
		this.exampleUrl	= 'http://dork.local/adobe-demo/jqm/';
		
	},
	
	outro: function() {
		return Adam.summary;	
	}
	
	
}
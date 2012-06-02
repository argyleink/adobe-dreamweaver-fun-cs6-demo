var Adam 	= Human || Dork || {};
var Ratio 	= DigitalAgency || Nerds || {};


var speech = {
	
	intro: function() {
		
		return Adam.bio + Ratio.bio;	
		
	},
	
	
	overview: function() {
		
		this.plan 		= 'Explore mobile, tablet, and web app development with Dreamweaver.',
		this.tools 		= 'Shadow, Live Reload, Adaptive Layouts, Media Queries, jQuery, CSS3'
		
	},
	
	
	mobile: function() {
		
		this.subject 	= 'Mobile Development',
		this.example	= 'Ratio Clear',
		this.exampleUrl = 'http://clear-ratio.herokuapp.com/',
		this.coolness	= 'having the chrome dev tools available to develop and debug your mobile applications!'
		
	},
	
	
	css3: function() {
		
		this.subject 	= 'Dreamweaver CSS3 integration',
		this.example	= 'Fun with CSS3',
		this.exampleUrl	= 'http://dork.local/adobe-demo/css3/' // gotta be on the wifi here
			
	},
	
	adapt: function() {
		
		this.subject 	= 'Dreamweaver Media Query integration',
		this.example	= 'Fun with CSS3',
		this.exampleUrl	= 'http://dork.local/adobe-demo/adapt/'
			
	},
	
	outro: function() {
		return Adam.summary;	
	}
	
	
}
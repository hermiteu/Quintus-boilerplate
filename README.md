Quintus boilerplate
===================

Quintus boilerplate template based on Yeoman's web app template. Comes with HTML5 Boilerplate, Sass & Susy, compass sprites, LiveReload, optional Coffeescript.

Getting started
---------------

You need Node & Grunt. Use Bower to update or add components.

Steps:

		git clone https://github.com/hermiteu/Quintus-boilerplate.git the_name_of_the_game
		cd the_name_of_the_game
		npm install
		bower update #optional, you need Bower
		mate . #if you use TextMate
		grunt server #the game will open in your favourite browser and grunt is watching for changes

This is a working prototype, it has only been tested on OS X Mountain Lion. Please submit your reports if there are problems on other OS'es.

To use Compass you need to install the Ruby gem.

Deployment
----------

Run:

		grunt
		
There you go! Your game has been built to *dist/* with concatenated and compressed assets.

Todo
----

* Install https://github.com/cykod/Spriter locally
* Switch to Stylus/Nib or Sass/Bourbon to remove Ruby/Compass dependency and gain speed
* Install/update Quintus as a Bower component
* Improve documentation
* turn into Yeoman generator when Yeoman gets out of beta
* look into responsive/scaling canvas
* automatic favicon generation in different sizes

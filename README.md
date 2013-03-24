Quintus boilerplate
===================

Quintus boilerplate template based on Yeoman's web app template. Comes with HTML5 Boilerplate, Sass & Susy, compass sprites, LiveReload, optional Coffeescript.

Getting started
---------------

You need Node & NPM. 

Optionally use Bower to update or add components. To install Bower:

    npm install -g bower

Steps:

		git clone https://github.com/hermiteu/Quintus-boilerplate.git the_name_of_the_game
		cd the_name_of_the_game
		npm install
		bower update #optional, you need Bower
		sh update_quintus.sh #download Quintus manually, until it is a Bower component
		mate . #if you use TextMate
		grunt server #the game will open in your favourite browser and grunt is watching for changes

This is a working prototype, it has only been tested on OS X Mountain Lion. Please submit your reports if there are problems on other OS'es.

To use Compass you need to install the Ruby gem. Just remove the .sass files and create main.css to use plain CSS.

Deployment
----------

Run:

		grunt
		
There you go! Your game has been built to *dist/* with concatenated and compressed assets.

Todo
----

* Install https://github.com/cykod/Spriter locally
* Switch to Stylus/Nib or libsass/Bourbon/Neat to remove Ruby/Compass dependency and gain speed
* Install/update Quintus as a Bower component
* Improve documentation
* turn into Yeoman generator when Yeoman gets out of beta
* look into responsive/scaling canvas
* automatic favicon generation in different sizes
* handlebar templates / partials / when grunt-handlebars-static becomes stable

Quintus boilerplate
===================

Quintus boilerplate template based on Yeoman's web app template. Comes with HTML5 Boilerplate, Sass & Susy, compass sprites, LiveReload, optional Coffeescript.

Getting started
---------------
 
You need Node & NPM. 

Install Bower globally if it's not installed:

	npm install -g bower

Compass and Susy need to be installed, this dependency will be removed later.

	gem install compass susy

Steps:

	git clone https://github.com/hermiteu/Quintus-boilerplate.git the_name_of_the_game
	cd the_name_of_the_game
	npm install && bower install
	mate . #if you use TextMate
	grunt server #the game will open in your favourite browser and grunt is watching for changes

This was tested on OS X Mountain Lion. Please let me know if there are problems on other OS'es.

To use Compass you need to install the Ruby gem. Just remove the .sass files and create main.css to use plain CSS.

Deployment
----------

Run:

	grunt

There you go! Your game has been built to *dist/* with concatenated and compressed assets.

Updating components
----------

Updating Quintus and other components:

	bower update

Todo
----

* Install https://github.com/cykod/Spriter locally
* Improve documentation
* turn into Yeoman generator when Yeoman gets out of beta
* add mobile.jade template based upon H5 Mobile Boilerplate
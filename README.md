Quintus boilerplate
===================

Quintus boilerplate template based on Yeoman's web app template. Comes with HTML5 Boilerplate and these things (all optional):

+ Sass & Susy
+ Jade
+ Compass sprites
+ LiveReload
+ Coffeescript

This is what the Yeoman Quintus Generator will generate. The generator isn't finished yet. See Notes at the bottom.


Getting started
---------------
 
You need Node & Ruby. 

Install Bower and Grunt globally:

	(sudo) npm install -g grunt-cli bower

Compass and Susy need to be installed, this dependency will be removed later.

	(sudo) gem install compass susy

Steps:
```
git clone https://github.com/hermiteu/Quintus-boilerplate.git the_name_of_the_game
cd the_name_of_the_game
npm install && bower install
subl .
```
```
grunt server
```
opens the desktop version in your browser for development, open /mobile.html in a mobile emulator to work on the mobile version. LiveReload works in both.

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

Notes
-----

Until this is a Yeoman generator, some things need to be done manually.

Change the app name in package.json and add the private tag:
```
	"name": "the name of the game",
	"private": "true"
```

Edit component.json and see if you need Zepto and/or Underscore.

Init as a new Git repo:
```
rm -Rf .git/ && git init && git add . && git commit -m 'first commit'
```

If you don't want to use Jade don't edit the files in app/jade because the changes will be written to the HTML files with the same name.

Todo
----

* Install https://github.com/cykod/Spriter locally
* Improve documentation
* turn into Yeoman generator when Yeoman gets out of beta
pp-getset
=========

A decent place to start for web projects using Bower and Grunt.

## Getting Started

### Tech Pre-requisites

* [PHP](http://patternlab.io/docs/requirements.html)
* [Node](http://nodejs.org)
* [NPM](http://npmjs.org)
* [Grunt](http://gruntjs.com)
* [Bower](http://bower.io)
* [Sass](http://sass-lang.com)

### Installation

* Fork this repo.
* Clone the forked repo to your local machine.
* `cd` into the directory of your cloned repo.
* Run `npm install -g grunt-cli bower` to globally install Grunt and Bower.
* Run `bower install` to install Bower dependencies in the `bower_components` folder.
* Run `npm install` to install Grunt dependencies in the `node_modules` folder.
* Run `grunt` to generate all the necessary files.
* Run `grunt dev` to start watching for file changes and run a local web server on port 9001 `http://localhost:9001`
* _(Optional but recommended)_ Install [LiveReload](http://livereload.com) and the [browser extension](http://go.livereload.com/extensions) to see your changes applied live.
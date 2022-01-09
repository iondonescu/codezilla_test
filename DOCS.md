1. Install [Node.js](http://nodejs.org/download), [Sass](http://sass-lang.com/tutorial.html) on your machine. If you're a Windows user you'll also need to install [Ruby](http://rubyinstaller.org/downloads).
2. [Install Gulp](http://Gulpjs.com/) using `npm install -g gulp`. You may need to use `sudo` in front of the Gulp install command to give it permissions.
3. The `npm install` you did in previous step should install all the dependencies, which you can confirm by visiting the `node_modules` in your project directory. Then use `gulp` (again in your project directory).
4. From now on, just run `gulp` in your project directory to automatically run tasks.


1. Mounts the `app` folder onto a local server
2. Listens for changes inside the `src` directory, and compiles the necessary files into the `app` directory, which will then automaticaly livereload or inject changes. CSS changes are injected, all other changes force a page reload.


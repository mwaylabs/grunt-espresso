# grunt-espresso

> Use [Espresso](https://github.com/mwaylabs/Espresso) in your Continuous Integration Environment.



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-espresso --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-espresso');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-copy/tree/grunt-0.3-stable).*



## Build task
_Run this task with the `grunt espresso` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
### Options

#### pathToApp
Type: `String`

Path to the project folder which contains the `config.json` file.

### Usage Examples

```js
espresso: {
  options: {
    pathToApp: 'myApp/'
  }
}
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mwaylabs/grunt-espresso/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


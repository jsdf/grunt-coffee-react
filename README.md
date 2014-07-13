# grunt-contrib-coffee-react 
Compile [coffee-react-transform](https://github.com/jsdf/coffee-react-transform) CJSX files to JavaScript.

## Getting Started
This plugin requires Grunt `~0.4.0`

**note**

```shell
npm install grunt-contrib-coffee-react --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-coffee-react');
```

## 'cjsx' task
_Run this task with the `grunt cjsx` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
### Options

#### separator
Type: `String`
Default: linefeed

Concatenated files will be joined on this string.

#### bare
Type: `boolean`

Compile the JavaScript without the top-level function safety wrapper.

#### join
Type: `boolean`
Default: `false`

When compiling multiple CJSX files into a single .js file, concatenate first.

#### sourceMap
Type: `boolean`
Default: `false`

Compile JavaScript and create a .map file linking it to the CJSX source. When compiling multiple .coffee files to a single .js file, concatenation occurs as though the 'join' option is enabled

#### sourceMapDir
Type: `String`
Default: (same path as your compiled js files)

Generated source map files will be created here.

#### joinExt
Type: `String`
Default: '.src.coffee'

Resulting extension when joining multiple CJSX files.

### Usage Examples

```js
cjsx: {
  compile: {
    files: {
      'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.cjsx', 'path/to/more/*.coffee'] // compile and concat into single file
    }
  },

  compileBare: {
    options: {
      bare: true
    },
    files: {
      'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.cjsx', 'path/to/more/*.coffee'] // compile and concat into single file
    }
  },

  compileJoined: {
    options: {
      join: true
    },
    files: {
      'path/to/result.js': 'path/to/source.coffee', // 1:1 compile, identical output to join = false
      'path/to/another.js': ['path/to/sources/*.cjsx', 'path/to/more/*.coffee'] // concat then compile into single file
    }
  },

  compileWithMaps: {
    options: {
      sourceMap: true
    },
    files: {
      'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.cjsx', 'path/to/more/*.coffee'] // concat then compile into single file
    }
  },

  compileWithMapsDir: {
    options: {
      sourceMap: true,
      sourceMapDir: 'path/to/maps/' // source map files will be created here
    },
    files: {
      'path/to/result.js': 'path/to/source.coffee'
    }
  },

  glob_to_multiple: {
    expand: true,
    flatten: true,
    cwd: 'path/to',
    src: ['*.coffee'],
    dest: 'path/to/dest/',
    ext: '.js'
  }

}
```

For more examples on how to use the `expand` API to manipulate the default dynamic path construction in the `glob_to_multiple` examples, see "[Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)" in the grunt wiki entry [Configuring Tasks](http://gruntjs.com/configuring-tasks).


'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Get some typescript stuff up and running.
    grunt.loadNpmTasks('grunt-ts');

    // Define the configuration for all the tasks
    grunt.initConfig({

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: './app/server.js'
                }
            },
            prod: {
                options: {
                    script: './app/server.js',
                    node_env: 'production'
                }
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        },

    	ts: {
            base: {
                src: [
                    'src/GoodByeHelloWorld/Scripts/**/*.ts',
                    '!src/GoodByeHelloWorld/Scripts/**/*.d.ts'],
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'src/GoodByeHelloWorld/Scripts',
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });


    /*
     * ALL MY AWESOME GRUNT TASKS!
     * ----------------------------------------------------------------------------------------------------
     */

    grunt.registerTask('serve', [
        'express:prod'
    ]);

    grunt.registerTask('test', [
        'karma'
    ]);

    grunt.registerTask('build', [
	'ts'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};

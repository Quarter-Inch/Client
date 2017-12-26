module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            app: {
                files: [
                    { 'src/js/react/AppEntry.js': 'src/js/react/jsx/AppEntry.jsx' },
                ]
            }
        },
        browserify: {
            app: {
                files: {
                    'dist/js/QuaterInch-Client.js': ['src/js/react/AppEntry.js']
                }
            }
        },
        less:{
            dist: {
                options: {
                    compress: false
                },
                files: [
                    {"dist/css/style.css": "src/css/less/style.less"},
                ]
            }
        },
    });

    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('_Dev', ['babel', 'browserify:app', 'less:dist']);
};
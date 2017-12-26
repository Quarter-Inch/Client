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
                    { 'src/js/react/HeaderToolbar.js': 'src/js/react/jsx/HeaderToolbar.jsx' },
                    { 'src/js/react/Drawer.js': 'src/js/react/jsx/Drawer.jsx' },
                    { 'src/js/react/LayoutGrid.js': 'src/js/react/jsx/LayoutGrid.jsx' },
                    { 'src/js/react/LayoutGridCell.js': 'src/js/react/jsx/LayoutGridCell.jsx' },
                    { 'src/js/react/Card.js': 'src/js/react/jsx/Card.jsx' },
                    { 'src/js/react/TextField.js': 'src/js/react/jsx/TextField.jsx' },
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
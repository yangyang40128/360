module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		less: {
			front: {
				options: {
					yuicompress:false
				},
				files: {
					"public/asset/css/main-<%= pkg.version %>.css":[
						"css/main.less"
					]
				}
			}
		},
		uglify: {
			release: {
				files : {
					"public/asset/js/main-min.js":[
						"bower_components/jquery/dist/jquery.min.js",
						"bower_components/bootstrap/dist/bootstrap.min.js",
						"js/*.js"
					]
				}
			}
		},
		watch: {
			css : {
				files: ["css/*.less"],
				tasks: ["less"]
			},
			js : {
				files: ["js/*.js"],
				tasks: ["uglify"]
			}
		},
		connect: {
			yng: {
				options: {
					hostname: 'localhost',
					port: "8080",
					base: ["."]
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-connect");

	grunt.registerTask("default",["less","uglify"]);
	grunt.registerTask("dev",["default","watch"]);
	grunt.registerTask("site",["connect:yng:keepalive"]);

}
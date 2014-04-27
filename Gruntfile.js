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
			},
			staticPage: {
				options: {
					yuicompress:false
				},
				files: {
					"../workspace/LaiZheDai/WebContent/static/public/asset/css/main-<%= pkg.version %>.css":[
						"css/main.less"
					]
				}
			}
		},
		concat: {
			devJs: {
				files : {
					"public/asset/js/main-dev.js": [
						"bower_components/jquery/dist/jquery.js",
						"bower_components/bootstrap/js/tab.js",
						"bower_components/bootstrap/js/dropdown.js",
						"bower_components/bootstrap/js/transition.js",
						"bower_components/bootstrap/js/collapse.js",
						"bower_components/bootstrap/js/modal.js",
						"js/*.js"
					]
				}
			},
			staticJs: {
				files : {
					"../workspace/LaiZheDai/WebContent/static/public/asset/js/main-dev.js": [
						"bower_components/jquery/dist/jquery.js",
						"bower_components/bootstrap/js/tab.js",
						"bower_components/bootstrap/js/dropdown.js",
						"bower_components/bootstrap/js/transition.js",
						"bower_components/bootstrap/js/collapse.js",
						"bower_components/bootstrap/js/modal.js",
						"js/*.js"
					]
				}
			}
		},
		uglify: {
			release: {
				files : {
					"public/asset/js/main-min.js":[
						"public/asset/js/main-dev.js"
					]
				}
			},
			staticRelease: {
				files : {
					"../workspace/LaiZheDai/WebContent/static/public/asset/js/main-min.js":[
						"public/asset/js/main-dev.js"
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
				files: ["js/*.js","bower_components/bootstrap/js/*.js"],
				tasks: ["concat","uglify"]
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

	grunt.registerTask("default",["less","concat","uglify"]);
	grunt.registerTask("dev",["default","watch"]);
	grunt.registerTask("site",["connect:yng:keepalive"]);

}
'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var MurakamiGenerator = yeoman.generators.Base.extend({
	initializing: function() {
		this.pkg = require('../package.json');
	},

	prompting: function() {
		var done = this.async();

		var welcome = [
			' __  __                            _                        _    ',
			'|  \\/  |  _  _      _ _   __ _    | |__   __ _    _ __     (_)   ',
			'| |\\/| | | +| |    | \'_| / _` |   | / /  / _` |  | \'  \\    | |   ',
			'|_|__|_|  \\_,_|   _|_|_  \\__,_|   |_\\_\\  \\__,_|  |_|_|_|  _|_|_  ',
			'_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| ',
			'\"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\' '
		];

		// Welcome!
		this.log(chalk.magenta(welcome.join('\n')));

		var prompts = [
			{
				name: 'area',
				message: 'What area?'
			}
		];

		this.prompt(prompts, function(props) {
			this.someOption = props.someOption;
			this.area = props.area;

			done();
		}.bind(this));
	},

	writing: {
		assets: function() {
			this.dest.mkdir('assets');
			this.directory('assets', 'assets');
			this.src.copy('_package.json', 'package.json');
		},

		projectfiles: function() {
			this.src.copy('editorconfig', '.editorconfig');
			this.src.copy('jshintrc', '.jshintrc');
		},

		gruntfile: function() {
			this.src.copy('Gruntfile.coffee', 'Gruntfile.coffee');
		}
	},

	end: function () {
		this.installDependencies();
	}
});


module.exports = MurakamiGenerator;

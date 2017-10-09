"use strict";

var outputDiv = $('#dinosaurs');

var domString = function(dinosaur) {
	var domStrang = '';
      domStrang += `<div>`;
      domStrang +=   `<h1>${dinosaur.name}</h1>`;
      domStrang += `</div>`;
	printToDom(domStrang);
};


var printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;
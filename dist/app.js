(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var dom = require('./dom');

var dinosaurs = [];

const firstDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/dinosaurs.json').done((data1) => {
			resolve(data1.dinosaurs1);
		}).fail((error1) => {
			reject(error1);
		});
	});
};

const secondDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/dinosaurs2.json').done((data2) => {
			resolve(data2.dinosaurs2);
		}).fail((error2) => {
			reject(error2);
		});
	});
};

const thirdDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/dinosaurs3.json').done((data3) => {
			resolve(data3.dinosaurs3);
		}).fail((error3) => {
			reject(error3);
		});
	});
};

const dinoGetter = () => {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then((results) => {
		console.log("results from promise.all", results);
		results.forEach((result) => {
			result.forEach((dino) => {
				dinosaurs.push(dino);
			});
		});
		makeDinos();
	}).catch((error) => {
		console.log("error from Promise.all", error);
	});
};

const makeDinos = () => {
	dinosaurs.forEach((dino) => {
		dom(dino);
	});
};

const initializer = () => {
	dinoGetter();	
};

const getDinosaurs = () => {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

const outputDiv = $('#dinosaurs');

const domString = (dinosaur) => {
	let domStrang = '';
      domStrang += `<div>`;
      domStrang +=   `<h1>${dinosaur.type}</h1>`;
      domStrang += `</div>`;
	printToDom(domStrang);
};


const printToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

$(document).ready(() => {
	data.initializer();
});
},{"./data":1}]},{},[3]);

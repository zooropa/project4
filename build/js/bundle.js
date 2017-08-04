(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url + '?apiKey=' + obj.api + '&format=json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function () {
            return reject(xhr.statusText);
        };
        xhr.send(obj.body);
    });
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bestbuy = require("./bestbuy");

var _bestbuy2 = _interopRequireDefault(_bestbuy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		var _this = this;

		_classCallCheck(this, App);

		this.initBBCall();
		$("#laptop").on("click", function () {
			_this.initBBCall("(categoryPath.id=abcat0502000)");
			//
		});
		$("#cellphone").on("click", function () {
			_this.initBBCall("(categoryPath.id=pcmcat209400050001)");
			//(categoryPath.id=pcmcat209400050001)
		});
		$("#television").on("click", function () {
			_this.initBBCall("(categoryPath.id=abcat0101000)");
			//(categoryPath.id=abcat0101000)
		});
		$("#headphone").on("click", function () {
			_this.initBBCall("(categoryPath.id=abcat0204000)");
			//(categoryPath.id=abcat0204000)
		});
	}

	_createClass(App, [{
		key: "initBBCall",
		value: function initBBCall(categoryPath) {

			console.log(categoryPath);

			var urlNew = "https://api.bestbuy.com/v1/products(" + categoryPath + ")";

			(0, _bestbuy2.default)({ url: urlNew, api: "8ccddf4rtjz5k5btqam84qak" }).then(function (data) {

				console.log(data);

				$("#productcontainer")["0"].innerHTML = "";

				var product_counter = 0;
				for (var i = 0; i < data.products.length && product_counter < 4; i++) {

					if (data.products[i].largeImage) {

						var style = " style='background-image: url(" + data.products[i].largeImage + ")'";
						var name = data.products[i].name;
						var salePrice = data.products[i].salePrice;

						$("#productcontainer")["0"].innerHTML += "<div class='pic'" + style + "><div>" + name + salePrice + "</div></div>";
						product_counter++;
					}
				}
			}).catch(function (error) {
				console.log("warning Christopher Robins... Error");
				console.log(error);
			});
		}
	}]);

	return App;
}();

exports.default = App;


var x = new App();

},{"./bestbuy":1}]},{},[2]);

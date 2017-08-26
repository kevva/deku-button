'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _magicVirtualElement = require('magic-virtual-element');

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @jsx dom */


var render = function render(_ref) {
	var props = _ref.props;

	var className = props.class,
	    attributes = _objectWithoutProperties(props, ['class']);

	return (0, _magicVirtualElement2.default)('button', _extends({ 'class': ['Button', className] }, attributes));
};

exports.default = { render: render };

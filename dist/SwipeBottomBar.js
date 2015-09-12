'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLayoutHelpers = require('react-layout-helpers');

var SwipeBottomBar = _react2['default'].createClass({
  displayName: 'SwipeBottomBar',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      visible: true
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var arr = [];
    for (var i = 0; i < this.props.total; ++i) {
      arr.push(_react2['default'].createElement('span', { className: (0, _classnames2['default'])({
          "circle": true,
          "active": this.props.active == i ? true : false
        }),
        key: "circle" + i }));
    }
    var layoutClasses = (0, _classnames2['default'])({
      "swipe-bottom-bar": true,
      "transparent": !this.props.visible
    });
    return _react2['default'].createElement(
      _reactLayoutHelpers.FlexLayout,
      { horizontal: true, primary: 'center', secondary: 'center', className: layoutClasses },
      _react2['default'].createElement(
        'div',
        null,
        arr
      )
    );
  }
});

exports['default'] = SwipeBottomBar;
module.exports = exports['default'];
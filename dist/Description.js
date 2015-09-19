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

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var SimpleDescription = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      format: "center"
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2['default'].createElement(
      _reactLayoutHelpers.FlexLayout,
      { width: '100%', height: this.props.height, vertical: true, primary: 'center', secondary: 'center', className: 'jeemix-description', style: { paddingBottom: "20px" } },
      this.props.title ? _react2['default'].createElement(
        'h2',
        { style: { marginBottom: "60px" }, className: 'mdl-typography--display-2 jeemix-description--title jeemix-description--center' },
        this.props.title
      ) : undefined,
      _react2['default'].createElement(
        'p',
        { style: { fontSize: "18px", lineHeight: "30px", textAlign: this.props.format, maxWidth: "80%" }, className: 'mdl-typography--body-1' },
        this.props.children
      )
    );
  }
}));

var CenterFormatedDescription = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      format: "center"
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2['default'].createElement(
      _reactLayoutHelpers.FlexLayout,
      { width: '100%', vertical: true, primary: 'center', secondary: 'center', className: 'jeemix-description', background: this.props.background },
      _react2['default'].createElement(
        'h2',
        { style: { marginBottom: "60px", color: this.props["title-color"] }, className: 'mdl-typography--display-2 jeemix-description--title jeemix-description--center' },
        this.props.title
      ),
      _react2['default'].createElement(
        _reactLayoutHelpers.FlexLayout,
        { wrap: true, horizontal: true, primary: 'space-around', secondary: 'center' },
        _react2['default'].createElement('img', { src: this.props.img, style: this.props["img-style"], className: 'jeemix-description--image' }),
        _react2['default'].createElement(
          _reactLayoutHelpers.FlexLayout,
          { primary: 'center', secondary: 'center', vertical: true, className: 'jeemix-description--description jeemix-description--center' },
          _react2['default'].createElement(
            'p',
            { style: { fontSize: "18px", lineHeight: "30px", color: this.props["text-color"] }, className: 'mdl-typography--body-1' },
            this.props.children
          )
        )
      )
    );
  }
}));

var LeftFormatedDescription = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      format: "center"
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2['default'].createElement(
      _reactLayoutHelpers.FlexLayout,
      { width: '100%', horizontal: true, primary: 'space-around', secondary: 'center', className: 'jeemix-description', wrap: true, background: this.props.background },
      _react2['default'].createElement(
        _reactLayoutHelpers.FlexLayout,
        { vertical: true, primary: 'center',
          className: (0, _classnames2['default'])({
            "jeemix-description--description": true,
            "jeemix-description--left": true
          }) },
        _react2['default'].createElement(
          'h2',
          { className: (0, _classnames2['default'])({
              "mdl-typography--display-2": true,
              "jeemix-description--title": true,
              "jeemix-description--left": true
            }), style: { color: this.props["title-color"] } },
          this.props.title
        ),
        _react2['default'].createElement(
          _reactLayoutHelpers.FlexLayout,
          { primary: 'center', secondary: 'center', vertical: true },
          _react2['default'].createElement(
            'p',
            { style: { fontSize: "18px", lineHeight: "30px", color: this.props["text-color"] }, className: 'mdl-typography--body-1' },
            this.props.children
          )
        )
      ),
      _react2['default'].createElement('img', { src: this.props.img, className: 'jeemix-description--image', style: [this.props["img-style"], { "@media screen and (min-width: 1001px)": { transform: "translateY(" + this.props["img-offset"] + ")" } }] })
    );
  }
}));

var RightFormatedDescription = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      format: "center"
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    return _react2['default'].createElement(
      _reactLayoutHelpers.FlexLayout,
      { width: '100%', horizontal: true, primary: 'space-around', secondary: 'center', className: 'jeemix-description', 'wrap-reverse': true, background: this.props.background },
      _react2['default'].createElement('img', { src: this.props.img, style: this.props["img-style"], className: 'jeemix-description--image' }),
      _react2['default'].createElement(
        _reactLayoutHelpers.FlexLayout,
        { vertical: true, primary: 'center',
          className: (0, _classnames2['default'])({
            "jeemix-description--description": true,
            "jeemix-description--right": true
          }) },
        _react2['default'].createElement(
          'h2',
          { className: (0, _classnames2['default'])({
              "mdl-typography--display-2": true,
              "jeemix-description--title": true,
              "jeemix-description--right": true
            }), style: { color: this.props["title-color"] } },
          this.props.title
        ),
        _react2['default'].createElement(
          _reactLayoutHelpers.FlexLayout,
          { primary: 'center', secondary: 'center', vertical: true },
          _react2['default'].createElement(
            'p',
            { style: [{ fontSize: "18px", lineHeight: "30px", color: this.props["text-color"] }, { "@media screen and (min-width: 1001px)": { transform: "translateY(" + this.props["img-offset"] + ")" } }], className: 'mdl-typography--body-1' },
            this.props.children
          )
        )
      )
    );
  }
}));

var Description = (0, _radium2['default'])(_react2['default'].createClass({
  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      format: "center"
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    if (this.props.format == "center" && this.props.img && this.props.title) return _react2['default'].createElement(CenterFormatedDescription, this.props);else if (this.props.format == "left" && this.props.img && this.props.title) return _react2['default'].createElement(LeftFormatedDescription, this.props);else if (this.props.format == "right" && this.props.img && this.props.title) return _react2['default'].createElement(RightFormatedDescription, this.props);else return _react2['default'].createElement(SimpleDescription, this.props);
  }
}));

exports['default'] = Description;
module.exports = exports['default'];
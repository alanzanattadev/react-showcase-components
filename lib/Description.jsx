import React from 'react';
import classNames from 'classnames';
import {FlexLayout} from 'react-layout-helpers';
import Radium from 'radium';

var SimpleDescription = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      format: "center"
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <FlexLayout width="100%" height={this.props.height} vertical primary="center" secondary="center" className="jeemix-description">
        {this.props.title ? <h2 style={{marginBottom: "60px"}} className="mdl-typography--display-2 jeemix-description--title jeemix-description--center">{this.props.title}</h2> : undefined}
        <p style={{fontSize: "18px", lineHeight:"30px", textAlign: this.props.format, maxWidth: "80%"}} className="mdl-typography--body-1">{this.props.children}</p>
      </FlexLayout>
    );
  }
}));

var CenterFormatedDescription = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      format: "center"
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <FlexLayout width="100%" vertical primary="center" secondary="center" className="jeemix-description" background={this.props.background}>
        <h2 style={{marginBottom: "60px", color: this.props["title-color"]}} className="mdl-typography--display-2 jeemix-description--title jeemix-description--center">{this.props.title}</h2>
        <FlexLayout wrap horizontal primary="space-around" secondary="center">
          <img src={this.props.img} style={this.props["img-style"]} className="jeemix-description--image"/>
          <FlexLayout primary="center" secondary="center" vertical className="jeemix-description--description jeemix-description--center">
            <p style={{fontSize: "18px", lineHeight: "30px", color: this.props["text-color"]}} className="mdl-typography--body-1">{this.props.children}</p>
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    );
  }
}));

var LeftFormatedDescription = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      format: "center"
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <FlexLayout width="100%" horizontal primary="space-around" secondary="center" className="jeemix-description" wrap background={this.props.background}>
        <FlexLayout vertical primary="center"
                    className={
                      classNames({
                        "jeemix-description--description": true,
                        "jeemix-description--left": true
                      })}>
          <h2 className={classNames({
            "mdl-typography--display-2": true,
            "jeemix-description--title": true,
            "jeemix-description--left": true
          })} style={{color: this.props["title-color"]}}>{this.props.title}</h2>
          <FlexLayout primary="center" secondary="center" vertical>
            <p style={{fontSize: "18px", lineHeight: "30px", color: this.props["text-color"]}} className="mdl-typography--body-1">{this.props.children}</p>
          </FlexLayout>
        </FlexLayout>
        <img src={this.props.img} className="jeemix-description--image" style={[this.props["img-style"], {"@media screen and (min-width: 1001px)": {transform: "translateY(" + this.props["img-offset"] + ")"}}]}/>
      </FlexLayout>
    );
  }
}));

var RightFormatedDescription = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      format: "center"
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <FlexLayout width="100%" horizontal primary="space-around" secondary="center" className="jeemix-description" wrap-reverse background={this.props.background}>
        <img src={this.props.img} style={this.props["img-style"]} className="jeemix-description--image"/>
        <FlexLayout vertical primary="center"
                    className={
                      classNames({
                        "jeemix-description--description": true,
                        "jeemix-description--right": true
                      })}>
          <h2 className={classNames({
            "mdl-typography--display-2": true,
            "jeemix-description--title": true,
            "jeemix-description--right": true
          })} style={{color: this.props["title-color"]}}>{this.props.title}</h2>
          <FlexLayout primary="center" secondary="center" vertical>
            <p style={[{fontSize: "18px", lineHeight: "30px", color: this.props["text-color"]}, {"@media screen and (min-width: 1001px)": {transform: "translateY(" + this.props["img-offset"] + ")"}}]} className="mdl-typography--body-1">{this.props.children}</p>
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    );
  }
}));

var Description = Radium(React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      format: "center"
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    if (this.props.format == "center" && this.props.img && this.props.title)
      return (<CenterFormatedDescription {...this.props}/>);
    else if (this.props.format == "left" && this.props.img && this.props.title)
      return (<LeftFormatedDescription {...this.props}/>);
    else if (this.props.format == "right" && this.props.img && this.props.title)
      return (<RightFormatedDescription {...this.props}/>);
    else
      return (<SimpleDescription {...this.props}/>);
  }
}));

export default Description;

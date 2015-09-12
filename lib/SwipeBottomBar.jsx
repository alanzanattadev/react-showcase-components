import React from 'react';
import classNames from 'classnames';

import {FlexLayout} from 'react-layout-helpers';

var SwipeBottomBar = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      visible: true
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    var arr = [];
    for (var i = 0; i < this.props.total; ++i) {
      arr.push(
        <span className={classNames({
          "circle": true,
          "active": this.props.active == i ? true : false
        })}
        key={"circle" + i}/>
      );
    }
    var layoutClasses = classNames({
      "swipe-bottom-bar": true,
      "transparent": !this.props.visible
    })
    return (
      <FlexLayout horizontal primary="center" secondary="center" className={layoutClasses}>
        <div>
          {arr}
        </div>
      </FlexLayout>
    );
  }
});

export default SwipeBottomBar;

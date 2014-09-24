(function() {
  var Car;

  Car = React.createClass({
    render: function() {
      var _ref;
      return React.createElement(Vehicle, {
        "doors": 4.,
        "locked": isLocked(),
        "data-colour": "red",
        "on": true
      }, React.createElement(Parts.FrontSeat, null), React.createElement(Parts.BackSeat, null), React.createElement(React.DOM.p, {
        "className": "kickin"
      }, "Which seat can I take? ", ((_ref = this.props) != null ? _ref.seat : void 0) || 'none'));
    }
  });

}).call(this);

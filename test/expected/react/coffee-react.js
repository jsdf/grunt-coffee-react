(function() {
  /** @jsx React.DOM */;
  var Car;

  Car = React.createClass({displayName: "Car",
    render: function() {
      var ref;
      return React.createElement(Vehicle, {
        "doors": 4.,
        "locked": isLocked(),
        "data-colour": "red",
        "on": true
      }, React.createElement(Parts.FrontSeat, null), React.createElement(Parts.BackSeat, null), React.createElement("p", {
        "className": "kickin"
      }, "Which seat can I take? ", ((ref = this.props) != null ? ref.seat : void 0) || 'none'));
    }
  });

}).call(this);

(function() {
  var Car;

  Car = React.createClass({
    render: function() {
      var _ref;
      return Vehicle({
        "doors": 4.,
        "locked": isLocked(),
        "data-colour": "red",
        "on": true
      }, Parts.FrontSeat(null), Parts.BackSeat(null), React.DOM.p({
        "className": "kickin"
      }, "Which seat can I take? ", ((_ref = this.props) != null ? _ref.seat : void 0) || 'none'));
    }
  });

}).call(this);

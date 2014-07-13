# @cjsx React.DOM
Car = React.createClass
  render: ->
    <Vehicle doors={4} locked={isLocked()}  data-colour="red" on>
      <Parts.FrontSeat />
      <Parts.BackSeat />
      <p className="kickin">Which seat can I take? {@props?.seat or 'none'}</p>
    </Vehicle>

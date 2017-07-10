var AppointmentsList = React.createClass({
  render: function() {
    return (
      <div className="container">
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment appointment={appointment} key={appointment.id}/>
          )
        })}
      </div>
    )
  }
});

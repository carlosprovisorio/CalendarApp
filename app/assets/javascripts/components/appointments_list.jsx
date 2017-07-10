class AppointmentsList extends React.Component {
  render () {
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
}

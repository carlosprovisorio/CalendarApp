const AppointmentsList = ({appointments}) => 
  <div className="container">
    {appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment} key={appointment.id}/>
      )
    })}
  </div>

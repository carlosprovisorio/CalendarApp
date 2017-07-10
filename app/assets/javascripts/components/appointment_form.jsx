class AppointmentForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  setAppTime (e) {
    const name = 'appt_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render (){
    const inputProps = {
      name: 'apt_time'
    }

    return (
      <div className='container'>
        <h1>Carlos Calendar - built with React-Rails</h1>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit.bind(this)} className='form'>
          <input
            name='title'
            placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange.bind(this)}
            className='inputField'
          />
          <Datetime 
            input={false}
            open={true}
            inputProps={inputProps}
            value={this.props.appt_time}
            onChange={this.setAppTime.bind(this)}
          />
          <input
            type='submit'
            value='Make appointment'
            className='submit-button'
          />
        </form>
      </div>
    )
  }
}

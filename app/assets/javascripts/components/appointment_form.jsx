var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  setAppTime: function(e) {
    var name = 'appt_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function(){
    var inputProps = {
      name: 'apt_time'
    };

    return (
      <div className='container'>
        <h1>Carlos Calendar - built with React-Rails</h1>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            name='title'
            placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange}
            className='inputField'
          />
          <Datetime 
            input={false}
            open={true}
            inputProps={inputProps}
            value={this.props.appt_time}
            onChange={this.setAppTime}
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
});

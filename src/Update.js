import React, { Component } from 'react'

class Update extends Component {
	handleChange = (e) => {
  this.setState({inputValue: e.target.value});
}

render(){

	return (
		
		<div className='create-event-details'>
		<h3>Edit the event</h3>
		<form onSubmit={this.handlechange} value={this.state.inputValue} className='create-event-form' >
		<label className="labels">Event Title</label><input className="input-field" type="text" name="name" placeholder="Event Title" required /><br/>
		<label className="labels">Department</label><input className="input-field" type="text" name="department" placeholder="Department" required /><br/>
		<label className="labels">Time</label><input className="input-field" type="time" name="time" placeholder="Duration" min="0" max="60:00" required/><br/>
		<label className="labels">Date</label><input className="input-field" type="date" name="date" placeholder="Date" required/><br/>
		<label className="labels">Duration</label><input className="input-field" type="text" name="duration" placeholder="Duration" min="0" max="60:00" required/><br/>
		<label className="labels">Description</label><input className="input-field" type="text" name="description" placeholder="Description" /><br/>
		<button className="button">Schedule Event</button>
		</form>
		</div>
		
		
		)
}


}
export default Update


import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class NewEvent extends Component {
 
 handleSubmit = (e) => {
  	//preventDefault is telling the browser to stop adding the form content at the
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.createEvent) {
      this.props.createEvent(values)
    }
    alert('Event scheduled!')
    /*const p=document.createElement('p')
    p.classList.add('p-style')
    p.innerHTML='Event is scheduled!'
    document.body.appendChild(p)*/
    document.getElementById('myForm').reset()
  }

  
render(){

	return (
		<div>
		<Link
		className='close-create-event'
		to="/" >Back to Events </Link>
		 
		<div className='create-event-details'>
		<h3>Fill the form below to schedule the event</h3>
		<form id='myForm' onSubmit={this.handleSubmit} className='create-event-form'>
		<label className="labels">Event Title</label><input className="input-field" type="text" name="name" placeholder="Event Title" required /><br/>
		<label className="labels">Department</label><input className="input-field" type="text" name="department" placeholder="Department" required /><br/>
		<label className="labels">Room #</label><input className="input-field" type="text" name="room" placeholder="Room #" required /><br/>
		<label className="labels">Time</label><input className="input-field" type="time" name="time" placeholder="Time" min="0" max="60:00" required/><br/>
		<label className="labels">Date</label><input className="input-field" type="date" name="date" placeholder="Date" required/><br/>
		<label className="labels">Duration</label><input className="input-field" type="text" name="duration" placeholder="Duration" min="0" max="60:00" required/><br/>
		<label className="labels">Description</label><input className="input-field" type="text" name="description" placeholder="Description" /><br/>
		<button className="button">Schedule Event</button>
		</form>
		</div>
		</div>

		) 
	}


}
export default NewEvent
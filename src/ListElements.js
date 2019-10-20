import React, { Component } from 'react'
import details from './details.png'

class ListElements extends Component {

 genID = ()=> {
  return '_' + Math.random().toString(36).substr(2, 9);
}
handlechange=()=>{
	this.setState({
		events: this.state.events
	})

}

	render(){
		const detailed=(e, ev)=>{
			const newLine='\r\n';
			let msg="Event Details:"
			msg+=newLine +'Event Name: ' + ev.name + newLine+ 'Time: '+ev.time+newLine+'Description: '+ ev.description+newLine+'Room #: '+ev.room+newLine;
			alert (msg);
		}
		
			
		const { events}=this.props
		

		return (
			<table className='events-list'>
			<thead className='head-row'>
			<td className='table-col' >Name</td>
			<td className='table-col'>Department</td>
			<td className='table-col'>Time</td>
			<td className='table-col'></td>
			<td className='table-col'></td>
			</thead>
			{events.map((event) => (
			<tr key={this.genID} className={this.props.classMatcher()}>
		 	<td >{event.name}</td>
		 	<td> {event.department}</td>
		 	<td> {event.time}</td>
			<td className="icon"><img onClick={((e) =>detailed(e, event))} src={details} alt="view event details" /></td>
			</tr>
			))}
			</table>

		

			)
	}
}
export default ListElements
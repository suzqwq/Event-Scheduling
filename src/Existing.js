import React, { Component } from 'react'
import ListElements from './ListElements'
import { Link } from 'react-router-dom'

class Existing extends Component {
	state= {
		query:'',
		matchedBool: false
	}


	 matched=()=>{
		this.props.events.forEach((ev)=>{
			console.log(ev.name===this.state.query)
			if (ev.name===this.state.query){
				this.setState({
					matchedBool: true
				})
			}
			else {
				this.setState({
					matchedBool: false
				})
			}
		})
		}

	classMatcher = () => {
		if (this.state.matchedBool===true)
		{
	
			return 'marked';
		}
		
		}

	updateQuery =(query) => {
		this.setState(() => ({
			query: query.trim()
		}))
		this.matched()
}
	
	

	render(){
		


		return (
			<div className="home">
			<div className='container'>
			<h1>Welcome to Event Scheduling</h1>
			<Link
            to='/create'
            className='add-event-button'
          >Schedule New Event</Link>
			<div className='list-title-container'>

			<h2>Existing Events</h2>
			<input 
		className="search-events"
		type= "text"
		value= {this.state.query}
		placeholder= 'search-events'
		onChange ={ (event ) => this.updateQuery(event.target.value)} />

			</div>

			<ListElements 
			events={this.props.events}
			classMatcher={this.classMatcher.bind(this)} 
			/>
			
			
          </div>

			</div>
			)
	}
}
export default Existing
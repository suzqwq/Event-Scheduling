import React, { Component } from 'react'
import Existing from './Existing'
import NewEvent from './NewEvent'
import { Route } from 'react-router-dom'
import './App.css'


class App extends Component {
  state={
    events: [],
    mark: false
  }
  componentDidMount() {
    this.setState({
      events:this.state.events
    })
  }

 

  createEvent = (event) => {
        this.setState((currentState) => ({
          events: currentState.events.concat([event])
        }))
      }

/*   update = (ev) => { 
   this.setState((currentState) => ({
          events: currentState.events.filter((c)=>{
        return c.id !==ev.id
  
          })
        }))
   }*/
  
render(){
  return (
         <div>
      <Route exact path= '/' render={() => (
        < Existing 
        events={this.state.events}
        mark={this.state.mark}
        //update={this.update}
        />
        )}
      />
<Route path='/create' render={() => (
          <NewEvent
          createEvent={this.createEvent}
          />
        )} />
      </div>
  )
}
}

export default App;

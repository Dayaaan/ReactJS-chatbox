import React, { Component } from 'react';
import '../App.css';
import '../animation.css';
import Formulaire from './Formulaire';
import Message from './Message';
//Firebase
import base from '../base';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class App extends Component {

  state = {
    messages: {}
  };

  componentWillMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'messages'
    });
  };

  componentWillUpdate() {
    //mettre le scroll en bas
    this.messages.scrollTop = this.messages.scrollHeight;
  }
  addMessage = (message) => {
  	// 1 MAJ state
  	const messages = {...this.state.messages};
  	// 2 On ajoute le message avec une clé timestamp
  	const timestamp = Date.now();
  	messages[`message-${timestamp}`] = message;
  	// On ne garde que les 10 derniers messages
		Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
  	// 3 Set State
  	this.setState({ messages });
  }

  isUser = (pseudo) => {
    return pseudo === this.props.match.params.pseudo;
  }
  render() {
    const messages = Object
		  .keys(this.state.messages)
      .map(key => <Message key={key} details={this.state.messages[key]} 
        isUser={this.isUser}
      />);
      
    
    console.log(messages);  
    return (
        <div className="box">
          <div>
            <div className="messages" ref={input => this.messages = input}>
              <CSSTransitionGroup
                component="div"
                className="message"
                transitionName="message"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
              >
                {messages}
              </CSSTransitionGroup>
              
            </div>
            <Formulaire addMessage={this.addMessage} pseudo={this.props.match.params.pseudo} length="140"/>
           </div>
        </div>
    );
  }
}

export default App;

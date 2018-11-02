import React, { Component } from 'react';
class Formulaire extends Component {

	state = {
		length: this.props.length
	}

	createMessage = event => {
		event.preventDefault();

		const message = {
			pseudo: this.props.pseudo,
			message: this.message.value
		}
		
		this.props.addMessage(message);

		// Reset
		const length = this.props.length;
		this.setState({ length });
		this.messageForm.reset();
	}

	compteur = event => {
		const length = this.props.length - this.message.value.length;
		this.setState({ length });
	}

	render() {
		return (
			<form 
				className="form"
				onSubmit={(e) => this.createMessage(e)}
				ref={(input) => this.messageForm = input} 
			>

				<textarea 
					required
					maxLength={this.props.length}
					ref={input => this.message = input}
					onChange={(e) => this.compteur(e)} >
				</textarea>

				<div
					className="info"
					ref={input => this.messageInfo = input} 
				>
						{this.state.length}
				</div>

				<button type="submit" >
						Envoyer!
				</button>

			</form>
		)
    }
}

export default Formulaire;
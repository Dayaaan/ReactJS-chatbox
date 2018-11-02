import React, { Component } from 'react';


class Connexion extends Component {

    goToChat = e => {
        e.preventDefault();
        //récuperer le pseudo
        console.log(this.pseudoInput.value);
        //changer l'url
        const pseudo = this.pseudoInput.value
        this.props.history.push(`/pseudo/${pseudo}`)
    }
    render() {
        return(
            <div className="connexionBox" onSubmit={e => this.goToChat(e)}>
                <form action="" className="connexion">
                    <input type="text" placeholder="Pseudo" required ref={input => this.pseudoInput = input}/>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }


}

export default Connexion;
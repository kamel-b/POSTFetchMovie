import React, {Component} from 'react'
import './FormMovie.css'


class FormMovie extends Component {
    
    state = {
        name :"",
        poster :"",
        comment :"",
    };

    onChange =(e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    submitForm = (e) => {
        e.preventDefault();
        
    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
    };  
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if(res.error){
                    console.log(res.error)
                    alert(res.error)
                }
                else{
                    alert(`Film ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un employé');  
            });
    }

    render(){
        return(
              <div className="FormEmployee">
            <h1>Saisi d'un film </h1>

            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations</legend>

                    <div className="form-data">
                        <label htmlFor="lastname">Film</label>
                        <input type="text" id="name" name="name" onChange={this.onChange} value={this.state.name}/>
                    </div>

                    <div className="form-data">
                        <label htmlFor="firstname">Poster Du Film</label>
                        <input type="text" id="poster" name="poster" onChange={this.onChange} value={this.state.poster}/>
                    </div>

                    <div className="form-data">
                            <textarea htmlFor="" type="text" id="comment" name="comment" onChange={this.onChange} value={this.state.comment} >Commentaire</textarea>
                    </div>

                    <hr />

                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
            </form>
    </div>
        )
    }
}


export default FormMovie
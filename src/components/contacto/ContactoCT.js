import React from 'react';
import {Contacto} from './Contacto';
import firebase from '../../firebase';

class Cont extends React.Component {
    constructor(){
        super();
        this.state = {
            errors: {},
            newMessage:{},
            messages: []
        };
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onSave = this.onSave.bind(this);
    }


    componentDidMount () {
        window.scroll(0, 0)
    }

    onChangeMessage(e){
        let newMessage = this.state.newMessage;
        const field = e.target.name;
        const value = e.target.value;
        newMessage[field] = value;
        this.setState({newMessage});
        // console.log(newMessage);
    };

    validateForm () {
        let newMessage = this.state.newMessage;
        console.log(newMessage)
        // let errors = this.state.errors;
        let isOk = true;
        return isOk;
    };
    onSave(e) {
        e.preventDefault()
        if (this.validateForm()) {
            firebase.database().ref("mensajes")
                .push(this.state.newMessage)
                .then(r => {
                    console.log(r.key)
                    if(this.state.file){
                        let updates = {};
                        firebase.storage()
                            .ref(r.key)
                            .child(this.state.file.name)
                            .put(this.state.file)
                            .then(s=>{
                                const link = s.downloadURL;
                                let newMessage = this.state.newMessage;
                                newMessage["photos"] =[link];
                                updates[`/aplys/${r.key}`] = newMessage;
                                firebase.database().ref().update((updates));

                            });
                    }
                    alert("Mensaje enviado")
                    console.log("Si guarde" + r.key)
                    this.props.history.push("/");

                })
                .catch(e=>{
                    console.log("asi no:", e.message);
                });
        } else{
            alert("aun no");
        };

    };
    render() {
        const {errors, messages} = this.state;
        return (
            <div>
                <Contacto
                    messages={messages}
                    message={this.state.newMessage}
                    onChangeMessage={this.onChangeMessage}
                    errors={errors}
                    onSave={this.onSave}/>
            </div>
        );
    }
}

export default Cont;
import React from 'react';

import LoginForm from './LoginForm';


class LoginPage extends React.Component {
    constructor(){
        super();
        //set the initial compoenet state.
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };
    }

    render() {
        return (
            <LoginForm 
             onSubmit={(e) => this.processForm(e)}
             onChange={(e) => this.changeUser(e)}
             errors={this.state.errors}
            />
        );
    }

    changeUser(event){
        const field = event.target.name; // email or password
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});
    }

    processForm(event){
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;

        console.log('email',email);
        console.log('password',password);

        //TODO: post login data

    }
    

}



export default LoginPage;
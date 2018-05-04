import React from 'react';

import SignUpForm from './SignUpForm';


class SignUpPage extends React.Component {
    constructor(){
        super();
        //set the initial compoenet state.
        this.state = {
            errors: {
            },
            user: {
                email: '',
                password: '',
                confirm_password: ''
            }
        };
    }

    render() {
        return (
            <SignUpForm 
             onSubmit={(e) => this.processForm(e)}
             onChange={(e) => this.changeUser(e)}
             errors={this.state.errors}
            />
        );
    }

    changeUser(event){
        const field = event.target.name; // email or password or confirm_password
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});

        const errors = this.state.errors;

        if (this.state.user.password !== this.state.user.confirm_password){
            errors.password = "Password and Confirm Password do not match.";
        } else{
            errors.password = '';
        }

        this.setState({errors});
    }

    processForm(event){
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;
        const confirm_password = this.state.user.confirm_password;

        console.log('email',email);
        console.log('password',password);
        console.log('confirm_password',confirm_password);

        //TODO: post login data

    }
    

}



export default SignUpPage;
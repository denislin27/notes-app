import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}
	increment() {
		this.setState({
			count: this.state.count + 1
		})
	}
	decrement() {
		this.setState({
			count: this.state.count - 1
		})
	}
	onSubmit(e) {
		e.preventDefault();
		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();
		
		if (password.length < 9) {
			return this.setState({error: 'password needs to be at least 8 chracters long.'})
		}
		this.props.createUser({email: email, password: password}, (err) => {
			if (err) {
				this.setState({error: err.reason});
			} else {
				this.setState({error: ''});
			}		
		});

//		this.setState({
//			error: 'Something went wrong.'
//		});
	}
	render() {
	    return (
	    	<div className='boxed-view'>
				<div className='boxed-view__box'>
					<h1>Join</h1>
					{this.state.error ? <p>{this.state.error}</p> : undefined}
					<form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
						<input type="email" ref="email" name="email" placeholder="Email"/>
						<input type="password" ref="password" name="password" placeholder="Password"/>
						<button className="button">Create Account</button>
					</form>
					<Link to="/">Already have an Account?</Link>
				</div>
	    	</div>
	    	);
	}
}

Signup.propTypes = {
	createUser: React.PropTypes.func.isRequired
};

export default createContainer(()=>{
	return {
		createUser: Accounts.createUser
	}
}, Signup);
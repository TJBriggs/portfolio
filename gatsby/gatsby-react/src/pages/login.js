import React, { Component } from 'react'
import axios from 'axios'
import formurlencoded from 'form-urlencoded'
import Layout from '../components/layout'

class login extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			loggedin: false,
			username: '',
			password: ''
		};
	}

	handleChange = event => {
		this.setState({
			[ event.target.name ]: event.target.value,
		} )
	}

	handleSubmit = event => {
		event.preventDefault();
		const credentials = {
			username: this.state.username,
			password: this.state.password
		}
		axios( {
			method: 'post',
			url: 'http://test-gatsby-admin.pantheonsite.io/wp-json/jwt-auth/v1/token',
			data: formurlencoded( credentials ),
			headers: { "Content-Type": "application/x-www-form-urlencoded" }
		} )
		.then( response => {
			if( 200 === response.status ) {
				this.setState( { loggedin: true } )
				sessionStorage.setItem( 'loggedin', true );
			} else {
				console.log( 'password incorrect' );
			}
		} )
		.catch( error => {
			console.error( error )
		} );
	}

	/* hideValidation() {
		console.log( 'hide validation' );
	} */

	render() {
		return (
			<Layout pageTitle='Login'>
				<section className="main-content">
					<div className="main-content__inner">
						<h3>Site Login</h3>
						<p>Please enter your username and password to access private content.</p>
						<form onSubmit={ this.handleSubmit }>
							<label htmlFor='username' className='screen-reader-text'>Username:</label>
							<input
								name='username'
								type='text'
								ref={ this.textInput }
								placeholder='Username'
								onChange={ this.handleChange }
								//onFocus={ this.hideValidation }
								required />
							<label htmlFor='password' className='screen-reader-text'>Password:</label>
							<input
								name='password'
								type='password'
								ref={ this.passInput }
								placeholder='Password'
								onChange={ this.handleChange }
								//onFocus={ this.hideValidation }
								required />
							<button type='submit'>Login</button>
						</form>
					</div>
				</section>
			</Layout>
		)
	}
}

export default login



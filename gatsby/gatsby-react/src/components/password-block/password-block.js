import React, { Component } from 'react'
import axios from 'axios'
import './password-block-styles.css'
import SimpleCrypto from 'simple-crypto-js';
let _secretKey = SimpleCrypto.generateRandom( 256 );
let simpleCrypto = new SimpleCrypto( _secretKey )

class PasswordBlock extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			password: '',
			validation: null
		}

		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
		this.hideValidation = this.hideValidation.bind( this );
	}

	handleChange = event => {
		this.setState( {
			[ event.target.name ]: simpleCrypto.encrypt( event.target.value ),
		} )
		this.hideValidation();
	}

	hideValidation() {
		if( this.state.validation !== null ) {
			// 1. Take a copy of the existing state
			let validation = this.state.validation;
			// 2. Change validation state
			validation = null;
			// 3. Update State
			this.setState( {
				validation: validation
			} );
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		const password = simpleCrypto.decrypt( this.state.password );
		const pageID = this.props.pageID;
		const endpoint = `http://test-gatsby-admin.pantheonsite.io/wp-json/wp/v2/pages/${ pageID }?password=${ password }`;

		axios.get( endpoint )
		.then( response => {
			if( 200 === response.status ) {
				const content = response.data.acf;
				const page = {
					id: pageID,
					content: content
				}
				this.props.addPageData( page );
			}
		} )
		.catch( error => {
			//console.log( error.response.data );
			// 1. Take a copy of the existing state
			let validation = this.state.validation
			// 2. Change validation state
			validation = 'password-incorrect'
			// 3. Update State
			this.setState( {
				validation: validation
			} );
		} );
	}
	render() {
		return (
			<section className="password-block">
				<div className="password-block__inner">
					<h3>Password Protected Content</h3>
					<p>Please enter the password to access this page's content.</p>
					<form onSubmit={ this.handleSubmit }>
						<label htmlFor='password' className='screen-reader-text'>Password:</label>
						<input
							name='password'
							type='password'
							onChange={ this.handleChange }
							onFocus={ this.hideValidation }
							placeholder='Password'
							required />
						<button type='submit'>Submit</button>
						{ this.state.validation === 'password-incorrect' &&
							<p><span>Password Incorrect</span></p>
						}
					</form>
				</div>
			</section>
		)
	}
}

export default PasswordBlock;

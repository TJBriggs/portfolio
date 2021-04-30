import React, { Component } from 'react'
//import styled from 'styled-components'
import SimpleCrypto from 'simple-crypto-js';
import { secretKey } from '../../utils/helpers.js'
import './password-form-styles.css'

let simpleCrypto = new SimpleCrypto( secretKey )

class PasswordForm extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			value: '',
			validation: null
		}

		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
		this.hideValidation = this.hideValidation.bind( this );
	}

	hideValidation() {
		if( this.state.validation !== null ) {
			// 1. Take a copy of the existing state
			let validation = this.state.validation
			// 2. Change validation state
			validation = null
			// 3. Update State
			this.setState( {
				validation: validation
			} )
		}
	}

	handleChange( event ) {
		this.setState( { value: simpleCrypto.encrypt( event.target.value ) } )
		this.hideValidation()
	}

	handleSubmit( event ) {
		event.preventDefault()

		if( simpleCrypto.decrypt( this.props.password ) === simpleCrypto.decrypt( this.state.value ) ) {
			this.props.validateLogin( true )
		} else {
			// 1. Take a copy of the existing state
			let validation = this.state.validation
			// 2. Change validation state
			validation = 'password-incorrect'
			// 3. Update State
			this.setState( {
				validation: validation
			} )
		}
	}

	render( ) {
		return (
			<section className='password-form'>
				<div className='password-form__inner'>
					<form onSubmit={ this.handleSubmit }>
						<label htmlFor='password' className='screen-reader-text'>Password:</label>
						<input
							name='password'
							type='password'
							placeholder='Password'
							password={ this.props.password }
							onChange={ this.handleChange }
							onFocus={ this.hideValidation }
							required />
						{ this.state.validation === 'password-incorrect' &&
							<p>Password Incorrect</p>
						}
						<button type='submit'>Submit</button>
					</form>
				</div>
			</section>
		)
	}
}

export default PasswordForm

import React from 'react'
import { Link } from 'gatsby'
import './cta-block-styles.css'

const CtaBlock = ( props ) => {
	return (
		<section className="cta-block">
			<div className="cta-block__inner">
				<h2>{ props.headline }</h2>

				{ props.ctas !== null &&
					<div className="cta-block__wrap">
						{ props.ctas.map( ( cta, index ) => {
							return (
								<div className="cta" key={ index }>
									{ null !== cta.icon &&
									 <>
										{ undefined !== cta.icon.source_url ?
											<img src={ cta.icon.source_url } alt={ cta.icon.alt_text } />
										:
											<img src={ cta.icon.url } alt={ cta.icon.alt } />
										}
									 </>
									}
									{ null !== cta.headline &&
										<h3>{ cta.headline }</h3>
									}
									{ null !== cta.text &&
										<p>{ cta.text }</p>
									}
									{ null !== cta.button_text &&
										<Link to={ `/${ cta.button_url }` }>{ cta.button_text }</Link>
									}
								</div>
							)
						} ) }
					</div>
				}

			</div>
		</section>
	)
}

export default CtaBlock

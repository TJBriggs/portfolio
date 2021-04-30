module.exports = `
	wordpressPage( wordpress_id: { eq: $id } ) {
		wordpress_id
		title
		content
		excerpt
		acf {
			# modules_page - this name can vary and should match the name of your flexible content field
			modules_page {
				# __typename is the auto-generated name of each flexible content subfield example: "WordPressAcf_subfield_name"
				# this field is used to generate dynamic component names in page.js
				__typename
				# This section queries a flexible content subfield and all nested fields within
				# Update the subfield name in the line below and add all nested fields needed in your component
				... on WordPressAcf_cover_image {
					id
					image {
						source_url
						alt_text
						localFile {
							childImageSharp {
								fluid(maxWidth: 2000, maxHeight: 600) {
									...GatsbyImageSharpFluid_noBase64
								}
							}
						}
					}
					headline
					text
				}
				... on WordPressAcf_cta_block {
					id
					headline
					ctas {
						icon {
							source_url
							alt_text
						}
						headline
						text
						button_text
						button_url
					}
				}
			}
		}
	}
`

import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}
	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<meta name='apple-mobile-web-app-title' content='Connected Solutions' />
					<meta name='application-name' content='Connected Solutions' />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
					<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument;

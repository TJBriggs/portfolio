import Head from 'next/head';
import Layout from '../components/global/Layout';
import 'normalize.css/normalize.css';
import '../public/font-icons/style.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps, router }) {
	let pageTitle = '';
	let pageSlug = '';
	let titleLowercase = '';
	const url = router.pathname;
	if (url === '/') {
		pageTitle = 'Connected Solutions';
		pageSlug = 'home';
	} else {
		pageSlug = url.substring(url.lastIndexOf('/') + 1);
		titleLowercase = pageSlug.replace(/-/g, ' ');
		pageTitle = titleLowercase.split(" ");
		for (let i = 0; i < pageTitle.length; i++) {
			pageTitle[i] = pageTitle[i][0].toUpperCase() + pageTitle[i].substring(1);

		}
		pageTitle = pageTitle.join(" ");
	}
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
				<title>{pageTitle}</title>
			</Head>
			<Layout pageSlug={pageSlug}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

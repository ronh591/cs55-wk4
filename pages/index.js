import Head from 'next/head';
// Import Layout component and siteTitle constant from layout.js
import Layout, { siteTitle } from '../components/layout';
// Import shared utility CSS module for styling
import utilStyles from '../styles/utils.module.css';

// Define and export the Home page component
export default function Home() {
  return (
    <Layout home>
      <Head>
        {/* Set the page title using the siteTitle constant */}
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* Introductory paragraph with custom styling */}
        <p className={utilStyles.intro}>[Hello, my name is Steve A]</p>
        {/* Description paragraph with custom styling and link */}
        <p className={utilStyles.description}>
          (This is the basis of the website I will build in CS55{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

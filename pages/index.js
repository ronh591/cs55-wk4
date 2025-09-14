import Head from 'next/head';
// Import Layout component and siteTitle constant from layout.js
import Layout, { siteTitle } from '../components/layout';
// Import shared utility CSS module for styling
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// Fetch blog posts at build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Define and export the Home page component
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        {/* Set the page title using the siteTitle constant */}
        <title>{siteTitle}</title>
      </Head>

      {/* Self-introduction section */}
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.intro}>[Hello, my name is Steve A]</p>
        <p className={utilStyles.description}>
          (This is the basis of the website I will build in CS55{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Blog posts section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <h3>{title}</h3>
              <small>{id} — {date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

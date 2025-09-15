// Import the Head component from Next.js for modifying the <head> of the page
import Head from 'next/head';

// Import the Layout component and siteTitle constant from local layout component
import Layout, { siteTitle } from '../components/layout';

// Import CSS module with utility styles
import utilStyles from '../styles/utils.module.css';

// Import function to get sorted post data from local posts library
import { getSortedPostsData } from '../lib/posts';

// Import Link component from Next.js for client-side navigation
import Link from 'next/link';

// Import Date component for formatting date strings
import Date from '../components/date';

// Default export of the Home page component
// Receives allPostsData as props (fetched by getStaticProps)
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title> {/* Set the page title dynamically */}
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link> {/* Link to individual post */}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} /> {/* Render formatted post date */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Next.js function to fetch data at build time (Static Generation)
// Runs on the server side during the build
export async function getStaticProps() {
  // Call local function to get all posts sorted by date
  const allPostsData = getSortedPostsData();

  // Return the data as props to the Home component
  return {
    props: {
      allPostsData, // will be passed to Home() as a prop
    },
  };
}

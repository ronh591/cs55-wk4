// Import the Layout component from local components folder
import Layout from '../../components/layout';

// Import helper functions to get all post IDs and fetch post data
import { getAllPostIds, getPostData } from '../../lib/posts';

// Import Head component from Next.js to modify <head> (title, meta, etc.)
import Head from 'next/head';

// Import Date component to format date strings
import Date from '../../components/date';

// Import CSS module with utility styles
import utilStyles from '../../styles/utils.module.css';

// Default export of the Post page component
// Receives postData as a prop (fetched by getStaticProps)
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// Next.js function to specify dynamic routes for all posts
// Runs at build time to determine which paths/pages to generate
export async function getStaticPaths() {
  const paths = getAllPostIds(); // Get array of objects with all post IDs
  return {
    paths,        // Paths like { params: { id: 'post-id' } }
    fallback: false, // Any paths not returned here will result in 404
  };
}

// Next.js function to fetch data for a specific post at build time
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); // Fetch post data by ID
  return {
    props: {
      postData, // Will be passed to Post() as a prop
    },
  };
}

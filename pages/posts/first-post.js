// Import Script component for loading external scripts asynchronously
import Script from 'next/script';
// Import Head component for metadata like <title>
import Head from 'next/head';
// Import Link component for client-side navigation
import Link from 'next/link';
// Import the shared Layout component
import Layout from '../../components/layout';
 
// Import custom CSS module for styling this page
import styles from '../../styles/firstPost.module.css';

// Define and export the FirstPost page component
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        {/* Set the title of the page */}
        <title>First Post</title>
      </Head>

      {/* Load Facebook SDK asynchronously */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        // Callback runs after the script is loaded
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>

      {/* Post content container with custom styling */}
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>First Post</h1>
        <h2 className={styles.postSubtitle}>
          <Link href="/">← Back to home</Link>
        </h2>
      </div>
    </Layout>
  );
}

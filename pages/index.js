import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>My Profile</h3>
        <p>Hello. <br/>My name is Kurousa.<br/>
           This site is portfolio with maked by NextJS!</p>
        <h3>My Project</h3>
        <a href="/posts/first-post">First Post</a>
        <h3>Social Network</h3>
        <a href="https://qiita.com/kurousa">Qiita</a><br/>
        <a href="https://github.com/kurousa">Github</a>
      </section>
    </Layout>
  )
}
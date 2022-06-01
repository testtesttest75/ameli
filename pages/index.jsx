import Form from '../components/Form'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <Form />
      </div>
    </Layout>
  )
}

import React from 'react';
import Layout from '../../components/Layout';
import Form from '../../components/Form';
import styles from '../../styles/Home.module.css'


const remboursement = () => {
    return (
      <Layout>
        <div className={styles.main}>
            <Form />
        </div>
    </Layout>
    );
};

export default remboursement;
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { Layout } from '../components/layouts';

 const HomePage: NextPage = () => {
  return (
    <Layout title='Hello Mundo' >
      <Typography variant='h4' color='primary' >Home Page</Typography>
    </Layout>
  )
}

export default HomePage;

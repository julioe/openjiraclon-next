import { FC, PropsWithChildren, useContext } from 'react';
import Head from 'next/head';

import { Box } from '@mui/material'
import { Navbar, Sidebar } from '../ui';
import { UIContext } from '../../context/ui';

interface Props extends PropsWithChildren<{}> {
  title?: string
}

export const Layout: FC<Props> = ({children,  title = 'Open-Jira' }) => {
  const {sidemenuOpen, closeSideMenu} = useContext(UIContext)
  return (
    <Box 
      sx={{ flexFlow: 1}} //stendet style
       
     >
        <Head>
          <title>{title}</title>
        </Head>
        < Navbar />
        <Sidebar />
        <Box sx={{ padding: '10px 20px' }}
        >{children}</Box>
        {/* footer */}
      </Box>
  )
}

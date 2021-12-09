import * as React from "react";
import Head from 'next/head'
import { Heading } from '@twilio-paste/core/heading'
import { Box } from '@twilio-paste/core/box'
import { Separator } from '@twilio-paste/core/separator'
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <Box as="main" padding="space70">
    <Head>
      <title>Paste NextJS App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Heading as="h1" variant="heading10">
      This is a prototype for Twilio CLI Web Login. 
      You can navigate to CLI page{' '}
      <Link href="/cli/overview">
      <a>from here!</a>
       </Link>
    </Heading>

    <Separator orientation="horizontal" verticalSpacing="space120" />
  </Box>
  )
}

export default Home

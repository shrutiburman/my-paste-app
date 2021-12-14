import * as React from 'react'
import Head from 'next/head'
import { Heading } from '@twilio-paste/core/heading'
import { Separator } from '@twilio-paste/core/separator'
import Link from 'next/link'
const bgImage = '/periodic_table.png'
import Image from 'next/image'
import { Box } from '@twilio-paste/core/box';
const Home: React.FC = () => {
  return (
    <Box as='main' padding='space70'>
      <Head>
        <title>Customer Engagement - Foundry Team</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Heading as='h1' variant='heading10'>
        Ahoy!
      </Heading>
      <Heading as='h2' variant='heading20'>
        At Twilio, customer satisfaction is always our priority, we are always
        finding ways to understand the customer's perception.
      </Heading>
      <Heading as='h4' variant='heading40'>
        With the same intention, and based on a lot of FAQ's that we get often
        (one of the most common and our favourite is, "Hmm, so many products!
        How do I know what fits my brand?"),
        <br/> we've come up with this Periodic Table (drum roll, please) !!
      </Heading>
      <Separator orientation='horizontal' verticalSpacing='space120'/>
      <Heading as='h1' variant='heading10'>
        Do you want to know of which element is your brand ? Take this ~10 secs {' '}
         <Link href="/quiz">
        <a>Quiz</a>
         </Link> to find out!
        </Heading>
      <Box as='div'>
        <Image
          src={bgImage}
          alt='Result'
          inset='155px;'
          width={800}
          height={600}
        />
      </Box>
    </Box>
  )
}

export default Home

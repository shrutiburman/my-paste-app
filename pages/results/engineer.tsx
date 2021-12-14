
import { Heading } from '@twilio-paste/core/heading'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Stack } from '@twilio-paste/stack'
import { Card } from '@twilio-paste/card'
import {
  MediaObject,
  MediaBody,
  MediaFigure
} from '@twilio-paste/core/media-object'
import { Column, Grid } from '@twilio-paste/core/grid';
const productJson = require('../../pages/productMap.json');
const prodMap = new Map(Object.entries(productJson));
const productsList = prodMap.get('engineer');
import { FcStatistics } from "react-icons/fc";
const {generateDomForProducts} = require('../../utilities/addProductsList');
import { Avatar } from '@twilio-paste/core/avatar';
export default function result () {
  return (
    <>
      <Stack orientation='horizontal' spacing='space160'>
        <Card padding='space110'>

        <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                  </MediaObject>
                </Heading>
                <Paragraph>
                  <h2>Your brand archetype is ..
                  <b>THE ENGINEER</b>
                  </h2>
                   </Paragraph>
              </MediaBody>
            </MediaObject>
          <Paragraph>The question your customers ask themselves is "where can I get the best designed product"
          </Paragraph>
          <Paragraph>Customers thrive on using these ingenious products and services showing the world they are tech savvy early adopters.</Paragraph>
          <Paragraph>Innovative, design led and uncontested game changers, these brands focused on the finest details to provide <br/>
          the best products which their customers use to show the world who they are.
          </Paragraph>
        </Card>
        <Card padding='space150'>
          <MediaObject as='div'>
            <FcStatistics size='15em' />
          </MediaObject>
        </Card>
      </Stack>
      <br/>
      <Heading as='h3' variant='heading30'>
      Ingenious service matches the ingenious product. 
<br/>Twilio use cases would be:
      </Heading>
      <Stack orientation='horizontal' spacing='space160' padding='space110'>
        {generateDomForProducts(productsList)}
        </Stack>


        <br />
      <br />

      <Stack orientation='horizontal' spacing='space40'>
        <Avatar
          size={['sizeIcon20', 'sizeIcon70', 'sizeIcon110']}
          name='Sam Richardson'
          src='/Sam.png'
        />
        <i>
          Knock knock!
          <br /> It's me, Sam who'd help you out with the next steps. Reach out
          @ <a href='mailto:srichardson@twilio.com'>
            srichardson@twilio.com!
          </a>{' '}
          :)
        </i>
      </Stack>
    </>
  )
}

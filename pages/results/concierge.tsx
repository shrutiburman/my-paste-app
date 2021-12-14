
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
const productsList = prodMap.get('concierge');
import { FcAssistant } from "react-icons/fc";
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
                  <b>THE CONCIERGE</b>
                  </h2>
                   </Paragraph>
              </MediaBody>
            </MediaObject>
          <Paragraph>The question your customers ask themselves is "where can I get the highest level of service"
          </Paragraph>
          <Paragraph>Every touchpoint is a portal to superlative knowledge and a concierge level of customer service.</Paragraph>
          <Paragraph>These brands put the V in VIP. Very fast, very high touch, very exclusive, very discreet. <br/>
          The have dedicated agents are highly personalized to provide the 
              best possible quality of service which they <br/> pride themselves on and their customers expect for the price they charge.
          </Paragraph>
        </Card>
        <Card padding='space150'>
          <MediaObject as='div'>
            <FcAssistant size='15em' />
          </MediaObject>
        </Card>
      </Stack>
      <br/>
      <Heading as='h3' variant='heading20'>3
      Speed, quality and personalization are the key. 
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

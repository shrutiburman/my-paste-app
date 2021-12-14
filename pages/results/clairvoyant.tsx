import { Heading } from '@twilio-paste/core/heading'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Stack } from '@twilio-paste/stack'
import { Card } from '@twilio-paste/card'
import {
  MediaObject,
  MediaBody,
  MediaFigure
} from '@twilio-paste/core/media-object'
import { Column, Grid } from '@twilio-paste/core/grid'
const productJson = require('../../pages/productMap.json')
const prodMap = new Map(Object.entries(productJson))
const productsList = prodMap.get('clairvoyant')
import { FcWorkflow } from 'react-icons/fc'
const { generateDomForProducts } = require('../../utilities/addProductsList')
import { Avatar } from '@twilio-paste/core/avatar';
export default function result () {
  return (
    <>
      <Stack orientation='horizontal' spacing='space160'>
        <Card padding='space110'>
          <MediaObject as='div'>
            <MediaFigure as='div' spacing='space50'></MediaFigure>
            <MediaBody as='div'>
              <Heading as='h2' variant='heading30'>
                <MediaObject verticalAlign='center'></MediaObject>
              </Heading>
              <Paragraph>
                <h2>
                  Your brand archetype is ..
                  <b>THE CLAIRVOYANT</b>
                </h2>
              </Paragraph>
            </MediaBody>
          </MediaObject>
          <Paragraph>
            The question your customers ask themselves is "who knows me best"
          </Paragraph>
          <Paragraph>
            Every touchpoint is a portal to superlative knowledge and a
            concierge level of customer service.
          </Paragraph>
          <Paragraph>
            These brands are data first and use every data point to feed their
            algorithms that serve customers highly personalized choices they
            <br/>didn't even know they wanted. Everything they do is aimed at ease
            and convenience for their busy time poor customers.
          </Paragraph>
        </Card>
        <Card padding='space150'>
          <MediaObject as='div'>
            <FcWorkflow size='15em' />
          </MediaObject>
        </Card>
      </Stack>
      <br />
      <Heading as='h3' variant='heading30'>
        Speed, convenience and personalization are the key.
        <br />
        Twilio use cases would be:
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

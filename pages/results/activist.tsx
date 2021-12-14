import { Heading } from '@twilio-paste/core/heading'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Stack } from '@twilio-paste/stack'
import { Card } from '@twilio-paste/card'
import {
  MediaObject,
  MediaBody,
  MediaFigure
} from '@twilio-paste/core/media-object'
const productJson = require('../../pages/productMap.json')
const prodMap = new Map(Object.entries(productJson))
const productsList = prodMap.get('activist')
import { FcCloseUpMode } from 'react-icons/fc'
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
                  <i>
                    <b>THE ACTIVIST</b>{' '}
                  </i>
                </h2>
              </Paragraph>
            </MediaBody>
          </MediaObject>
          <Paragraph>
            The question your customers ask themselves is "which brands align to
            my values"
          </Paragraph>
          <Paragraph>
            Customers are followers, believers and disciples of the brand.
          </Paragraph>
          <Paragraph>
            Driven by a commitment to an environmental or social cause, this
            brand has strong content it loves to share through social channels
            and advertising.
            <br /> It never compromises profits over people and planet. Its
            customers identify themselves through the brand and have a strong
            community.
          </Paragraph>
        </Card>
        <Card padding='space150'>
          <MediaObject as='div'>
            <FcCloseUpMode size='15em' />
          </MediaObject>
        </Card>
      </Stack>
      <br />
      <Heading as='h3' variant='heading40'>
        Their customers will always read what they have to say and don't need
        the latest trends to stay committed to the cause.
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

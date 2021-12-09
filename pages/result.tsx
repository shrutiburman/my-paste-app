
import Image from 'next/image'
const cultureImage = "/cat_culture.png"
import { Heading } from '@twilio-paste/core/heading'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Stack } from '@twilio-paste/stack'
import { Button } from '@twilio-paste/core/button'
import { Card } from '@twilio-paste/card'
import { MediaObject, MediaBody, MediaFigure } from '@twilio-paste/core/media-object';
import { Anchor } from '@twilio-paste/core/anchor';
import { ProductVoiceIcon } from '@twilio-paste/icons/cjs/ProductVoiceIcon';
import { UnpinIcon } from '@twilio-paste/icons/cjs/UnpinIcon';
export default function result (){
    return (
        <>
        <Stack orientation='horizontal' spacing='space160'>
        <Card padding='space110'>
        <h3>(Image to be changed)</h3>
        <Image
      src={cultureImage}
      alt="Result"
      inset= "155px;"
      width={700}
      height={700}
    />
            </Card>
        <Card>
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
                <ProductVoiceIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="#">Product 1</Anchor>
                    </MediaBody>
                  </MediaObject>
                </Heading>
                <Paragraph>Details about the product. </Paragraph>
                <Anchor href="#" showExternal>
                  docs
                </Anchor>
              </MediaBody>
            </MediaObject>
          </Card> 
          <Card>
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
                <ProductVoiceIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="#">Product 2</Anchor>
                    </MediaBody>
                  </MediaObject>
                </Heading>
                <Paragraph>Details about the product. </Paragraph>
                <Anchor href="#" showExternal>
                  docs
                </Anchor>
              </MediaBody>
            </MediaObject>
          </Card> 
          <Card>
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
                <ProductVoiceIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="#">Product 3</Anchor>
                    </MediaBody>
                  </MediaObject>
                </Heading>
                <Paragraph>Details about the product. </Paragraph>
                <Anchor href="#" showExternal>
                  docs
                </Anchor>
              </MediaBody>
            </MediaObject>
          </Card> 
        </Stack>
        
        </>
    )
}
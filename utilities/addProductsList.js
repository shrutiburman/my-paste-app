import { Card } from '@twilio-paste/card';
import { MediaObject, MediaBody, MediaFigure } from '@twilio-paste/core/media-object';
import { ProductMessagingIcon } from '@twilio-paste/icons/cjs/ProductMessagingIcon';
import { NewIcon } from '@twilio-paste/icons/cjs/NewIcon';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Anchor } from '@twilio-paste/core/anchor';
const generateDomForProducts = (arrProducts) => {
    let arrOfDomChoices = []
    for (var i = 0; i < arrProducts.length; i++) {
      arrOfDomChoices.push(
        <Card padding='space110'
          id={i}
          value={arrProducts[i]}
          name={arrProducts[i]}
        >
        <MediaObject as="div">
        <MediaFigure as="div" spacing="space50">
                <NewIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="#">{arrProducts[i]}</Anchor>
                    </MediaBody>
                    <MediaFigure align="end" spacing="space40">
                    </MediaFigure>
                  </MediaObject>
                </Heading>
                <Anchor href="https://www.twilio.com/products" showExternal>
                  docs
                </Anchor>
              </MediaBody>
          </MediaObject>
        </Card>
      )
    }

    return arrOfDomChoices;
  };
  module.exports={generateDomForProducts}
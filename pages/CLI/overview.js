import Link from 'next/link';
import { Column, Grid } from '@twilio-paste/core/grid';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Card } from '@twilio-paste/core/card';
import { MediaObject, MediaBody, MediaFigure } from '@twilio-paste/core/media-object';
import { Anchor } from '@twilio-paste/core/anchor';
import { Button } from '@twilio-paste/core/button';
import { ProductMessagingIcon } from '@twilio-paste/icons/cjs/ProductMessagingIcon';
import { ProductVoiceIcon } from '@twilio-paste/icons/cjs/ProductVoiceIcon';
import { PinIcon } from '@twilio-paste/icons/cjs/PinIcon';
import { UnpinIcon } from '@twilio-paste/icons/cjs/UnpinIcon';
import { ProductCLIIcon } from "@twilio-paste/icons/esm/ProductCLIIcon";
import { ProductCodeExchangeCommunityIcon } from "@twilio-paste/icons/esm/ProductCodeExchangeCommunityIcon";

export default function CLI (){
    return (
        <>
      <h1>CLI Dashboard</h1>
      <br />
        <br />
        The Twilio CLI allows you to manage your Twilio resources from your terminal or command prompt. 
        <br />
        <br />
        <Grid gutter="space30" marginBottom="space30">
        <Column>
          <Card>
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
                <ProductCLIIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="#">Quickstart</Anchor>
                    </MediaBody>
                  </MediaObject>
                </Heading>
                <Paragraph>CLI Quickstart Doc</Paragraph>
                <Anchor href="https://www.twilio.com/docs/twilio-cli/quickstart" showExternal>
                  docs
                </Anchor>
              </MediaBody>
            </MediaObject>
          </Card>
        </Column>
        <Column>
          <Card>
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
                <ProductCodeExchangeCommunityIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="https://www.twilio.com/code-exchange?q=&f=twilio&f=building_blocks&f=applications&f=integrations">Code Exchange</Anchor>
                    </MediaBody>
                  </MediaObject>
                </Heading>
                <Paragraph>Code Exchange</Paragraph>
                <Anchor href="#" showExternal>
                  docs
                </Anchor>
              </MediaBody>
            </MediaObject>
          </Card>
        </Column>
        <Column>
          <Card>
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space50">
                <ProductVoiceIcon decorative={true} size="sizeIcon50" />
              </MediaFigure>
              <MediaBody as="div">
                <Heading as="h2" variant="heading30">
                  <MediaObject verticalAlign="center">
                    <MediaBody>
                      <Anchor href="#">Contact Us</Anchor>
                    </MediaBody>
                    <MediaFigure align="end" spacing="space40">
                      <Button variant="link">
                        <UnpinIcon decorative={false} title="Unpin Voice from navigation" size="sizeIcon50" />
                      </Button>
                    </MediaFigure>
                  </MediaObject>
                </Heading>
                <Paragraph>Something's not working? Contact us. </Paragraph>
                <Anchor href="#" showExternal>
                  docs
                </Anchor>
              </MediaBody>
            </MediaObject>
          </Card>
        </Column>
      </Grid>
    </>
    )
}

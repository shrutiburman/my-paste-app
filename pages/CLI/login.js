import { Stack } from '@twilio-paste/stack'
import { Button } from '@twilio-paste/core/button'
import { Card } from '@twilio-paste/card'
import { Heading } from '@twilio-paste/heading'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Alert } from '@twilio-paste/alert'
import { Box } from '@twilio-paste/box'
import {
  Input,
  Label,
  HelpText,
  Select,
  Option,
  OptionGroup,
  FormLabel
} from '@twilio-paste/core'
import {useUID} from '@twilio-paste/uid-library';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '@twilio-paste/modal';
import { useRef, useEffect } from 'react';


export default function Login () {
const [isOpen, setIsOpen] = React.useState(false);
const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);
const modalHeadingID = useUID();
const accountSidRef = useRef();
const authTokenRef = useRef();


const fetchAccDetails = () => {
  const accSid = accountSidRef.current;
  accSid.value = 'dummy_account_sid';
  const authToken = authTokenRef.current;
  authToken.value = 'dummy_auth_token';
};

  return (
    <>
      <Stack orientation='vertical' spacing='space160'>
        <Card padding='space110'>
          <Heading as='h2' variant='heading20'>
           CLI Web Login
          </Heading>
          <Paragraph>
            To use your Twilio account with CLI, you'll need to use your Account
            SID and Auth Token as environment variables or use them to generate
            API Keys and provide them at login to create a profile.
          </Paragraph>
        </Card>

        <Card padding='space110'>
          <Box padding='space30'>
            <Label htmlFor='sid_readonly'>Account SID</Label>
            <Input
              aria-describedby='sid_readonly_help_text'
              id='sid_readonly'
              type='text'
              placeholder='AccountSID'
              ref={accountSidRef}
              value=''
              insertAfter={
                <Button variant="link"
                onClick={() => {
                    navigator.clipboard.writeText('dummy_account_sid')
                  }}>
                  Copy
                </Button>
              }
              readOnly
            />
            {' '}
            <br/>
            <Label htmlFor='auth_readonly'>Authorization Token</Label>
            <Input
              aria-describedby='auth_readonly_help_text'
              id='auth_readonly'
              name='auth_readonly'
              type='password'
              placeholder='Auth Token'
              ref={authTokenRef}
              value=''
              insertAfter={
                <Button variant="link"
                onClick={() => {
                    navigator.clipboard.writeText('dummy_auth_token')
                  }}>
                  Copy
                </Button>
              }
              onChange=''
              readOnly
            />{' '}
          </Box>
        </Card>

        <Card padding='space110'> 
        <Heading as='h2' variant='heading20'>
            Generate new API Keys
          </Heading>    
          
        <Paragraph> API keys are revokable credentials for the Twilio API. You can use API keys to authenticate to the REST API using basic auth with “user=KeySid”
             and “password=KeySecret”. You can also use API keys to sign access tokens which are also used by our Real-Time Communications SDKs. Access tokens are short-lived credentials that can be distributed safely to client-side applications. Learn more about API keys.
        </Paragraph>     
          <Alert variant='neutral'>
            If you don't need to create API Keys, you can set{' '}
            <strong>TWILIO_ACCOUNT_SID</strong>
            and <strong>TWILIO_AUTH_TOKEN</strong> environment variables to get
            started with CLI
          </Alert>
         <br/>
          <Label htmlFor='name' required>
            Friendly Name
          </Label>
          <Input
            aria-describedby='name_help_text'
            id='name'
            name='name'
            type='text'
            onChange=''
            required
          />
          <HelpText id='name_help_text'>
            Please enter a friendly name for profile ID.{' '}
          </HelpText>
          <br/>
          <Label htmlFor='option_group_demo'>Region</Label>
          <Select
            id='option_group_demo'
            htmlFor='option_group_demo'
            defaultValue='geomatch'
          >
            <OptionGroup label='US'>
              <Option value='geomatch'>US Region 1</Option>
              <Option value='channels'>US Region 2</Option>
              <Option value='short-codes'>US Region 3</Option>
            </OptionGroup>
          </Select>
          <br/>
          <Label htmlFor='keyType' required>Key type</Label>
          <Select
            id='keyType'
            htmlFor='keyType'
            defaultValue='standard'
          >
              <Option value='standard'>Standard</Option>
              <Option value='main'>Main</Option>
          </Select>
          <HelpText id='keyType_help_text'>
          Standard keys *can not* manage API keys, account configuration, and sub accounts.{' '}
          </HelpText>
          <br/>
          <Stack orientation="horizontal" spacing="space30">
          <Button variant='primary' onClick={handleOpen}>
            Create API Keys
          </Button>
          <Button variant="secondary">Cancel</Button>
          </Stack>
          <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            You're almost done!
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            Attributes required to log into Twilio CLI
          </Paragraph>
          <Label htmlFor='sid_readonly'>Account SID</Label>
            <Input
              aria-describedby='sid_readonly_help_text'
              id='sid_readonly'
              name='sid_readonly'
              type='text'
              placeholder='Account SID'
              value='dummy_account_sid_final'
              insertAfter={
                <Button variant="link"
                onClick={() => {
                    navigator.clipboard.writeText('dummy_account_sid_final')
                  }}>
                  Copy
                </Button>
              }
              readOnly
            />{' '}
            <br/>
            <Label htmlFor='apiKey_readonly'>Genrated API Key</Label>
            <Input
              aria-describedby='apiKey_readonly_help_text'
              id='apiKey_readonly'
              name='apiKey_readonly'
              type='password'
              placeholder='API Key'
              value='API Key'
              insertAfter={
                <Button variant="link"
                onClick={() => {
                    navigator.clipboard.writeText('dummy_api_key_final')
                  }}>
                  Copy
                </Button>
              }
              readOnly
            />{' '}
            <br/>
            <Alert variant='neutral' size ="small">
            This secret above is only shown once. Please make note of it and store it in a safe, secure location.{' '}
          </Alert>
          <Paragraph>
          You are now ready to get started with CLI.  Follow the instruction for your specific platform and install the CLI.
          </Paragraph>
          <Stack orientation="horizontal" spacing="space30">
          <Button
            variant='primary'
            as='a'
            href='https://www.twilio.com/docs/twilio-cli/quickstart/'
          >
            Twilio CLI
          </Button>
          <Button
            variant='primary'
            as='a'
            href='https://www.twilio.com/docs/twilio-cli/general-usage/'
          >
            General Usage
          </Button>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="primary">Done</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>


        </Card>
      </Stack>
    </>
  )
}

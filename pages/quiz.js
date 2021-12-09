import React, { Component } from 'react'
import Head from 'next/head'
import { Heading } from '@twilio-paste/core/heading'
import { Box } from '@twilio-paste/core/box'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Separator } from '@twilio-paste/core/separator'
import { Stack } from '@twilio-paste/stack'
import { Card } from '@twilio-paste/card'
import { Radio, RadioGroup } from '@twilio-paste/core/radio-group'
import { useRef } from 'react'
import { any } from 'prop-types'
const { submit_form } = require('../utilities/submitForm')
const questionsJson = require('../pages/questions.json')
const quesMap = new Map(Object.entries(questionsJson))
console.log(quesMap)
let selectedCat = ''

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = { category: '' }
  }
  setRadioValue (val) {
    this.setState({ category: val })
    //console.log(val)
  }

  setQuestionChoicesVal(key, value){
      this.setState({ 
          ...this.state, [key] : value
      })
      console.log('State::::');
      console.log({ 
        ...this.state, [key] : value
    })
  }

  generateQuesChoices (question, choices) {
    let arrOfDomChoices = []
    for (var i = 0; i < choices.length; i++) {
      let key = this.state.category + '_' + question
      arrOfDomChoices.push(
        <Radio
        id = {key + i}
          value={choices[i]}
          name={'brand_' + this.state.category}
          checked={this.state[question] === choices[i]}
        >
          {choices[i]}
          
        </Radio>
      )
    }

    return (
      <Card padding='space110' id='card_brand_customer' key={question}>
        <RadioGroup
          name='brand_customer'
          legend={question}
          orientation='horizontal'
          onChange={newValue => {
            //debugger
              this.setQuestionChoicesVal(question, newValue)
            }}
        >
          {arrOfDomChoices}
        </RadioGroup>
      </Card>
    )
  }

  generateQuestions (category) {
    if (!category) {
      return
    }
    const questions = quesMap.get(category)
    //debugger
    let arrOfDom = []
    for (const [key, value] of Object.entries(questions)) {
      arrOfDom.push(this.generateQuesChoices(key, value))
    }
    console.log(questions)
    console.log(arrOfDom)
    return arrOfDom
  }

  render () {
    return (
      <Box as='form' padding='space70'>
        <Head>
          <title>Twilio-iz</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Heading as='h1' variant='heading10'>
          Welcome to the Twilio Quiz
        </Heading>
        <Paragraph>
          Lets try to find out which Twilio products suit you the best!
        </Paragraph>

        <Separator orientation='horizontal' verticalSpacing='space120' />

        <Heading as='h2' variant='heading20'>
          Answering below questions will help us understand you better. Choose
          an option that best describes your brand!
        </Heading>
        <Stack orientation='vertical' spacing='space160'>
          <Card padding='space110' id='card_brand_faith'>
            <RadioGroup
              name='brand_faith'
              legend='Does your brand believe in ..'
              orientation='horizontal'
              onChange={newValue => {
                this.setRadioValue(newValue)
              }}
            >
              <Radio
                id='1a'
                value='culture'
                name='brand_faith'
                checked={this.state.category === 'culture'}
              >
                Creating a better world
              </Radio>
              <Radio
                id='1b'
                value='entertainment'
                name='brand_faith'
                checked={this.state.category === 'entertainment'}
              >
                Setting the trend
              </Radio>
              <Radio
                id='1c'
                value='expertise'
                name='brand_faith'
                checked={this.state.category === 'expertise'}
              >
                Making the customer feel special
              </Radio>
              <Radio
                id='1d'
                value='product'
                name='brand_faith'
                checked={this.state.category === 'product'}
              >
                Disruption
              </Radio>
            </RadioGroup>
          </Card>
        </Stack>

        {this.generateQuestions(this.state.category)}
        <br />
        <input type='submit' value='Submit' padding='space110' />
      </Box>
    )
  }
}

export default Quiz

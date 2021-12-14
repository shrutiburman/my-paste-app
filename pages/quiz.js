import React, { Component } from 'react'
import Head from 'next/head'
import { Heading } from '@twilio-paste/core/heading'
import { Box } from '@twilio-paste/core/box'
import { Paragraph } from '@twilio-paste/core/paragraph'
import { Separator } from '@twilio-paste/core/separator'
import { Stack } from '@twilio-paste/stack'
import { Card } from '@twilio-paste/card'
import { Radio, RadioGroup } from '@twilio-paste/core/radio-group'
import Router from 'next/router'
import Image from 'next/image'
const { submit_form } = require('../utilities/submitForm')
const questionsJson = require('../pages/questions.json')
const quesMap = new Map(Object.entries(questionsJson))
import { Link } from 'react-router-dom'
const bgImage = '/background.png'
import { Button } from '@twilio-paste/core/button'


class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = { category: '' }
  }

  setRadioValue (val) {
    this.setState({ category: val })
  }

  setQuestionChoicesVal (key, value) {
    this.setState({
      ...this.state,
      [key]: value
    })
  }

  generateQuesChoices (question, choices) {
    let arrOfDomChoices = []
    for (var i = 0; i < choices.length; i++) {
      let key = this.state.category + '_' + question
      arrOfDomChoices.push(
        <Radio
          id={key + i}
          key={key + i}
          value={choices[i]}
          name={'brand_' + question}
          checked={this.state[question] === choices[i]}
        >
          {choices[i]}
        </Radio>
      )
    }

    return (
      <Card padding='space110' id={'card_' + question} key={question} style={{margin: '1em'}}>
        <RadioGroup
          name={'brand_' + question}
          legend={question}
          orientation='horizontal'
          onChange={newValue => {
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
    let arrOfDom = []
    for (const [key, value] of Object.entries(questions)) {
      arrOfDom.push(this.generateQuesChoices(key, value))
    }
    return arrOfDom
  }

  calculate (e, state) {
    if (!state.category) {
      return
    }
    console.log('state category: ' + state.category)
    const scorecardJson = require('../pages/scorecard.json')
    const scoreMap = new Map(Object.entries(scorecardJson))
    const scoreForCategory = scoreMap.get(state.category)
    let answerSet = []
    for (const [key, value] of Object.entries(state)) {
      answerSet.push(value)
    }
    let adjectiveScore = {}
    for (const [key, value] of Object.entries(scoreForCategory)) {
      adjectiveScore[key] = 0
    }

    for (let i = 0; i < answerSet.length; i++) {
      for (const [key, value] of Object.entries(scoreForCategory)) {
        if (value.includes(answerSet[i])) {
          adjectiveScore[key] = adjectiveScore[key] + 1
        }
      }
    }
    console.log(adjectiveScore)
    const max = Object.keys(adjectiveScore).reduce(
      (a, v) => Math.max(a, adjectiveScore[v]),
      -Infinity
    )
    const result = Object.keys(adjectiveScore).filter(
      v => adjectiveScore[v] === max
    )
    this.setQuestionChoicesVal('result', result)
    //window.alert(result)
    console.log({
      ...this.state
    })
    e.preventDefault()
    Router.push('/results/' + result)
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
        <Button variant='primary' onClick={e => this.calculate(e, this.state)}>
          Submit
        </Button>
      </Box>
    )
  }
}

export default Quiz

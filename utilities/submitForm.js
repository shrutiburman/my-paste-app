import Router from 'next/router'

const submit_form = async event => {
    //console.log("Done bro");
    event.preventDefault()
    console.log(event.target.brand_faith);
    Router.push('/result')
  };
  module.exports = {submit_form}; 
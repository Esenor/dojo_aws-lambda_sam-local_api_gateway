const customerModel = require('./index.js')
const AWS = require('aws-sdk')
AWS.config.region = 'eu-west-1'
let lambda = new AWS.Lambda()

module.exports.findCustomerByMail = (event, context, callback) => {
  try {
    let mail = JSON.parse(event.body).mail

    let customer = customerModel.getCustomer(mail)

    // lambda remote function params
    let invokeParams = {
      FunctionName: 'dev-dojo-orderModel-dojoOrderModel-F1DV9Z79QA0J',
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: JSON.stringify({
        mail: mail
      })
    }
    // Invoke remote function
    lambda.invoke(invokeParams, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        customer.orders = JSON.parse(data.Payload)
      }
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      })
    })
    //
  } catch (error) {
    callback(null, {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'payload syntax' }
    })
  }
}

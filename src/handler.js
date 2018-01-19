const customerModel = require('./index.js')

module.exports.findCustomerByMail = (event, context, callback) => {
  try {
    let customer = customerModel.getCustomer(JSON.parse(event.body).mail)
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    })
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

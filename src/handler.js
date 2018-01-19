const customerModel = require('./index')

module.exports.findCustomerByMail = (event, context, callback) => {
  try {
    let customer = customerModel.getCustomer(event.mail)
    callback(null, customer)
  } catch (error) {
    callback(null, {error: 'payload syntax'})
  }
}

const faker = require('faker')

module.exports = {
  /**
   * get fake customer
   * @param {string} mail
   * @return {object}
   */
  getCustomer: (mail) => {
    return Object.assign(
      {},
      generateFakeCustomer(mail),
      { addresses: [generateFakeAddress()] })
  }
}

/**
 * generate fake customer
 * @param {string} mail
 * @return {object}
 */
function generateFakeCustomer (mail) {
  return {
    name: faker.fake('{{name.firstName}}'),
    lastName: faker.fake('{{name.lastName}}'),
    mail: mail,
    phone: faker.fake('{{phone.phoneNumber}}'),
    addresses: []
  }
}

/**
 * generate fake address
 * @return {object}
 */
function generateFakeAddress () {
  return {
    street: faker.fake('{{address.streetAddress}}'),
    city: faker.fake('{{address.city}}'),
    zipCode: faker.fake('{{address.zipCode}}'),
    country: faker.fake('{{address.country}}')
  }
}

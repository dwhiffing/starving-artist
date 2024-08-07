const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE)
    .then((space) => space.getEnvironment('master'))
}

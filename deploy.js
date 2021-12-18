const ghpages = require('gh-pages')

ghpages.publish('build', {
    history: false,
    message: 'Deploy to gh-pages'
})

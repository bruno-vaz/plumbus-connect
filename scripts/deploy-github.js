const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/bruno-vaz/juno-test.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
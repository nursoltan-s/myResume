const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/nursoltan-s/nursoltan-s.github.com.git',
  },
  () => {
    console.log('Deploy complete')
  }
)

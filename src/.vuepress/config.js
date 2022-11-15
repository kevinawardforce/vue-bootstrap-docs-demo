const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vue-bootstrap',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://tectonic.github.io/awardforce-icons/public/css/icons.css'
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    displayAllHeaders: true,
    activeHeaderLinks: false,
    searchPlaceholder: 'Press / to search',
    lastUpdated: false, // string | boolean
    sidebarDepth: 0,
    repo: 'tectonic/vue-bootstrap',
    nav: [
      { text: 'Home', link: '/', target: '_self' },
    ],
    sidebar: {
      '/': require('./sidebar')
    },
  }
}

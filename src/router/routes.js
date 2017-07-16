export default [
  {
    path: '/',
    component: require('components/views/Layout/'),
    meta: {
      title: 'ok'
    },
    children: []
  },
  {
    path: '*',
    redirect: '/'
  }
]

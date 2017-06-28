export default [
  {
    path: '/',
    component: require('components/views/Layout/'),
    children: []
  },
  {
    path: '*',
    redirect: '/'
  }
]

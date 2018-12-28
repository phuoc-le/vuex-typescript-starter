import {makeHot, reload} from './util/hot-reload'

const homeComponent = () => import('./components/home').then(({HomeComponent}) => HomeComponent)
const aboutComponent = () => import('./components/about').then(({AboutComponent}) => AboutComponent)
const listComponent = () => import('./components/list').then(({ListComponent}) => ListComponent)
const addCustomerComponent = () => import('./components/customer/add').then(({AddCustomerComponent}) => AddCustomerComponent)
const listCustomerComponent = () => import('./components/customer/list').then(({ListCustomerComponent}) => ListCustomerComponent)
const updateCustomerComponent = () => import('./components/customer/update').then(({UpdateCustomerComponent}) => UpdateCustomerComponent)

if (process.env.ENV === 'development' && module.hot) {
  const homeModuleId = './components/home';
  const aboutModuleId = './components/about';
  const listModuleId = './components/list';
  const addCustomerModuleId = './components/customer/add';
  const updateCustomerModuleId = './components/customer/update';
  const listCustomerModuleId = './components/customer/list';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(homeModuleId, homeComponent,
    module.hot.accept('./components/home', () => reload(homeModuleId, (require('./components/home') as any).HomeComponent)))

  makeHot(aboutModuleId, aboutComponent,
    module.hot.accept('./components/about', () => reload(aboutModuleId, (require('./components/about') as any).AboutComponent)))

  makeHot(listModuleId, listComponent,
    module.hot.accept('./components/list', () => reload(listModuleId, (require('./components/list') as any).ListComponent)))

  makeHot(updateCustomerModuleId, updateCustomerComponent,
    module.hot.accept('./components/customer/update', () => reload(updateCustomerModuleId, (require('./components/customer/update') as any).UpdateCustomerComponent)))

  makeHot(addCustomerModuleId, addCustomerComponent,
    module.hot.accept('./components/customer/add', () => reload(addCustomerModuleId, (require('./components/customer/add') as any).AddCustomerComponent)))

  makeHot(listCustomerModuleId, listCustomerComponent,
    module.hot.accept('./components/customer/list', () => reload(listCustomerModuleId, (require('./components/customer/list') as any).ListCustomerComponent)))
}

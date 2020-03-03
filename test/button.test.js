import Vue from 'vue'
import Button from '../src/button.vue'
import Icon from '../src/icon.vue'
import ButtonGroup from '../src/button-group.vue'
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies);

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('测试button组件', () => {
  it('存在button组件', () => {
    expect(Button).to.be.ok;
  })
  it('设置icon', () => {
    let ButtonConstructor = Vue.extend(Button);
    let vm = new ButtonConstructor({
      propsData: {
        icon: "up"
      }
    })
    let div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div);
    let useEle = vm.$el.querySelector('use');
    console.log(vm.$el);
    let useHref =  useEle.getAttribute('xlink:href');
    expect(useHref).to.eq('#icon-up');
    vm.$el.remove();
    vm.$destroy();
  })
  it('测试传入的loading是否能正确显示loading图标',() => {
    // 获取button组件，创建新的组件实例vm并挂载到页面
    let ButtonConstructor = Vue.extend(Button);
    let vm = new ButtonConstructor({
      propsData:{
        icon: 'up',
        loading: true
      }
    });
    vm.$mount(); 
    // 在vm中找到<use>的xlink:href是否为#icon-loading
    let use = vm.$el.querySelector('use');
    let href = use.getAttribute('xlink:href');
    expect(href).to.eq('#icon-loading');
  })
  it('测试传入的icon-position是否能正确显示图标的位置（左）',()=>{
    // 获取button组件，创建新的组件实例vm
    let ButtonConstructor = Vue.extend(Button);
    let vm = new ButtonConstructor({
      propsData: {
        icon: 'up'
      }
    })
    // 页面中创建div，将vm挂载到页面
    let div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div);
    // 在vm中找到g-button,获取icon的order
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
  })
  it('测试传入的icon-position是否能正确显示图标的位置（右）', () => {
    // 获取button组件，创建新的组件实例vm
    let ButtonConstructor = Vue.extend(Button);
    let vm = new ButtonConstructor({
      propsData: {
        icon: 'up',
        iconPosition: 'right'
      }
    })
    // 页面中创建div，将vm挂载到页面
    let div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div);
    // 在vm中找到g-button,获取icon的order
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
  })
  it('测试button的点击事件', () => {
    // 获取button组件，创建新的组件实例vm并挂载到页面
    let ButtonConstructor = Vue.extend(Button);
    let vm = new ButtonConstructor({
      propsData: {
        icon: 'up'
      }
    })
    vm.$mount();
    let callback = sinon.fake();
    vm.$on('click',callback);
    // 执行点击
    console.log(vm.$el);
    let button = vm.$el;
    button.click();
    expect(callback).to.have.been.called;
  })
})
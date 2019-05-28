const K8 = require('k8mvc');
const Controller = K8.require('Controller');
const ControllerMixinORM = K8.require('controller-mixin/ORM');
const ControllerMixinView = K8.require('controller-mixin/View');
const ControllerMixinORMReadByHandle = K8.require('controller-mixin/ORMReadByHandle');

class ControllerORMView extends Controller{
  constructor(request, response){
    super(request, response);

    this.addMixin(this.mixinORM = new ControllerMixinORM(this));
    this.addMixin(this.mixinView = new ControllerMixinView(this));
    this.addMixin(this.mixinORMReadByHandle = new ControllerMixinORMReadByHandle(this));
  }

  action_index(){
    const instances = this.mixinORM.action_index();
    this.tpl = this.mixinView.getView('templates/orm-index', {instances : instances});
  }

  action_read(){
    const instance = this.mixinORM.action_read();
    this.tpl = this.mixinView.getView('templates/orm-instance', {instance: instance});
  }

  action_read_by_handle(){
    const instance = this.mixinORMReadByHandle.action_read_by_handle();
    this.tpl = this.mixinView.getView('templates/orm-instance', {instance: instance});
  }
}

module.exports = ControllerORMView;
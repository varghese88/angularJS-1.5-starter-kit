import controller from './main.controller'
import template from './main.html'
import "./main.scss"

let mainComponent = {
    restrict: 'E',
    bindings:{},
    template,
    controller,
    controllerAs:'mainCtrl'
}

export default mainComponent;
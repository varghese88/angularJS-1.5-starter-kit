import controller from './barchart.controller'

let barchartComponent = {
    restrict:'E',
    controller,
    controllerAs:'barchartCtrl',
    bindings:{
        data:'<'
    }
}
export default barchartComponent;
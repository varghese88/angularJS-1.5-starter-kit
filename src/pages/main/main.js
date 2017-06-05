import angular from 'angular'
import mainService from "../../service/main.service"
import mainComponent from './main.component'
import chartModule from '../../component/barChart/barchart'

const mainModule = angular.module('mainModule',[chartModule.name])
.component('main',mainComponent)
.factory('mainService',mainService);

export default mainModule;

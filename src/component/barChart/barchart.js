
import component from "./barchart.component"

import angular from 'angular'


const chartModule = angular.module('chartModule',[])
.component('barChart',component)

export default chartModule;
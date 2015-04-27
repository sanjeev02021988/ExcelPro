angular.module("myApp").directive("cell",[
    function(){
        return{
            restrict:"A",
            scope:{
                cellObj:"="
            },
            controller:function($scope){
                $scope.editingCellsName = false;
                $scope.fnEditingCellsName = function (){
                    $scope.editingCellsName = true;
                };
                $scope.fnDoneEditingCellsName = function(event){
                    if(!(event.type == "blur" || (event.type=="keypress" && event.keyCode ==13)))
                        return;
                    $scope.editingCellsName = false;
                }
            },
            template:
                "<div ng-click='fnEditingCellsName();'>" +
                    "<span ng-hide='editingCellsName' ng-bind='cellObj.value' style='height:100%'></span>" +
                    "<input type='text' ng-show='editingCellsName' ng-model='cellObj.value' ng-keypress='fnDoneEditingCellsName($event)' ng-blur='fnDoneEditingCellsName($event)' style='width:95%;'/>"+
                "</div>",
            link:function($scope,$element,attr){
            }
        }
    }
]);

angular.module('MainModule',[])
.controller('taskCtrl', function($scope) {
    
    // Task List
  $scope.taskList = [
      {description:'add your task ', priority:'1', index: 1}
  ];
     // Task
    $scope.task = {};
    
    // Add Tsk
    $scope.addTask = function() {
    $scope.taskList.push({
        index:$scope.taskList.length + 1, 
        description: $scope.task.description,
        priority: $scope.task.priority})};
    
    // Delete Task
    $scope.deleteTask = function(index){
        $scope.taskList.splice(index, 1);
    }
});
var app=angular
        .module("myModule",[])
        .controller("myController",function($scope){
            var items=[
                {imageUrl:"./images/img1.jpg",info:"This can be used to create a slide-out footer"},
                {imageUrl:"./images/img2.jpg",info:"50 Most used applications"},
                {imageUrl:"./images/img3.jpg",info:"Make digital clock with CSS and jquery"},
                {imageUrl:"./images/img4.jpg",info:"Using twitter bootstrap"}
            ]
            $scope.items=items
        });
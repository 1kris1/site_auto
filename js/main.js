var lines = [
    {
        x1:'',
        x2:'',
        x3:''
    },
    {
        x1:'',
        x2:'',
        x3:''
    },
    {
        x1:'',
        x2:'',
        x3:''
    }
];

var action_button = angular.module('ActionButton',[]);

action_button.controller('ActionCtrl',function($scope){
    $scope.data= lines;

    $scope.clickButton = function(pass){
        console.log(pass);
        // this.text('X');
    }
});

jQuery(function ($) {

    // $('button').on('click',function(){
    //     switch ($(this).val()){
    //         case "0":
    //             $(this).val('1').text('X');
    //             break;
    //         case "1":
    //             $(this).val('2').text('0');
    //             break;
    //         case "2":
    //             $(this).val('0').text('');
    //             break;
    //         default:
    //             $(this).val('0').text('');
    //             break;
    //     }
    // });
    // $('input').on('click',function(){
    //     switch ($(this).val()){
    //         case "X":
    //             $(this).val('O');
    //             break;
    //         case "O":
    //             $(this).val('');
    //             break;
    //         case "":
    //             $(this).val('X');
    //             break;
    //         default:
    //             $(this).val('');
    //             break;
    //     }
    // });
});
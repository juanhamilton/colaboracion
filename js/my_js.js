/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(".feedback-toggler").click(function() {
  $id = $(this).attr("id");
  $idClass = "#sec-" + $id;
  $($idClass).addClass("d-none");
  
})


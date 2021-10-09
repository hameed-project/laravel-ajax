
$(document).ready(function(){

  $('#addTodo').on('submit',function(event){
      event.preventDefault();
      // Get Alll Text Box Id's
      // name = $('#name').val();
      // description = $('#description').val();
      // category = $('#category').val();
      
      $.ajax({
        url: "/add-tasks",
        type:"POST",
        data:$('#addTodo').serialize(),
        // {
        //     "_token": "{{ csrf_token() }}",
        //     name:name,
        //     description:description,
        //     category:category,
        // },
        //Display Response Success Message
        success: function(data){
            //console.log('end');
            $('#addModal').modal('hide');
            location.reload(); 
        },
        error:function(error)
        {
          console.log(error);
        }
      });
  console.log("It failed");

  });
//End Insert ajax 



//Delete industry threat
$(".deleteBtn").click(function(){
  var id = $(this).attr('data-id');
   //console.log(id);
   
   $.ajax({
        url: '/delete-tasks/'+ id,
        type: 'get',
        dataType:"JSON",
        data:{
           id:id
        },
        success:function(data)
        {
          //console.log('deletd');
          location.reload(); 
          }
        
     });
  });
//End delete industry threat



//Edit ajax 
$(".editBtn").click(function(){
var id = $(this).attr('data-id');

$.ajax(
 {
    url: '/edit-tasks/'+ id,
    type: 'get',
    dataType:"JSON",
    data:{
       id:id
    },
    success:function(data)
    {
       console.log(data);
       $('#id').val(data[0].id);
       $('#name').val(data[0].name);
       $('#description').val(data[0].description);
       $('#category').val(data[0].category);
       $('#editModal').modal('show');
    }
 }
);

});

$('#editTodo').on('submit',function(event){
      event.preventDefault();
      $.ajax({
        url: '/update-tasks',
        type:"post",
        data:$('#editTodo').serialize(),
  
        //Display Response Success Message
        success: function(data){
            //console.log('end');
            $('#editModal').modal('hide');
            location.reload(); 
        },
        error:function(error)
        {
          console.log(error);
        }
      });  
});

});

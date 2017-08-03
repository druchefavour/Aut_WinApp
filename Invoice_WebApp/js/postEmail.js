var post_url = $(this).attr("action"); //get form action url
var request_method = $(this).attr("method"); //get form GET/POST method
var form_data = new FormData(this);  //constructs key/value pairs r

$.ajax({//ajax form submit
  url: post_url,
  type: request_method,
  data: form_data,
  dataType; "json",
  contentType: false,
  cache: false,
  processData: false
}).done(function (res) {//fetch server "json" messages when done
  if (res.type == "error"){
    $('#sent_results').html('<div class="error">'+ res.text +"</div>");
  }
  if(res.type == 'done') {
    $("#contact_results").html('<div class="success">'+ res.text +"</div>");
  }
})

$(function(){
  function buildHTML(message){
    var text = message.text ? `${ message.text }` : "";
    var image = message.image ? `<img src= ${ message.image }>` : "";

    var html = `<div class= "chat--message__box">
                  <div class="chat--message__upper">
                    <p class="chat--message__upper__user">
                     ${ message.user_name }
                    </p>
                    <p class="chat--message__upper__time">
                     ${message.created_at}
                    </p>
                  </div>
                  <div class="chat--message__text">
                    <p class="chat--message__content">
                      ${text}
                    </p>
                    <img class="chat--form__image">
                      ${image}
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url ,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat--message').append(html)
      $('.chat--form--input--box__text').val('');
      $('#message_image').val('');
      $('.chat--form__submit').attr('disabled', false);
      var target = $('.chat--message__box').last();
      var position = target.offset().top + $('.chat--message').scrollTop();
      $('.chat--message').animate({
          scrollTop: position
        });
    
      
      })
      .fail(function(){
      alert('error');
      console.log("test");
      $('.chat--form__submit').attr('disabled', false);
      })
})
})


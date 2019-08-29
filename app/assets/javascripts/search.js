$(function() {

  var search_list = $("#user-search-result");
  var member_list = $("#member_search_result");

  function appendUsers(users) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${users.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${users.id}" data-user-name="${users.name}">追加</div>
                </div>`
                
                 search_list.append(html);
                 
   }
   function addusers(userName,userId){
   var html =`<div class='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value=${userId}>
                <p class='chat-group-user__names'>${userName}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`  
              member_list.append(html);
              $("#user-search-result").empty();
   }
   $("#user-search-result").on("click", ".chat-group-user__btn--add", function () {
              var userName= $(this).data('user-name');
              var userId= $(this).data('user-id');
              addusers(userName,userId);
});

$(document).on("click", '.user-search-remove', function() {
  $(this).parent().remove();
});
   

   $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      $.ajax({
        type: 'GET',
        url: "/users",
        data:  { keyword: input },
        dataType: 'json',
        contentType: false
      })
      .done(function(users) {
        $("#user-search-result").empty();
        if (users.length !== 0) {
          users.forEach(function(users){
            appendUsers(users);
          });}
        }
      )
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    })})
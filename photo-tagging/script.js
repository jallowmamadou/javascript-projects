function ShowTags(){
  return {
    
    init: function(){
      this.build();
      this.bind();
    },
    
    build: function(){
      this.refresh();
    },
    
    refresh: function(){
      this.populateTagList();
    },
    
    bind: function(){
      // Click function gets "this" set to the button.
      // However, we want "this" to be the ShowTags object.
      $("#show-tags-button").click(this.toggleShowEvent.bind(this));
    },
    
    toggleShowEvent: function(event){
      $("#canvas").toggleClass("show-tags");
      this.refresh();
    },
    
    populateTagList: function(){
      var ul = $("#show-tags");
      
      ul.html("");
      
      $.each(Data.tags, function(index, value){
        $("<li><strong>" + value.user + "</strong></li>")
          .css({
            "top": value.y + "%",
            "left": value.x + "%"
          })
          .appendTo(ul);
      });
    }
    
  };
};

function MakeTags(){
  return {
    
    init: function(){
      this.build();
      this.bind();
    },
    
    build: function(){
      this.populateUserList();
    },
    
    bind: function(){
      $("#make-tags-button").click(this.startTaggingEvent);
      $("#make-tags").click(this.photoClickedEvent);
      $("#make-tags-list li").click(this.userClickedEvent);
    },
    
    startTaggingEvent: function(event){
      $("#canvas").toggleClass("make-tags");
    },
    
    photoClickedEvent: function(event){
      if(event.target.id != "make-tags"){
        return;
      }
      
      var canvas = $("#canvas");
      var x = (parseFloat(event.pageX - canvas.offset().left) / canvas.width()) * 100;
      var y = (parseFloat(event.pageY - canvas.offset().top) / canvas.height()) * 100;
      
      $("#make-tags-unit")
        .data("x", x)
        .data("y", y)
        .css({
          "left": x + "%",
          "top": y + "%"
        })
        .show();
    },
    
    userClickedEvent: function(event){
      var user = $(this).text();
      var x = $("#make-tags-unit").data("x");
      var y = $("#make-tags-unit").data("y");
      
      Data.tags.push({
        user: user,
        x: x,
        y: y
      });
      
      $("#make-tags-unit").hide();
    },
    
    populateUserList: function(){
      var html = "";
      
      $.each(Data.users, function(index, value){
        html += "<li>" + value + "</li>";
      });
      
      $("#make-tags-list").html(html);
    }
  };
};



$(document).ready(function(){

  st = ShowTags();
  st.init();
  
  mt = MakeTags();
  mt.init();
  
});
function ShowTags(){
  return {
    
    init: function(){
      this.build();
      this.bind();
    },
    
    build: function(){
      this.populateTagList();
    },
    
    bind: function(){
      // Learn click events.
      $("#show-tags-button").click(this.toggleShowEvent);
    },
    
    toggleShowEvent: function(event){
      // Use classes to control visual changes on page. 
      $("#canvas").toggleClass("show-tags");
    },
    
    populateTagList: function(){
      var ul = $("#show-tags");
      
      // Clear out, before rebuild.
      ul.html("");

      // Learn jQuery iteration helper and utility functions.
      $.each(Data.tags, function(index, value){
        
        // Learn chaining jQuery methods
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
    },
    
    bind: function(){
      $("#make-tags-button").click(startTaggingEvent);
      
      // Listen for click on canvas
      // Listen for click on user in tag list
    },
    
    startTaggingEvent: function(event){
      $("#canvas").addClass("tagging-mode");
    },
    
    canvasClickedEvent: function(event){
      
    },
    
    tagUserSelected: function(event){
      
    },
    
    populateUserList: function(){
      
    },
    
    showTagUnit: function(){
      
    },
    
    hideTagUnit: function(){
      
    }
    
  };
};



$(document).ready(function(){

  st = ShowTags();
  st.init();
  
  mt = MakeTags();
  mt.init();
  
});
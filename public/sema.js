
 
 $(document).ready(function(){
                   $("#temp").progress();
                   $("#humid").progress();
                   $('.ui.labeled.icon.sidebar') .sidebar('toggle');
                   
                     $('.ui.checkbox').eq(0).checkbox().checkbox({
                            onChecked: function() {
                              $.post("/rooms",{led0:1});
                            },
                            onUnchecked: function() {
                              $.post("/rooms",{led0:0});
                            },
                    
                     });
                     
                      $('.ui.checkbox').eq(1).checkbox().checkbox({
                            onChecked: function() {
                              $.post("/rooms",{led1:1});
                              
                            },
                            onUnchecked: function() {
                              $.post("/rooms",{led1:0});
                               
                            },
                    
                     });
                     
                     
                      $('.ui.checkbox').eq(2).checkbox().checkbox({
                            onChecked: function() {
                              $.post("/rooms",{led2:1});
                            },
                            onUnchecked: function() {
                              $.post("/rooms",{led2:0});
                            },
                    
                     });
                    
        
                   
                  
                   
               });
               
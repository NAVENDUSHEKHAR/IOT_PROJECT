
 
 $(document).ready(function(){
                   $("#temp").progress();
                   $("#humid").progress();
                   $("#gas").progress();
                  
                   
                     $('.ui.checkbox').eq(0).checkbox().checkbox({
                            onChecked: function() {
                              $.post("/room",{led0:1});
                            },
                            onUnchecked: function() {
                              $.post("/room",{led0:0});
                            },
                    
                     });
                     
                      $('.ui.checkbox').eq(1).checkbox().checkbox({
                            onChecked: function() {
                              $.post("/room",{led1:1});
                              
                            },
                            onUnchecked: function() {
                              $.post("/room",{led1:0});
                               
                            },
                    
                     });
                     
                     
                      $('.ui.checkbox').eq(2).checkbox().checkbox({
                            onChecked: function() {
                              $.post("/room",{led2:1});
                            },
                            onUnchecked: function() {
                              $.post("/room",{led2:0});
                            },
                    
                     });
                    
        
                   
                  
                   
               });
               
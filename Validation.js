/*
This JavaScript is Written By Sai Krishna Teja and is Copyright Protected. 


Apply a Validation
------------------
2 step Process 

Add 

1. class="CustomValidation"
2. data-aeon-rule = "[Type of Validation]"
                    a. Numeric
                    b.AlphaNumeric
                    c.Date
                    
Additional rules
----------------
    
1. data-aeon-maxlength="[Required Max Length]"
2. data-aeon-Required = "true"
    


aeon is My Nick Name so i have used it in Data Attributes
*/

$(document).ready(function () {
  $('.CustomValidation').keyup(function () {
    
    ValidationObject.Validate(this);
    ValidationObject.MaxLength(this);
    ValidationObject.Required(this);
  });
});

var ValidationObject = {

Variables: {
 
}, 
    
Validate : function (element) {
    var ValidationType = $(element).data("aeon-rule");
    
     switch(ValidationType){
          case "AlphaNumeric" : ValidationObject.AlphaNumeric(element);
              break;
        case "Alpha" : ValidationObject.Alpha(element);
              break;         
         case "Numeric"    : ValidationObject.Numeric(element);
              break;
        case "Date"    : ValidationObject.Date(element);
              break;
          default: ValidationObject.AlphaNumeric(element);
              break;
      }
   
},

Alpha:  function (txt) {
      txt.value = txt.value.replace(/[^a-zA-Z\n\r]+/g, '');
},
    
AlphaNumeric:  function (txt) {
      txt.value = txt.value.replace(/[^a-zA-Z 0-9\n\r]+/g, '');
},
    
Numeric: function (txt) {
     txt.value = txt.value.replace(/[^0-9\n]+/g, '');
    },

Date: function (txt) {
  var m = txt.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  txt.value = (m) ? text.value : null;
},
    
Required : function(txt) {
    var element = txt;
   if($(element).data("aeon-required") == true)
        {
            if(txt.value.length < 1)
          {
           $(txt).attr("placeholder","Required Field");
          }
      }
},
    
MaxLength :  function (element) {
    if($(element).data("aeon-maxlength") > 0)
        {
            var maxlen = $(element).data("aeon-maxlength");
            if(element.value.length > maxlen)
                {
                   element.value = element.value.substr(0, maxlen); 
                }
}
}
        
};

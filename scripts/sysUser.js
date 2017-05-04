$(() => {
	var $main = $('main'),
		$containerDiv = $('<div>').attr({'class':'container'}),
		$bgDiv = $('<div>').attr({'class': 'bg'}),
		$form = $('<form>').attr({'action':"http://www.w3schools.com", 'method':"post"}),
        $table = $('<table>'),
        $caption = $('<caption>'),
        $tbody1 = $('<tbody>').attr({'class':'first_body', 'id':'one'}),
        $tbody2 = $('<tbody>').attr({'class':'second_body', 'id':'two'}),
        $tfoot = $('<tfoot>'),
        $options = [],
        $tfootButtons = [],
        arrTR = [],
        arrTR2 = [],
        arrTR3 = [],
        arrTD = [],
        arrTD2 = [],
        arrTD3 = [],
        $caption = $('<caption>', { text: 'Sys user' }),
        arrtfootButtons = ['Cancel', 'Save', '', ''],
        arroptions = ['Area manager','Region manager','Executor'],
        dataoptions = ['Armenia', 'England', 'Russian', 'USA'];

        $main.append($containerDiv);
        $containerDiv.append($form, $bgDiv);
        $form.append($table);
        $table.append($caption,$tbody1,$tbody2,$tfoot);

        for (var i = 0; i < user1.length; ++i) {
            arrTR[i] = $('<tr>');
            $tbody1.append(arrTR);

            for (var j = 0; j < user1[i].length; ++j) {
                arrTD[j] = $('<td>');
                arrTR[i].append(arrTD[j]);
                arrTD[j].append($tagName = $('<' + user1[i][j].tagName + '>'));
                $tagName.text(user1[i][j].name)
                    .attr({
                        'id': user1[i][j].id, 'type': user1[i][j].type, 'for': user1[i][j].for, 'placeholder': user1[i][j].placeholder,
                           'maxlength': user1[i][j].maxlength, 'required': user1[i][j].required, 'accesskey': user1[i][j].accesskey,
                              'pattern': user1[i][j].pattern, 'tabindex': user1[i][j].tabindex, 'autocomplete': user1[i][j].autocomplete
                    });
            }
        }
        for (let i = 0; i < arroptions.length; ++i) {
            $('select').append($options[i] = $('<option>').text(arroptions[i]));
        }  
        for(var i = 0; i < user2.length; ++i){
        	arrTR2[i] = $('<tr>');
            $tbody2.append(arrTR2);
            arrTD2[i] = $('<td>');
            arrTR2[i].append(arrTD2[i]);
            for(var j = 0; j < user2[i].length; ++j){
            	
                arrTD2[i].append($tagName = $('<' + user2[i][j].tagName + '>'));
                $tagName.text(user2[i][j].name)
                    .attr({
                        'id': user2[i][j].id, 'for': user2[i][j].for, 'type': user2[i][j].type, 'class': user2[i][j].class,
                        	'value': user2[i][j].value, 'placeholder': user2[i][j].placeholder, 'autofocus': user2[i][j].autofocus,
                        		'list': user2[i][j].list, 'title': user2[i][j].title
                           
                    });
            }
        }
        for (let i = 0; i < dataoptions.length; ++i) {
           $('datalist').append($options[i] = $('<option>').text(dataoptions[i]));
        }  
        for (var i = 0; i < arrtfootButtons.length; ++i) {
            $($tfoot).append($tfootButtons[i] = $('<button>').text(arrtfootButtons[i]));
        }
        $( "button:nth-of-type(1)").attr({'class':'cancelBtn', 'type':'reset', 'title': 'Cancel' });
        $( "button:nth-of-type(2)").attr({'class':'saveBtn', 'type':'submit', 'title': 'Save' });
        $( "button:nth-of-type(3)").attr({'class':'prev', 'onclick':'myFunctionTwo()', 'title': 'Prev' });
        $( "button:nth-of-type(4)").attr({'class':'next', 'onclick':'myFunction()', 'title': 'Next' });
});
function myFunction() {
	$("#one").css('display' ,'none');
    $("#two").css('display' ,'block');
}
function myFunctionTwo() {
	$("#one").css('display' ,'block');
	$("#two").css('display' ,'none'); 
}
// var password = $('#password').val(),
//     confirm_password = $('#confirm').val();
        
//     function validatePassword() {
//       if(password != confirm_password) {
//         alert($('#password').val());
//         confirm_password.setCustomValidity("Passwords Don't Match");
//       } else {
//         confirm_password.setCustomValidity('');
//       }
//     }
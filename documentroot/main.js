
<<<<<<< HEAD
$(document).ready(startApp);

function startApp(){
    addEventListeners();
}

function addEventListeners(){
    $("button").click(handleLogin);
}

function handleLogin(){
    const username = $('input[name=username]').val();
    const password = $('input[name=password]').val();

    $.ajax({
        url:'/login',
        method:'post',
        datatype:'json',
        data:{
            user:username,
            pass:password

        }
    }).then(function(response){

    })

}

=======

$(document).ready( startApp );

function startApp(){
	addEventListeners();
}

function addEventListeners(){
	$("button").click( handleLogin );
}

function handleLogin(){
	const username = $("input[name=username]").val();
	const password = $("input[name=password]").val();

	$.ajax({
		url: '/login',
		method: 'post',
		dataType: 'json',
		data: {
			user: username,
			pass: password
		}
	}).then( function( response ){

	})
}
>>>>>>> b0809c564c01dbe6f14fcd1fb97265317c3eddf7

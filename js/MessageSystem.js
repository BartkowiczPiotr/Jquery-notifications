const MessageSystem = function(settings){

	var options = {
		mode : '',
		type : '',
		message: ''
	}

	var icon;
	var color;

	this.construct = function(settings){
		$.extend(options, settings);
	}

	this.ShowMessage = function(){

		switch(options.mode){
			case 'label':
				Label();
			break;
			case 'notyfication':
				Notyfication();
			break;
			default:
				alert('Select mode of displayed message');
		};

	}
	
	const Label = function(){
		
		if(options.type=='success'){
			icon = 'fas fa-check-circle';
			color = '#71b200';
		} else if (options.type =='error'){
			icon = 'fas fa-exclamation-triangle';
			color = '#c34d4d';
		}
		
		$('.ms-label').remove();

		var label = $(`
		<div class="ms-label" style="background:${color}">
			<div class="ms-label-icon">
				<span><i class="${icon} fa-fw" aria-hidden="true"></i></span>
			</div><div class="ms-label-text">
				<p>${options.message}</p>
			</div>
			<div class="ms-label-close">
				<span><i class="fas fa-times fa-fw" aria-hidden="true"></i></span>
			</div>
		</div>`);

		$('#ms-label-area').append(label);
		
	};

	const Notyfication = function(){
		
		if(options.type=='success'){
			icon = 'far fa-check-circle';
			color = '#71b200';
		} else if (options.type =='error'){
			icon = 'fas fa-exclamation-triangle';
			color = '#c34d4d';
		}

		if($('#ms-notyfication-area').length === 0){

			$(document.body).append('<div id="ms-notyfication-area"></div>');

		};

		var notyfication = $(`<div class="ms-notyfication">
			<div class="ms-notyfication-body">
				<span class="close-ms-notyfication"><i class="fas fa-times fa-fw" aria-hidden="true"></i></span>
				<div class="ms-notyfication-icon">
					<span><i class=" ${icon} fa-fw" aria-hidden="true" style="color:${color}"></i></span>
				</div>
				<div class="ms-notyfication-text">
					<p class="ms-notyfication-message">${options.message}</p>
				</div>
			</div>
		</div>`).hide();

		$('#ms-notyfication-area').append(notyfication);
		notyfication.fadeIn(200);
		
		setTimeout(function() {

			notyfication.fadeOut(200, function(){

				$(this).remove();

				if(!$('#ms-notyfication-area').html()){

					$('#ms-notyfication-area').remove();

				}

			});

		}, 8000);

	};

	this.construct(settings);

};

$(document).on('click', '.close-ms-notyfication', function(){

	$(this).parents('.ms-notyfication').fadeOut(200, function(){
		$(this).remove();
	});

});

$(document).on('click', '.ms-label-close', function(){

	$(this).parents('.ms-label').remove();

});
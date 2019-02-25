class MessageSystem {

	constructor(settings){
		
		this.mode = settings.mode || "notyfication";
		this.type = settings.type || "success";
		this.message = settings.message || "";

	}

	showMessage() {

		switch(this.mode){
			case 'label':
				this.label();
			break;
			case 'notyfication':
				this.notyfication();
			break;
			default:
				alert('Select mode of displayed message');
		};

	};

	notyfication() {

		let icon;
		let color;
		
		if(this.type=='success'){
			icon = 'far fa-check-circle';
			color = '#71b200';
		} else if (this.type =='error'){
			icon = 'fas fa-exclamation-triangle';
			color = '#c34d4d';
		}

		if($('#ms-notyfication-area').length === 0){

			const area = $(`<div id="ms-notyfication-area"></div>`);
			$(document.body).append(area);

		};

		const notyfication = $(`<div class="ms-notyfication">
			<div class="ms-notyfication-body">
				<span class="close-ms-notyfication"><i class="fas fa-times fa-fw" aria-hidden="true"></i></span>
				<div class="ms-notyfication-icon">
					<span><i class=" ${icon} fa-fw" aria-hidden="true" style="color:${color}"></i></span>
				</div>
				<div class="ms-notyfication-text">
					<p class="ms-notyfication-message">${this.message}</p>
				</div>
			</div>
		</div>`).hide();

		if($(window).width() < '600'){

			$('.ms-notyfication').remove();
			$('#ms-notyfication-area').append(notyfication);
			notyfication.fadeIn(200);

		}else{

			$('#ms-notyfication-area').append(notyfication);
			notyfication.fadeIn(200);

		}
		
		setTimeout(() => {

			notyfication.fadeOut(200, function(){

				$(this).remove();

				if(!$('#ms-notyfication-area').html()){

					$('#ms-notyfication-area').remove();

				}

			});

		}, 10000);

	};

};

$(document).on('click', '.close-ms-notyfication', function(){

	$(this).parents('.ms-notyfication').fadeOut(200, function(){
		$(this).remove();
	});

});

$(document).on('click', '.ms-label-close', function(){

	$(this).parents('.ms-label').remove();

});
'use strict'

$('.navigasyon menu > ul > li').slice(0,4).hover(

	function(){

		var test = $(this).width();
		$(this).css({
			backgroundColor: '#12a3d6',
			color: '#c5f4ff',
			fontSize: '15px',
			fontWeight: 'bold',
			borderBottom: '12px solid #0080b7',
			paddingTop: '12px'

		});

		$(this).width(test);

	},

	function(){

		$(this).css({
			backgroundColor: '#fff',
			color: '#515862',
			fontSize: '14px',
			fontWeight: '',
			borderBottom: '',
			paddingTop: ''

		});

	}

);
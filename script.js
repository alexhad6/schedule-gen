let id, type, cell, num, sec, sem;
var rc={}, rl={}, rc1={}, rc2={}, rl1={}, rl2={};
$(document).ready(function(){
	$('.s1, .s2').focus(function(){
		id=$(this).attr('id');
		type=id.charAt(0);
		cell=id.charAt(1);
		sem=id.charAt(2);
		num=Number(id.charAt(3));
		sec=(num===0||num===2)?1:2;
	});
	$('.s1, .s2').keyup(function(){
		window['r'+type][cell+sem]=$('#'+id).val();
		window['r'+type+sec][cell+sem]=$('#'+id).val();
	});
	$('#repeat41, #repeat42').hover(
		function(){
			var tsem=$(this).attr('id').slice(-1)===sem?sem:'';
			for(let i=0; i<4; i++){
				$('#c'+cell+tsem+i+', #l'+cell+tsem+i).parent().stop().animate({backgroundColor:'rgba(0,0,0,.15)'}, 75);
			}
		}, function(){
			var tsem=$(this).attr('id').slice(-1)===sem?sem:'';
			for(let i=0; i<4; i++){
				$('#c'+cell+tsem+i+', #l'+cell+tsem+i).parent().stop().animate({backgroundColor:'transparent'}, 75);
			}
		}
	);
	$('#repeat21, #repeat22').hover(
		function(){
			let tsem=$(this).attr('id').slice(-1)===sem?sem:'';
			for(let i=0; i<2; i++){
				$('#c'+cell+tsem+(num+2*i)%4+", #l"+cell+tsem+(num+2*i)%4).parent().stop().animate({backgroundColor:'rgba(0,0,0,.15)'}, 75);
			}
		}, function(){
			let tsem=$(this).attr('id').slice(-1)===sem?sem:'';
			for(let i=0; i<2; i++){
				$('#c'+cell+tsem+(num+2*i)%4+", #l"+cell+tsem+(num+2*i)%4).parent().stop().animate({backgroundColor:'transparent'}, 75);
			}
		}
	);
	$('#copy1, #copy2, #clear1, #clear2').hover(
		function(){
			let tsem=$(this).attr('id').slice(-1);
			$('.s'+tsem).parent().stop().animate({backgroundColor:'rgba(0,0,0,.15)'}, 75);
		}, function(){
			let tsem=$(this).attr('id').slice(-1);
			$('.s'+tsem).parent().stop().animate({backgroundColor:'transparent'}, 75);
		}
	);
	$('#repeat41, #repeat42').click(function(){
		let tsem=$(this).attr('id').slice(-1)===sem?sem:'';
		for(let i=0; i<4; i++){
			if(rc[cell+tsem]!==undefined){$('#c'+cell+tsem+i).val(rc[cell+tsem]);}
			if(rl[cell+tsem]!==undefined){$('#l'+cell+tsem+i).val(rl[cell+tsem]);}
		}
	});
	$('#repeat21, #repeat22').click(function(){
		let tsem=$(this).attr('id').slice(-1)===sem?sem:'';
		for(let i=0; i<2; i++){
			if(window['rc'+sec][cell+tsem]!==undefined){$('#c'+cell+tsem+(num+2*i)%4).val(window['rc'+sec][cell+tsem]);}
			if(window['rl'+sec][cell+tsem]!==undefined){$('#l'+cell+tsem+(num+2*i)%4).val(window['rl'+sec][cell+tsem]);}
		}
	});
	$('#copy1, #copy2').click(function(){
		let tsem=$(this).attr('id').slice(-1), osem=tsem==='1'?'2':'1';
		console.log('tsem: '+tsem+' osem: '+osem);
		for(let i=0; i<$('.s'+tsem).length; i++){
			$('.s'+tsem)[i].value=$('.s'+osem)[i].value;
		}
	});
	$('#clear1, #clear2, #copy1, #copy2').click(function(){
		rc={}, rl={}, rc1={}, rc2={}, rl1={}, rl2={};
	});
	$('#print1, #print2').click(function(){
		let sem = $(this).attr('id').charAt(5);
		print(sem);
	});
});
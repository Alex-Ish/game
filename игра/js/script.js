$(document).ready(function(){
	let arr = localStorage.getItem('arr2');
	arr = JSON.parse(arr);
	console.log(arr)
	let arr2 = localStorage.getItem('arr3');
	arr2 = JSON.parse(arr2);
	console.log(arr2);
	var arr3=[];
	let shot;
	$('.' + 'r' + arr[19]).css("background","url('img/11.png')");
	$('.' + 'r' + arr[18]).css("background","url('img/11.png')");
	$('.' + 'r' + arr[17]).css("background","url('img/11.png')");
	$('.' + 'r' + arr[16]).css("background","url('img/11.png')");
	if (arr[1]-arr[0]==10) {
		$('.' + 'r' + arr[0]).css("background","url('img/41(2).png')");
		$('.' + 'r' + arr[1]).css("background","url('img/42(2).png')");
		$('.' + 'r' + arr[2]).css("background","url('img/43(2).png')");
		$('.' + 'r' + arr[3]).css("background","url('img/44(2).png') no-repeat, #fff");
	}
	else {
		$('.' + 'r' + arr[0]).css("background","url('img/41.png')");
		$('.' + 'r' + (arr[0]+1)).css("background","url('img/42.png')");
		$('.' + 'r' + (arr[0]+2)).css("background","url('img/43.png')");
		$('.' + 'r' + (arr[0]+3)).css("background","url('img/44.png') no-repeat, #fff");
	}
	if (arr[5]-arr[4]==10) {
		$('.' + 'r' + arr[4]).css("background","url('img/31(2).png')");
		$('.' + 'r' + arr[5]).css("background","url('img/32(2).png')");
		$('.' + 'r' + arr[6]).css("background","url('img/33(2).png')");
	}
	else {
		$('.' + 'r' + arr[4]).css("background","url('img/31.png')");
		$('.' + 'r' + (arr[5])).css("background","url('img/32.png')");
		$('.' + 'r' + (arr[6])).css("background","url('img/33.png')");
	}
	if (arr[8]-arr[7]==10) {
		$('.' + 'r' + arr[7]).css("background","url('img/31(2).png')");
		$('.' + 'r' + arr[8]).css("background","url('img/32(2).png')");
		$('.' + 'r' + arr[9]).css("background","url('img/33(2).png')");
	}
	else {
		$('.' + 'r' + arr[7]).css("background","url('img/31.png')");
		$('.' + 'r' + (arr[8])).css("background","url('img/32.png')");
		$('.' + 'r' + (arr[9])).css("background","url('img/33.png')");
	}
	if (arr[11]-arr[10]==10) {
		$('.' + 'r' + arr[10]).css("background","url('img/31(2).png')");
		$('.' + 'r' + arr[11]).css("background","url('img/33(2).png')");
	}
	else {
		$('.' + 'r' + arr[10]).css("background","url('img/31.png')");
		$('.' + 'r' + (arr[11])).css("background","url('img/33.png')");
	}
	if (arr[13]-arr[12]==10) {
		$('.' + 'r' + arr[12]).css("background","url('img/31(2).png')");
		$('.' + 'r' + arr[13]).css("background","url('img/33(2).png')");
	}
	else {
		$('.' + 'r' + arr[12]).css("background","url('img/31.png')");
		$('.' + 'r' + (arr[13])).css("background","url('img/33.png')");
	}
		if (arr[15]-arr[14]==10) {
		$('.' + 'r' + arr[14]).css("background","url('img/31(2).png')");
		$('.' + 'r' + arr[15]).css("background","url('img/33(2).png')");
	}
	else {
		$('.' + 'r' + arr[14]).css("background","url('img/31.png')");
		$('.' + 'r' + (arr[15])).css("background","url('img/33.png')");
	}
	$('.z1').click(function(event){
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==1){
				$('.z1').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=1){
				$('.z1').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z2').click(function(event){
				for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==2){
				$('.z2').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=2){
				$('.z2').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z3').click(function(event){
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==3){
				$('.z3').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=3){
				$('.z3').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z4').click(function(event){
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==4){
				$('.z4').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=4){
				$('.z4').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z5').click(function(event){
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==5){
				$('.z5').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=5){
				$('.z5').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z6').click(function(event){
				for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==6){
				$('.z6').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=6){
				$('.z6').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z7').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==7){
				$('.z7').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=7){
				$('.z7').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z8').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==8){
				$('.z8').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=8){
				$('.z8').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z9').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==9){
				$('.z9').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=9){
				$('.z9').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z10').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==10){
				$('.z10').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=10){
				$('.z10').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z11').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==11){
				$('.z11').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=11){
				$('.z11').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z12').click(function(event){		
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==12){
				$('.z12').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=12){
				$('.z12').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z13').click(function(event){		
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==13){
				$('.z13').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=13){
				$('.z13').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z14').click(function(event){		
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==14){
				$('.z14').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=14){
				$('.z14').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z15').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==15){
				$('.z15').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=15){
				$('.z15').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z16').click(function(event){
					for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==16){
				$('.z16').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=16){
				$('.z16').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.z17').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==17){
				$('.z17').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=17){
				$('.z17').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z18').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==18){
				$('.z18').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=18){
				$('.z18').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z19').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==19){
				$('.z19').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=19){
				$('.z19').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z20').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==20){
				$('.z20').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=20){
				$('.z20').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z21').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==21){
				$('.z21').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=21){
				$('.z21').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z22').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==22){
				$('.z22').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=22){
				$('.z22').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z23').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==23){
				$('.z23').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=23){
				$('.z23').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z24').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==24){
				$('.z24').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=24){
				$('.z24').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z25').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==25){
				$('.z25').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=25){
				$('.z25').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z26').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==26){
				$('.z26').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=26){
				$('.z26').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z27').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==27){
				$('.z27').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=27){
				$('.z27').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z28').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==28){
				$('.z28').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=28){
				$('.z28').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z29').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==29){
				$('.z29').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=29){
				$('.z29').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z30').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==30){
				$('.z30').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=30){
				$('.z30').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z31').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==31){
				$('.z31').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=31){
				$('.z31').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z32').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==32){
				$('.z32').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=32){
				$('.z32').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z33').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==33){
				$('.z33').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=33){
				$('.z33').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z34').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==34){
				$('.z34').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=34){
				$('.z34').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z35').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==35){
				$('.z35').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=35){
				$('.z35').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z36').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==36){
				$('.z36').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=36){
				$('.z36').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z37').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==37){
				$('.z37').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=37){
				$('.z37').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z38').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==38){
				$('.z38').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=38){
				$('.z38').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z39').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==39){
				$('.z39').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=39){
				$('.z39').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z40').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==40){
				$('.z40').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=40){
				$('.z40').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z41').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==41){
				$('.z41').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=41){
				$('.z41').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z42').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==42){
				$('.z42').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=42){
				$('.z42').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z43').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==43){
				$('.z43').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=43){
				$('.z43').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z44').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==44){
				$('.z44').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=44){
				$('.z44').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z45').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==45){
				$('.z45').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=45){
				$('.z45').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z46').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==46){
				$('.z46').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=46){
				$('.z46').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z47').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==47){
				$('.z47').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=47){
				$('.z47').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z48').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==48){
				$('.z48').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=48){
				$('.z48').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z49').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==49){
				$('.z49').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=49){
				$('.z49').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z50').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==50){
				$('.z50').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=50){
				$('.z50').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z51').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==51){
				$('.z51').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=51){
				$('.z51').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z52').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==52){
				$('.z52').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=52){
				$('.z52').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z53').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==53){
				$('.z53').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=53){
				$('.z53').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z54').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==54){
				$('.z54').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=54){
				$('.z54').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z55').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==55){
				$('.z55').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=55){
				$('.z55').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z56').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==56){
				$('.z56').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=56){
				$('.z56').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z57').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==57){
				$('.z57').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=57){
				$('.z57').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z58').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==58){
				$('.z58').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=58){
				$('.z58').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z59').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==59){
				$('.z59').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=59){
				$('.z59').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z60').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==60){
				$('.z60').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=4){
				$('.z60').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z61').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==61){
				$('.z61').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=4){
				$('.z61').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z62').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==62){
				$('.z62').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=62){
				$('.z62').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z63').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==63){
				$('.z63').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=63){
				$('.z63').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z64').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==64){
				$('.z64').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=64){
				$('.z64').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z65').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==65){
				$('.z65').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=65){
				$('.z65').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z66').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==66){
				$('.z66').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=66){
				$('.z66').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z67').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==67){
				$('.z67').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=67){
				$('.z67').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z68').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==68){
				$('.z68').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=68){
				$('.z68').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z69').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==69){
				$('.z69').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=69){
				$('.z69').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z70').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==70){
				$('.z70').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=70){
				$('.z70').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z71').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==71){
				$('.z71').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=71){
				$('.z71').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z72').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==72){
				$('.z72').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=72){
				$('.z72').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z73').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==73){
				$('.z73').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=73){
				$('.z73').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z74').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==74){
				$('.z74').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=74){
				$('.z74').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z75').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==75){
				$('.z75').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=75){
				$('.z75').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z76').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==76){
				$('.z76').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=76){
				$('.z76').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z77').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==77){
				$('.z77').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=77){
				$('.z77').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z78').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==78){
				$('.z78').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=78){
				$('.z78').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z79').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==79){
				$('.z79').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=79){
				$('.z79').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z80').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==80){
				$('.z80').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=80){
				$('.z80').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z81').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==81){
				$('.z81').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=81){
				$('.z81').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z82').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==82){
				$('.z82').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=82){
				$('.z82').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z83').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==83){
				$('.z83').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=83){
				$('.z83').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z84').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==84){
				$('.z84').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=84){
				$('.z84').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z85').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==85){
				$('.z85').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=85){
				$('.z85').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z86').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==86){
				$('.z86').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=86){
				$('.z86').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z87').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==87){
				$('.z87').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=87){
				$('.z87').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z88').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==88){
				$('.z88').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=88){
				$('.z88').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z89').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==89){
				$('.z89').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=89){
				$('.z89').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z90').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==90){
				$('.z90').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=90){
				$('.z90').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z91').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==91){
				$('.z91').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=91){
				$('.z91').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z92').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==92){
				$('.z92').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=92){
				$('.z92').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z93').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==93){
				$('.z93').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=93){
				$('.z93').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z94').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==94){
				$('.z94').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=94){
				$('.z94').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z95').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==95){
				$('.z95').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=95){
				$('.z95').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z96').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==96){
				$('.z96').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=96){
				$('.z96').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z97').click(function(event){		
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==97){
				$('.z97').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=97){
				$('.z97').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z98').click(function(event){		
		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==98){
				$('.z98').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=98){
				$('.z98').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z99').click(function(event){		for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==99){
				$('.z99').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=99){
				$('.z99').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}});
	$('.z100').click(function(event){
				for (let i = 0;i<arr2.length; i++){
			if(arr2[i]==100){
				$('.z100').css("background","url('img/krest.png')");
				break;
			}
			if(arr2[arr2.length-1]!=100){
				$('.z100').css("background","red");
			}
		}
		shot = Math.random()*100;
			shot = Math.ceil(shot);
			console.log(shot);
			console.log($('.'+'r'+ shot));
			for (let i = 0;i<arr.length; i++){
				if((document.querySelector('.'+'r'+ shot).style.background==undefined)){
					shot = Math.random()*100;
					shot = Math.ceil(shot);
					i=0;
				}
			}
			$('.' + 'r' + shot).css("background","red");
			for (let i = 0;i<arr.length; i++){
				console.log('hi');
				if((document.querySelector('.'+'r'+ shot).style.background!=undefined)&&(shot==arr[i])){
					$('.' + 'r' + shot).css("background","url('img/krest.png')");
					console.log('hi');
				}
			}
	});
	$('.galochka').click(function(event){
		for(let i = 0; i < arr.length;){
			if(document.querySelector('.' + 'z' + arr2[i]).style.background=="url(\"img/krest.png\")")i++;
			if(document.querySelector('.' + 'z' + arr2[i]).style.background!="url(\"img/krest.png\")")break;
			if(i==19&&(document.querySelector('.' + 'z' + arr2[19]).style.background=="url(\"img/krest.png\")")){
				window.location = "congrulats.html";
			}
		}
	});
});
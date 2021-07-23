$(document).ready(function(){
	localStorage.clear();
	var arr = [];
	var arr2 = [];
	var r = 0;
	var q = 0;
	var sc1 = 0;
	var sc2 = 0;
	var sc3 = 0;
	var sc4 = 0;
		var rand41;
		var rand42;
		var sum4;
		var rand4downright = Math.random() * 2;
		rand4downright = Math.ceil(rand4downright);
		if(rand4downright==1){
			rand41 = Math.random() * 6;
			rand41 = Math.ceil(rand41);
			rand42 = Math.random() * 10;
			rand42 = Math.ceil(rand42);
			rand41 = rand41 * 10;
			sum4 = rand41 + rand42;
			$('.' + "z" + sum4).css("background","url('img/41(2).png')");
			arr[q]=sum4;
			q++;
			arr2[r]=sum4;
			r++;
			sum4+=10;
			$('.' + "z" + sum4).css("background","url('img/42(2).png')");
			arr[q]=sum4;
			q++;
			arr2[r]=sum4;
			r++;
			sum4+=10;	
			$('.' + "z" + sum4).css("background","url('img/43(2).png')");
			arr[q]=sum4;
			q++;
			arr2[r]=sum4;
			r++;
			sum4+=10;
			$('.' + "z" + sum4).css("background","url('img/44(2).png') no-repeat, #fff");
			arr[q]=sum4;
			arr2[r]=sum4;
			r++;
			q++;
			if(sum4==1||sum4==11||sum4==21||sum4==31||sum4==41||sum4==51||sum4==61||sum4==71||sum4==81||sum4==91){
				arr[q]=sum4+11;
				q++;
				arr[q]=sum4+1;
				q++;
				arr[q]=sum4-9;
				q++;
				arr[q]=sum4-19;
				q++;
				arr[q]=sum4-29;
				q++;	
				arr[q]=sum4-39;
				q++;
				arr[q]=sum4-40;
				q++;
				arr[q]=sum4+10;
				q++;		
			}
			if(sum4==10||sum4==20||sum4==30||sum4==40||sum4==50||sum4==60||sum4==70||sum4==80||sum4==90){

				arr[q]=sum4-11;
				q++;
				arr[q]=sum4-1;
				q++;
				arr[q]=sum4+9;
				q++;
				arr[q]=sum4-41;
				q++;
				arr[q]=sum4-21;
				q++;	
				arr[q]=sum4-31;
				q++;
				arr[q]=sum4-40;
				q++;
				arr[q]=sum4+10;
				q++;	
			}
			if (sum4!=10&&sum4!=20&&sum4!=30&&sum4!=40&&sum4!=50&&sum4!=60&&sum4!=70&&sum4!=80&&sum4!=90&&sum4!=1&&sum4!=11&&sum4!=21&&sum4!=31&&sum4!=41&&sum4!=51&&sum4!=61&&sum4!=71&&sum4!=81&&sum4!=91) {
				arr[q]=sum4-11;
				q++;
				arr[q]=sum4-1;
				q++;
				arr[q]=sum4+9;
				q++;
				arr[q]=sum4-41;
				q++;
				arr[q]=sum4-21;
				q++;	
				arr[q]=sum4-31;
				q++;
				arr[q]=sum4-40;
				q++;
				arr[q]=sum4+10;
				q++;	
				arr[q]=sum4+11;
				q++;
				arr[q]=sum4+1;
				q++;
				arr[q]=sum4-9;
				q++;
				arr[q]=sum4-19;
				q++;
				arr[q]=sum4-29;
				q++;	
				arr[q]=sum4-39;
				q++;
			}
			arr[q]="/";
			q++;
		}
		if(rand4downright==2){
			rand41 = Math.random() * 10;
			rand41 = Math.ceil(rand41);
			rand42 = Math.random() * 7;
			rand42 = Math.ceil(rand42);
			if (rand41!=10) {rand41 = rand41 * 10;}
			sum4 = rand41 + rand42;
			$('.' + "z" + sum4).css("background","url(img/41.png)");
				arr2[r]=sum4;
				r++;
				arr[q]=sum4;
				q++;
				arr[q]=sum4+1;
				q++;
				arr[q]=sum4+2;
				q++;
				arr[q]=sum4+3;
				q++;
				arr[q]=sum4-10;
				q++;	
				arr[q]=sum4-9;
				q++;
				arr[q]=sum4-8;
				q++;
				arr[q]=sum4-7;
				q++;	
				arr[q]=sum4+10;
				q++;
				arr[q]=sum4+11;
				q++;
				arr[q]=sum4+12;
				q++;
				arr[q]=sum4+13;
				q++;
			if ((sum4==1)||(sum4==11)||(sum4==21)||(sum4==31)||(sum4==41)||(sum4==51)||(sum4==61)||(sum4==71)||(sum4==81)||(sum4==91)) {

				arr[q]=sum4-6;
				q++;
				arr[q]=sum4+4;
				q++;
				arr[q]=sum4+14;
				q++;
			}
			if ((rand42==7)) {

				arr[q]=sum4-1;
				q++;
				arr[q]=sum4-11;
				q++;
				arr[q]=sum4+9;
				q++;
			}
			if(rand42!=7&&rand42!=1){
				arr[q]=sum4-1;
				q++;
				arr[q]=sum4-11;
				q++;
				arr[q]=sum4+9;
				q++;
				arr[q]=sum4-6;
				q++;
				arr[q]=sum4+4;
				q++;
				arr[q]=sum4+14;
				q++;
			}
			sum4+=1;
			$('.' + "z" + sum4).css("background","url(img/42.png)");
			sum4+=1;
			arr2[r]=sum4;
			r++;
			$('.' + "z" + sum4).css("background","url(img/43.png)");
			arr2[r]=sum4;
			r++;
			sum4+=1;		
			$('.' + "z" + sum4).css("background","url(img/44.png) no-repeat, #fff");	
			arr2[r]=sum4;
			r++;
			arr[q]="/";
				q++;
		}
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		for (let i = 0; i < 2; i++) {
			var rand31;
			var rand32;
			var sum3;
			var rand3downright = Math.random() * 2;
			rand3downright = Math.ceil(rand3downright);
			if (rand3downright==1) {
				rand31 = Math.random() * 7;
				rand31 = Math.ceil(rand31);
				rand32 = Math.random() * 10;
				rand32 = Math.ceil(rand32);
				if (rand31!=10) {rand31 = rand31 * 10;}
				sum3 = rand31 + rand32;
				for (let j = 0; j<arr.length; j++) {
					if (arr[j]==sum3||arr[j]==sum3+10||arr[j]==sum3+20) {
						rand31 = Math.random() * 7;
						rand31 = Math.ceil(rand31);
						rand32 = Math.random() * 10;
						rand32 = Math.ceil(rand32);
						if (rand31!=10) {rand31 = rand31 * 10;}
						sum3 = rand31 + rand32;
						j=0;
					}
				}
				$('.' + "z" + sum3).css("background","url('img/31(2).png')");
				arr[q]=sum3;
				q++;
				arr2[r]=sum3;
				r++;
				arr[q]=sum3-10;
				q++;
				sum3+=10;
				$('.' + "z" + sum3).css("background","url('img/32(2).png')");
				arr[q]=sum3;
				q++;
				arr2[r]=sum3;
				r++;
				sum3+=10;
				$('.' + "z" + sum3).css("background","url('img/33(2).png')");
				arr[q]=sum3;
				q++;
				arr2[r]=sum3;
				r++;
				arr[q]=sum3+10;
				q++;
				if(sum3 % 10 == 0){

					arr[q]=sum3-21;
					q++;
					arr[q]=sum3-31;
					q++;
					arr[q]=sum3+9;
					q++;
					arr[q]=sum3-11;
					q++;
					arr[q]=sum3-1;
					q++;
				}
				if(sum3 % 10 == 1){

					arr[q]=sum3-29;
					q++;
					arr[q]=sum3-19;
					q++;
					arr[q]=sum3-9;
					q++;
					arr[q]=sum3+11;
					q++;
					arr[q]=sum3+1;
					q++;
				}
				if(sum3 % 10 !=0 && sum3 % 10 != 1){

					arr[q]=sum3-29;
					q++;
					arr[q]=sum3-19;
					q++;
					arr[q]=sum3-9;
					q++;
					arr[q]=sum3+11;
					q++;
					arr[q]=sum3+1;
					q++;
					arr[q]=sum3-21;
					q++;
					arr[q]=sum3-31;
					q++;
					arr[q]=sum3+9;
					q++;
					arr[q]=sum3-11;
					q++;
					arr[q]=sum3-1;
					q++;
				}
				arr[q]="/";
				q++;
			}
			if (rand3downright==2) {
				rand31 = Math.random() * 10;
				rand31 = Math.ceil(rand31);
				rand32 = Math.random() * 8;
				rand32 = Math.ceil(rand32);
				if (rand31!=10) {rand31 = rand31 * 10;}
				sum3 = rand31 + rand32;	
				for (let j = 0; j<arr.length; j++) {
					if (arr[j]==sum3||arr[j]==sum3+1||arr[j]==sum3+2) {
						rand31 = Math.random() * 10;
						rand31 = Math.ceil(rand31);
						rand32 = Math.random() * 8;
						rand32 = Math.ceil(rand32);
						if (rand31!=10) {rand31 = rand31 * 10;}
						sum3 = rand31 + rand32;
						j=0;
					}
				}
				$('.' + "z" + sum3).css("background","url(img/31.png)");
				arr[q]=sum3;
				q++;
				arr2[r]=sum3;
				r++;
				arr[q]=sum3-10;
				q++;
				arr[q]=sum3-9;
				q++;
				arr[q]=sum3-8;
				q++;
				arr[q]=sum3+10;
				q++;
				arr[q]=sum3+11;
				q++;
				arr[q]=sum3+12;
				q++;
				sum3+=1;
				$('.' + "z" + sum3).css("background","url(img/32.png)");
				arr[q]=sum3;
				q++;
				arr2[r]=sum3;
				r++;
				sum3+=1;
				$('.' + "z" + sum3).css("background","url(img/33.png)");
				arr[q]=sum3;
				q++;
				arr2[r]=sum3;
				r++;
				if(sum3 % 10 == 3 ){

					arr[q]=sum3+1;
					q++;
					arr[q]=sum3-9;
					q++;
					arr[q]=sum3-19;
					q++;
				}
				if(sum3 % 10 == 0){

					arr[q]=sum3-3;
					q++;
					arr[q]=sum3-13;
					q++;
					arr[q]=sum3+7;
					q++;
				}
				if(sum3 % 10 !=0 && sum3 % 10 != 3){

					arr[q]=sum3+1;
					q++;
					arr[q]=sum3-9;
					q++;
					arr[q]=sum3+11;
					q++;
					arr[q]=sum3-3;
					q++;
					arr[q]=sum3-13;
					q++;
					arr[q]=sum3+7;
					q++;
				}
				arr[q]="/";
				q++;
			}
		}
		//---------------------------------------------------------------------------------------------------------
		for (let i = 0; i < 3; i++) {
			var rand21;
			var rand22;
			var sum2;
			var rand2downright = Math.random() * 2;
			rand2downright = Math.ceil(rand2downright);
			if (rand2downright==1) {
				rand21 = Math.random() * 8;
				rand21 = Math.ceil(rand21);
				rand22 = Math.random() * 10;
				rand22 = Math.ceil(rand22);			
				if (rand21!=10) {rand21 = rand21 * 10;}
				sum2 = rand21 + rand22;
				for (let j = 0; j<arr.length; j++) {
					if (arr[j]==sum2||arr[j]==sum2+10) {
						rand21 = Math.random() * 8;
						rand21 = Math.ceil(rand21);
						rand22 = Math.random() * 10;
						rand22 = Math.ceil(rand22);
						if (rand21!=10) {rand21 = rand21 * 10;}
						sum2 = rand21 + rand22;
						j=0;
					}
				}
				$('.' + "z" + sum2).css("background","url('img/31(2).png')");
				arr[q]=sum2;
				q++;
				arr2[r]=sum2;
				r++;
				arr[q]=sum2-10;
				q++;
				sum2+=10;
				$('.' + "z" + sum2).css("background","url('img/33(2).png')");
				arr[q]=sum2;
				q++;
				arr2[r]=sum2;
				r++;
				arr[q]=sum2+10;
				q++;
				if(sum2 % 10 == 0){

					arr[q]=sum2-21;
					q++;
					arr[q]=sum2-11;
					q++;
					arr[q]=sum2-1;
					q++;
					arr[q]=sum2+9;
					q++;
				}
				if(sum2 % 10 == 1){

					arr[q]=sum2-19;
					q++;
					arr[q]=sum2+11;
					q++;
					arr[q]=sum2+1;
					q++;
					arr[q]=sum2-9;
					q++;
				}
				if(sum2 % 10 !=0 && sum2 % 10 != 1){

					q++;
					arr[q]=sum2+11;
					q++;
					arr[q]=sum2+1;
					q++;
					arr[q]=sum2-9;
					q++;
					arr[q]=sum2-21;
					q++;
					arr[q]=sum2-11;
					q++;
					arr[q]=sum2-1;
					q++;
					arr[q]=sum2+9;
					q++;
					arr[q]=sum2-19;
					q++;
				}
			}
			if (rand2downright==2) {
				rand21 = Math.random() * 10;
				rand21 = Math.ceil(rand21);
				rand22 = Math.random() * 9;
				rand22 = Math.ceil(rand22);
				if (rand21!=10) {rand21 = rand21 * 10;}
				sum2 = rand21 + rand22;	
				for (let j = 0; j<arr.length; j++) {
					if (arr[j]==sum2||arr[j]==sum2+1) {
						rand21 = Math.random() * 10;
						rand21 = Math.ceil(rand21);
						rand22 = Math.random() * 8;
						rand22 = Math.ceil(rand22);
						if (rand21!=10) {rand21 = rand21 * 10;}
						sum2 = rand21 + rand22;
						j=0;
					}
				}
				$('.' + "z" + sum2).css("background","url(img/31.png)");
				arr[q]=sum2;
				q++;
				arr2[r]=sum2;
				r++;
				arr[q]=sum2-10;
				q++;
				arr[q]=sum2-9;
				q++;
				arr[q]=sum2+10;
				q++;
				arr[q]=sum2+11;
				q++;
				sum2+=1;
				$('.' + "z" + sum2).css("background","url(img/33.png)");
				arr[q]=sum2;
				q++;
				arr2[r]=sum2;
				r++;
				if(sum2 % 10 == 2 ){

					arr[q]=sum2+1;
					q++;
					arr[q]=sum2-9;
					q++;
					arr[q]=sum2+11;
					q++;
				}
				if(sum2 % 10 == 0){

					arr[q]=sum2-2;
					q++;
					arr[q]=sum2-12;
					q++;
					arr[q]=sum2+8;
					q++;
				}
				if(sum2 % 10 !=0 && sum2 % 10 != 2){

					arr[q]=sum2+1;
					q++;
					arr[q]=sum2-9;
					q++;
					arr[q]=sum2+11;
					q++;
					arr[q]=sum2-2;
					q++;
					arr[q]=sum2-12;
					q++;
					arr[q]=sum2+8;
					q++;
				}
				arr[q]="/";
				q++;				
			}	
		}
		//-------------------------------------------------------------------------------------------------------------------------------------
		for (let i = 0; i < 4; i++) {
			var rand11;
			var rand12;
			var sum1;
			rand11 = Math.random() * 10;
			rand11 = Math.ceil(rand11);
			rand12 = Math.random() * 10;
			rand12 = Math.ceil(rand12);			
			if (rand11!=10) {rand11 = rand11 * 10;}
			sum1 = rand11 + rand12;
			for (let j = 0; j<arr.length; j++) {
				if (arr[j]==sum1||arr[j]==sum1+1) {
					rand11 = Math.random() * 10;
					rand11 = Math.ceil(rand11);
					rand12 = Math.random() * 8;
					rand12 = Math.ceil(rand12);
					if (rand11!=10) {rand11 = rand11 * 10;}
					sum1 = rand11 + rand12;
					j=0;
				}
			}
			$('.' + "z" + sum1).css("background","url(img/11.png)");
			arr[q]=sum1;
			q++;
			arr2[r]=sum1;
			r++;
			arr[q]=sum1+10;
			q++;
			arr[q]=sum1-10;
			q++;
			if(sum1 % 10 == 1 ){

				arr[q]=sum1+1;
				q++;
				arr[q]=sum1-9;
				q++;
				arr[q]=sum1+11;
				q++;
			}
			if(sum1 % 10 == 0){

				arr[q]=sum1-1;
				q++;
				arr[q]=sum1-11;
				q++;
				arr[q]=sum1+9;
				q++;
			}
			if(sum1 % 10 != 0 && sum1 % 10 != 1){

				arr[q]=sum1-1;
				q++;
				arr[q]=sum1-11;
				q++;
				arr[q]=sum1+9;
				q++;

				arr[q]=sum1+1;
				q++;
				arr[q]=sum1-9;
				q++;
				arr[q]=sum1+11;
				q++;
			}
		}
		for(let i = 0; i<arr2.length;i++)console.log(arr2[i]);
		localStorage.setItem('arr2',JSON.stringify(arr2))

});
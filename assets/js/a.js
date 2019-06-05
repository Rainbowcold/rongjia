function a1(){
	$(".a1").css("display","block");
	$(".a2").css("display","none");
	$(".a3").css("display","none");
	$(".a4").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","none");
	$(".a8").css("display","none");

	 $("body").removeClass("bd100");
	$("body").addClass("bd1700");
}
function a2(){
	$(".a2").css("display","block");
	$(".a1").css("display","none");
	$(".a3").css("display","none");
	$(".a4").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","none");
	$(".a8").css("display","none");
	$("body").removeClass("bd1700");
	$("body").addClass("bd100");
}
function a3(){
	$(".a3").css("display","block");
	$(".a2").css("display","none");
	$(".a1").css("display","none");
	$(".a4").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","none");
	$(".a8").css("display","none");
$("body").removeClass("bd1700");
	$("body").addClass("bd100");
	
}
function a4(){
	$(".a4").css("display","block");
	$(".a2").css("display","none");
	$(".a3").css("display","none");
	$(".a1").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","none");
	$(".a8").css("display","none");
$("body").removeClass("bd1700");
	$("body").addClass("bd100");
	
}
function a5(){
	$(".a5").css("display","block");
	$(".a2").css("display","none");
	$(".a3").css("display","none");
	$(".a1").css("display","none");
	$(".a4").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","none");
	$(".a8").css("display","none");	
	$("body").removeClass("bd1700");
	$("body").addClass("bd100");
}
function a6(){
	$(".a1").css("display","none");
	$(".a2").css("display","none");
	$(".a3").css("display","none");
	$(".a4").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","block");
	$(".a7").css("display","none");
	$(".a8").css("display","none");
$("body").removeClass("bd1700");
	$("body").addClass("bd100");
}
function a7(){
	$(".a1").css("display","none");
	$(".a2").css("display","none");
	$(".a3").css("display","none");
	$(".a4").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","block");
	$(".a8").css("display","none");
$("body").removeClass("bd1700");
	$("body").addClass("bd100");
}
function a8(){
	$(".a1").css("display","none");
	$(".a2").css("display","none");
	$(".a3").css("display","none");
	$(".a4").css("display","none");
	$(".a5").css("display","none");
	$(".a6").css("display","none");
	$(".a7").css("display","none");
	$(".a8").css("display","block");
$("body").removeClass("bd1700");
	$("body").addClass("bd100");
}
var xx1=document.querySelector("#xx1");
var sb1=document.querySelector("#sb1");
function x1(){
		sj1();
		document.querySelector("#sb1").style.display="none";
}
function y1(){
		document.querySelector("#sb1").style.display="block";
}
function x2(){
		sj2();
		document.querySelector("#sb2").style.display="none";
}
function y2(){
		document.querySelector("#sb2").style.display="block";
}
function x3(){
		sj3();
		document.querySelector("#sb3").style.display="none";
}
function y3(){
		document.querySelector("#sb3").style.display="block";
}
function x4(){
		sj4();
		document.querySelector("#sb4").style.display="none";
}
function y4(){
		document.querySelector("#sb4").style.display="block";
}
function x5(){
		sj5();
		document.querySelector("#sb5").style.display="none";
}
function y5(){
		document.querySelector("#sb5").style.display="block";
}
function x6(){
		sj6();
		document.querySelector("#sb6").style.display="none";
}
function y6(){
		document.querySelector("#sb6").style.display="block";
}
function x7(){
		sj7();
		document.querySelector("#sb7").style.display="none";
}
function y7(){
		document.querySelector("#sb7").style.display="block";
}
function x8(){
		sj8();
		document.querySelector("#sb8").style.display="none";
}
function y8(){
		document.querySelector("#sb8").style.display="block";
}
function x9(){
		sj9();
		document.querySelector("#sb9").style.display="none";
}
function y9(){
		document.querySelector("#sb9").style.display="block";
}
function x10(){
		sj10();
		document.querySelector("#sb10").style.display="none";
}
function y10(){
		document.querySelector("#sb10").style.display="block";
}
function tubiao2(){

	var html="";
		$.getJSON("test3.json",function(data){
			$.each(data,function(Name,db){
			console.log(data);
				var jsonarray =db;
				for(var i =0;i<jsonarray.length;i++){
					var jsonobj = jsonarray[i];
					html+="<tr>";
					for(var x in jsonobj){
//						html+="<td class='tit'>"+x+"</td><td>"+jsonobj[x]+"</td>"
						html+="<td class="+"center"+">"+jsonobj[x]+"</td>";
                       
                      
                    
					}
					html+="</tr>";
				}
			})
			$("#t2").html(html);
			
			$("#t2 td:nth-child(4)").css("color","red");
		})
}
function tubiao1(){

	var html="";
		$.getJSON("test2.json",function(data){
			$.each(data,function(Name,db){
			console.log(data);
				var jsonarray =db;
				for(var i =0;i<jsonarray.length;i++){
					var jsonobj = jsonarray[i];
					html+="<tr>";
					for(var x in jsonobj){
//						html+="<td class='tit'>"+x+"</td><td>"+jsonobj[x]+"</td>"
						html+="<td class="+"center"+">"+jsonobj[x]+"</td>";
					} html+=" <td id="+"bt"+">";
                       html+="<button class="+"waves-effect waves-light bth "+">停用</button>";
                       html+="<button class="+"waves-effect waves-light bth "+">编辑</button>";
                       html+="<button class="+"waves-effect waves-light bth  "+">删除</button>";
                       html+="</td>"
					html+="</tr>";
				}
			})
			$("#t1").html(html);
			$("#bt button:nth-child(1)").addClass("waves-effect waves-light btn green1 ");
			$("#bt button:nth-child(2)").addClass("waves-effect waves-light btn red1 ");
			$("#bt button:nth-child(3)").addClass("waves-effect waves-light btn blue1 ");
		})}
function tubiao3(){

	var html="";
		$.getJSON("test4.json",function(data){
			$.each(data,function(Name,db){
			console.log(data);
				var jsonarray =db;
				for(var i =0;i<jsonarray.length;i++){
					var jsonobj = jsonarray[i];
					html+="<tr>";
					for(var x in jsonobj){
//						html+="<td class='tit'>"+x+"</td><td>"+jsonobj[x]+"</td>"
						html+="<td class="+"center"+">"+jsonobj[x]+"</td>";
                       
                      
                    
					}
					html+="</tr>";
				}
			})
			$("#t3").html(html);
			
			$("#t3 td:nth-child(6)").css("color","red");
		})
}


function tubiaori(){
var chart = Highcharts.chart('container1', {
		chart: {
				type: 'line'
		},
		title: {
				text: '设备1'
		},
		subtitle: {
				text: '设备1大数据显示'
		},
		xAxis: {
				categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24']
		},
		yAxis: {
				title: {
						text: '平均每天次数'
				}
		},
		plotOptions: {
				line: {
						dataLabels: {
								// 开启数据标签
								enabled: true          
						},
						// 关闭鼠标跟踪，对应的提示框、点击事件会失效
						enableMouseTracking: false
				}
		},
		series: [{
				name: '开门次数',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		}, {
				name: '清桶次数',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		}]
});
}




function tubiaoyue(){
var chart = Highcharts.chart('container2', {
		chart: {
				type: 'line'
		},
		title: {
				text: '设备1'
		},
		subtitle: {
				text: '设备1大数据显示'
		},
		xAxis: {
				categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
		},
		yAxis: {
				title: {
						text: '平均每天次数'
				}
		},
		plotOptions: {
				line: {
						dataLabels: {
								// 开启数据标签
								enabled: true          
						},
						// 关闭鼠标跟踪，对应的提示框、点击事件会失效
						enableMouseTracking: false
				}
		},
		series: [{
				name: '开门次数',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		}, {
				name: '清桶次数',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		}]
});
}


function tubiaonian(){
var chart = Highcharts.chart('container3', {
		chart: {
				type: 'line'
		},
		title: {
				text: '设备1'
		},
		subtitle: {
				text: '设备1大数据显示'
		},
		xAxis: {
				categories: ['2016','','','', '2017','','','', '2018','','','',]
		},
		yAxis: {
				title: {
						text: '平均每天次数'
				}
		},
		plotOptions: {
				line: {
						dataLabels: {
								// 开启数据标签
								enabled: true          
						},
						// 关闭鼠标跟踪，对应的提示框、点击事件会失效
						enableMouseTracking: false
				}
		},
		series: [{
				name: '开门次数',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		}, {
				name: '清桶次数',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		}]
});
}

function rl1(){
$.getJSON("ljtrl.json", function(json){
									
					let c1=json.ljt[0].t1;
					let c2=json.ljt[0].t2;
					$("#td1 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[0].t1)+"%");
					$("#td1 div:nth-child(1) div:nth-child(2)").html(json.ljt[0].t1+"%");
					$("#td1 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[0].t2)+"%");
					$("#td1 div:nth-child(2) div:nth-child(2)").html(json.ljt[0].t2+"%");
					if(c1<50||c1==50){$("#td1 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td1 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td1 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td1 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td1 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td1 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl2(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[1].t1;
					let c2=json.ljt[1].t2;
					$("#td2 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[1].t1)+"%");
					$("#td2 div:nth-child(1) div:nth-child(2)").html(json.ljt[1].t1+"%");
					$("#td2 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[1].t2)+"%");
					$("#td2 div:nth-child(2) div:nth-child(2)").html(json.ljt[1].t2+"%");
					if(c1<50||c1==50){$("#td2 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td2 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1){$("#td2 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td2 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td2 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td2 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl3(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[2].t1;
					let c2=json.ljt[2].t2;
					let c3=json.ljt[2].t3;
					let c4=json.ljt[2].t4;
					$("#td3 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[2].t1)+"%");
					$("#td3 div:nth-child(1) div:nth-child(2)").html(json.ljt[2].t1+"%");
					$("#td3 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[2].t2)+"%");
					$("#td3 div:nth-child(2) div:nth-child(2)").html(json.ljt[2].t2+"%");
					$("#td3 div:nth-child(3) div:nth-child(1)").css("height",(100- json.ljt[2].t3)+"%");
					$("#td3 div:nth-child(3) div:nth-child(2)").html(json.ljt[2].t3+"%");
					$("#td3 div:nth-child(4) div:nth-child(1)").css("height",(100- json.ljt[2].t4)+"%");
					$("#td3 div:nth-child(4) div:nth-child(2)").html(json.ljt[2].t4+"%");
					if(c1<50||c1==50){$("#td3 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td3 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td3 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td3 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td3 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td3 div:nth-child(2) div:nth-child(2)").css("background-color","red");}		
					if(c3<50||c3==50){$("#td3 div:nth-child(3) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c3&&c3<80){$("#td3 div:nth-child(3) div:nth-child(2)").css("background-color","green");}
					if(80<c3||c3==80){$("#td3 div:nth-child(3) div:nth-child(2)").css("background-color","red");}		
					if(c4<50||c4==50 ){$("#td3 div:nth-child(4) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c4&&c4<80){$("#td3 div:nth-child(4) div:nth-child(2)").css("background-color","green");}
					if(80<c4||c4==80){$("#td3 div:nth-child(4) div:nth-child(2)").css("background-color","red");}		
});
}
function rl4(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[3].t1;
					let c2=json.ljt[3].t2;
					$("#td4 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[3].t1)+"%");
					$("#td4 div:nth-child(1) div:nth-child(2)").html(json.ljt[3].t1+"%");
					$("#td4 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[3].t2)+"%");
					$("#td4 div:nth-child(2) div:nth-child(2)").html(json.ljt[3].t2+"%");
					if(c1<50||c1==50){$("#td4 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td4 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td4 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td4 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td4 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td4 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl5(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[4].t1;
					let c2=json.ljt[4].t2;
					$("#td5 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[4].t1)+"%");
					$("#td5 div:nth-child(1) div:nth-child(2)").html(json.ljt[4].t1+"%");
					$("#td5 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[4].t2)+"%");
					$("#td5 div:nth-child(2) div:nth-child(2)").html(json.ljt[4].t2+"%");
					if(c1<50||c1==50){$("#td5 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td5 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td5 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c1==50){$("#td5 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td5 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td5 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl6(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[5].t1;
					let c2=json.ljt[5].t2;
					$("#td6 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[5].t1)+"%");
					$("#td6 div:nth-child(1) div:nth-child(2)").html(json.ljt[5].t1+"%");
					$("#td6 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[5].t2)+"%");
					$("#td6 div:nth-child(2) div:nth-child(2)").html(json.ljt[5].t2+"%");
					if(c1<50||c1==50){$("#td6 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td6 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td6 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td6 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td6 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td6 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl7(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[6].t1;
					let c2=json.ljt[6].t2;
					$("#td7 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[6].t1)+"%");
					$("#td7 div:nth-child(1) div:nth-child(2)").html(json.ljt[6].t1+"%");
					$("#td7 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[6].t2)+"%");
					$("#td7 div:nth-child(2) div:nth-child(2)").html(json.ljt[6].t2+"%");
					if(c1<50||c1==50){$("#td7 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td7 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td7 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td7 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td7 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td7 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl8(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[7].t1;
					let c2=json.ljt[7].t2;
					let c3=json.ljt[7].t3;
					let c4=json.ljt[7].t4;
					$("#td8 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[7].t1)+"%");
					$("#td8 div:nth-child(1) div:nth-child(2)").html(json.ljt[7].t1+"%");
					$("#td8 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[7].t2)+"%");
					$("#td8 div:nth-child(2) div:nth-child(2)").html(json.ljt[7].t2+"%");
					$("#td8 div:nth-child(3) div:nth-child(1)").css("height",(100- json.ljt[7].t3)+"%");
					$("#td8 div:nth-child(3) div:nth-child(2)").html(json.ljt[7].t3+"%");
					$("#td8 div:nth-child(4) div:nth-child(1)").css("height",(100- json.ljt[7].t4)+"%");
					$("#td8 div:nth-child(4) div:nth-child(2)").html(json.ljt[7].t4+"%");
					if(c1<50||c1==50){$("#td8 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td8 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td8 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td8 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td8 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td8 div:nth-child(2) div:nth-child(2)").css("background-color","red");}		
					if(c3<50||c3==50){$("#td8 div:nth-child(3) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c3&&c3<80){$("#td8 div:nth-child(3) div:nth-child(2)").css("background-color","green");}
					if(80<c3||c3==80){$("#td8 div:nth-child(3) div:nth-child(2)").css("background-color","red");}		
					if(c4<50||c4==50 ){$("#td8 div:nth-child(4) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c4&&c4<80){$("#td8 div:nth-child(4) div:nth-child(2)").css("background-color","green");}
					if(80<c4||c4==80){$("#td8 div:nth-child(4) div:nth-child(2)").css("background-color","red");}			
});
}
function rl9(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[8].t1;
					let c2=json.ljt[8].t2;
					$("#td9 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[8].t1)+"%");
					$("#td9 div:nth-child(1) div:nth-child(2)").html(json.ljt[8].t1+"%");
					$("#td9 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[8].t2)+"%");
					$("#td9 div:nth-child(2) div:nth-child(2)").html(json.ljt[8].t2+"%");
					if(c1<50||c1==50){$("#td9 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td9 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td9 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td9 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td9 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td9 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function rl10(){
$.getJSON("ljtrl.json", function(json){								
					let c1=json.ljt[9].t1;
					let c2=json.ljt[9].t2;
					$("#td10 div:nth-child(1) div:nth-child(1)").css("height",(100-json.ljt[9].t1)+"%");
					$("#td10 div:nth-child(1) div:nth-child(2)").html(json.ljt[9].t1+"%");
					$("#td10 div:nth-child(2) div:nth-child(1)").css("height",(100- json.ljt[9].t2)+"%");
					$("#td10 div:nth-child(2) div:nth-child(2)").html(json.ljt[9].t2+"%");
					if(c1<50||c1==50){$("#td10 div:nth-child(1) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c1&&c1<80){$("#td10 div:nth-child(1) div:nth-child(2)").css("background-color","green");}
					if(80<c1||c1==80){$("#td10 div:nth-child(1) div:nth-child(2)").css("background-color","red");}
					if(c2<50||c2==50){$("#td10 div:nth-child(2) div:nth-child(2)").css("background-color","#00B0FF");}
					if(50<c2&&c2<80){$("#td10 div:nth-child(2) div:nth-child(2)").css("background-color","green");}
					if(80<c2||c2==80){$("#td10 div:nth-child(2) div:nth-child(2)").css("background-color","red");}				
});
}
function jz(){
	$("body").addClass("bd1700");
}
function sj1(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj1 span:nth-child(2) span:nth-child(1) ").html(json2.sb[0].number);
	$("#bj1 span:nth-child(4) span:nth-child(1) ").html(json2.sb[0].name);
	$("#bj1 span:nth-child(6) span:nth-child(1) ").html(json2.sb[0].rl);
	$("#bj1 span:nth-child(8) span:nth-child(1) ").html(json2.sb[0].open);
	$("#bj1 span:nth-child(10) span:nth-child(1) ").html(json2.sb[0].clean);
	$("#bj1 span:nth-child(12) span:nth-child(1) ").html(json2.sb[0].yasuo);
	$("#bj1 span:nth-child(14) span:nth-child(1) ").html(json2.sb[0].Voltage);
	$("#bj1 span:nth-child(16) span:nth-child(1) ").html(json2.sb[0].chongdian);
	$("#bj1 span:nth-child(18) span:nth-child(1) ").html(json2.sb[0].Alarm);
})
}
function sj2(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj2 span:nth-child(2) span:nth-child(1) ").html(json2.sb[1].number);
	$("#bj2 span:nth-child(4) span:nth-child(1) ").html(json2.sb[1].name);
	$("#bj2 span:nth-child(6) span:nth-child(1) ").html(json2.sb[1].rl);
	$("#bj2 span:nth-child(8) span:nth-child(1) ").html(json2.sb[1].open);
	$("#bj2 span:nth-child(10) span:nth-child(1) ").html(json2.sb[1].clean);
	$("#bj2 span:nth-child(12) span:nth-child(1) ").html(json2.sb[1].yasuo);
	$("#bj2 span:nth-child(14) span:nth-child(1) ").html(json2.sb[1].Voltage);
	$("#bj2 span:nth-child(16) span:nth-child(1) ").html(json2.sb[1].chongdian);
	$("#bj2 span:nth-child(18) span:nth-child(1) ").html(json2.sb[1].Alarm);
})
}
function sj3(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj3 span:nth-child(2) span:nth-child(1) ").html(json2.sb[2].number);
	$("#bj3 span:nth-child(4) span:nth-child(1) ").html(json2.sb[2].name);
	$("#bj3 span:nth-child(6) span:nth-child(1) ").html(json2.sb[2].rl);
	$("#bj3 span:nth-child(8) span:nth-child(1) ").html(json2.sb[2].open);
	$("#bj3 span:nth-child(10) span:nth-child(1) ").html(json2.sb[2].clean);
	$("#bj3 span:nth-child(12) span:nth-child(1) ").html(json2.sb[2].yasuo);
	$("#bj3 span:nth-child(14) span:nth-child(1) ").html(json2.sb[2].Voltage);
	$("#bj3 span:nth-child(16) span:nth-child(1) ").html(json2.sb[2].chongdian);
	$("#bj3 span:nth-child(18) span:nth-child(1) ").html(json2.sb[2].Alarm);
})
}
function sj4(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj4 span:nth-child(2) span:nth-child(1) ").html(json2.sb[3].number);
	$("#bj4 span:nth-child(4) span:nth-child(1) ").html(json2.sb[3].name);
	$("#bj4 span:nth-child(6) span:nth-child(1) ").html(json2.sb[3].rl);
	$("#bj4 span:nth-child(8) span:nth-child(1) ").html(json2.sb[3].open);
	$("#bj4 span:nth-child(10) span:nth-child(1) ").html(json2.sb[3].clean);
	$("#bj4 span:nth-child(12) span:nth-child(1) ").html(json2.sb[3].yasuo);
	$("#bj4 span:nth-child(14) span:nth-child(1) ").html(json2.sb[3].Voltage);
	$("#bj4 span:nth-child(16) span:nth-child(1) ").html(json2.sb[3].chongdian);
	$("#bj4 span:nth-child(18) span:nth-child(1) ").html(json2.sb[3].Alarm);
})
}
function sj5(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj5 span:nth-child(2) span:nth-child(1) ").html(json2.sb[4].number);
	$("#bj5 span:nth-child(4) span:nth-child(1) ").html(json2.sb[4].name);
	$("#bj5 span:nth-child(6) span:nth-child(1) ").html(json2.sb[4].rl);
	$("#bj5 span:nth-child(8) span:nth-child(1) ").html(json2.sb[4].open);
	$("#bj5 span:nth-child(10) span:nth-child(1) ").html(json2.sb[4].clean);
	$("#bj5 span:nth-child(12) span:nth-child(1) ").html(json2.sb[4].yasuo);
	$("#bj5 span:nth-child(14) span:nth-child(1) ").html(json2.sb[4].Voltage);
	$("#bj5 span:nth-child(16) span:nth-child(1) ").html(json2.sb[4].chongdian);
	$("#bj5 span:nth-child(18) span:nth-child(1) ").html(json2.sb[4].Alarm);
})
}
function sj6(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj6 span:nth-child(2) span:nth-child(1) ").html(json2.sb[5].number);
	$("#bj6 span:nth-child(4) span:nth-child(1) ").html(json2.sb[5].name);
	$("#bj6 span:nth-child(6) span:nth-child(1) ").html(json2.sb[5].rl);
	$("#bj6 span:nth-child(8) span:nth-child(1) ").html(json2.sb[5].open);
	$("#bj6 span:nth-child(10) span:nth-child(1) ").html(json2.sb[5].clean);
	$("#bj6 span:nth-child(12) span:nth-child(1) ").html(json2.sb[5].yasuo);
	$("#bj6 span:nth-child(14) span:nth-child(1) ").html(json2.sb[5].Voltage);
	$("#bj6 span:nth-child(16) span:nth-child(1) ").html(json2.sb[5].chongdian);
	$("#bj6 span:nth-child(18) span:nth-child(1) ").html(json2.sb[5].Alarm);
})
}
function sj7(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj7 span:nth-child(2) span:nth-child(1) ").html(json2.sb[6].number);
	$("#bj7 span:nth-child(4) span:nth-child(1) ").html(json2.sb[6].name);
	$("#bj7 span:nth-child(6) span:nth-child(1) ").html(json2.sb[6].rl);
	$("#bj7 span:nth-child(8) span:nth-child(1) ").html(json2.sb[6].open);
	$("#bj7 span:nth-child(10) span:nth-child(1) ").html(json2.sb[6].clean);
	$("#bj7 span:nth-child(12) span:nth-child(1) ").html(json2.sb[6].yasuo);
	$("#bj7 span:nth-child(14) span:nth-child(1) ").html(json2.sb[6].Voltage);
	$("#bj7 span:nth-child(16) span:nth-child(1) ").html(json2.sb[6].chongdian);
	$("#bj7 span:nth-child(18) span:nth-child(1) ").html(json2.sb[6].Alarm);
})
}
function sj8(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj8 span:nth-child(2) span:nth-child(1) ").html(json2.sb[7].number);
	$("#bj8 span:nth-child(4) span:nth-child(1) ").html(json2.sb[7].name);
	$("#bj8 span:nth-child(6) span:nth-child(1) ").html(json2.sb[7].rl);
	$("#bj8 span:nth-child(8) span:nth-child(1) ").html(json2.sb[7].open);
	$("#bj8 span:nth-child(10) span:nth-child(1) ").html(json2.sb[7].clean);
	$("#bj8 span:nth-child(12) span:nth-child(1) ").html(json2.sb[7].yasuo);
	$("#bj8 span:nth-child(14) span:nth-child(1) ").html(json2.sb[7].Voltage);
	$("#bj8 span:nth-child(16) span:nth-child(1) ").html(json2.sb[7].chongdian);
	$("#bj8 span:nth-child(18) span:nth-child(1) ").html(json2.sb[7].Alarm);
})
}
function sj9(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj9 span:nth-child(2) span:nth-child(1) ").html(json2.sb[8].number);
	$("#bj9 span:nth-child(4) span:nth-child(1) ").html(json2.sb[8].name);
	$("#bj9 span:nth-child(6) span:nth-child(1) ").html(json2.sb[8].rl);
	$("#bj9 span:nth-child(8) span:nth-child(1) ").html(json2.sb[8].open);
	$("#bj9 span:nth-child(10) span:nth-child(1) ").html(json2.sb[8].clean);
	$("#bj9 span:nth-child(12) span:nth-child(1) ").html(json2.sb[8].yasuo);
	$("#bj9 span:nth-child(14) span:nth-child(1) ").html(json2.sb[8].Voltage);
	$("#bj9 span:nth-child(16) span:nth-child(1) ").html(json2.sb[8].chongdian);
	$("#bj9 span:nth-child(18) span:nth-child(1) ").html(json2.sb[8].Alarm);
})
}
function sj10(){
	$.getJSON("ljtsj.json",function(json2){	
	$("#bj10 span:nth-child(2) span:nth-child(1) ").html(json2.sb[9].number);
	$("#bj10 span:nth-child(4) span:nth-child(1) ").html(json2.sb[9].name);
	$("#bj10 span:nth-child(6) span:nth-child(1) ").html(json2.sb[9].rl);
	$("#bj10 span:nth-child(8) span:nth-child(1) ").html(json2.sb[9].open);
	$("#bj10 span:nth-child(10) span:nth-child(1) ").html(json2.sb[9].clean);
	$("#bj10 span:nth-child(12) span:nth-child(1) ").html(json2.sb[9].yasuo);
	$("#bj10 span:nth-child(14) span:nth-child(1) ").html(json2.sb[9].Voltage);
	$("#bj10 span:nth-child(16) span:nth-child(1) ").html(json2.sb[9].chongdian);
	$("#bj10 span:nth-child(18) span:nth-child(1) ").html(json2.sb[9].Alarm);
})
}
function rl(){
	rl1();rl2();rl3();rl4();rl5();
	rl6();rl7();rl8();rl9();rl10();
}
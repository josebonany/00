// JavaScript Document
			document.addEventListener("backbutton", function(e){
				if($.mobile.activePage.is('#home')){
					e.preventDefault();
					navigator.app.exitApp();
				}
				else if ($.mobile.activePage.attr('id') == 'albir' || 'alborea' || 
						'arrufatina' || 'barberina' || 'barnfield' || 'basol' || 'beatriz' || 
						'capola' || 'caracara' || 'chislett' || 'clausellina' || 'clemenclara' || 
						'clemenlate' || 'clemenpons' || 'clemenrubi' || 'clemensoon' || 'clementina-fina' || 
						'clemenules' || 'clemenval' || 'clemenverd' || 'cultifort' || 'ellendale' || 'esbal' || 
						'fortune' || 'fukumoto' || 'garbi' || 'goldnugget' || 'hernandina' || 'iwasaki' || 
						'kara' || 'lanelate' || 'loretina' || 'm7' || 'mandanovasl' || 'marisol' || 
						'milana' || 'moncada' || 'moncalina' || 'murcott' || 'murina' || 'nadorcott' || 
						'navelate' || 'navelina' || 'nero' || 'neufina' || 'newhall' || 'novaclemenvilla' || 
						'nulessin' || 'oct-488' || 'okitsu' || 'orogrande' || 'orogros' || 'oronules' || 'oroval' || 
						'orri' || 'ortanique' || 'owari' || 'powell' || 'primosole' || 'queen' || 'rohde' || 
						'safor' || 'salustiana' || 'sando' || 'sanguinelli' || 'serafines' || 'tanggold' || 
						'taroccorosso' || 'tde2' || 'tde4' || 'valenciadelta' || 'valencialate' || 'valenciamidknight' || 'washington'){
					$.mobile.changePage('#naranjas');
			   }
				else if ($.mobile.activePage.attr('id') == 'calculadora' || 'naranjas'){
					$.mobile.changePage('#home');
			    }
				else {
					navigator.app.backHistory();
				}
			}, false); 

				function calcularp(){
					cajas=$("#cajasp").val();
					if(cajas=="")cajas=0;
					
					tam=$("#valorp").val();
					if(tam=="")tam=0;
					
					operarios=$("#operariosp").val();
					if(operarios=="")operarios=0;
					
					total=(cajas*tam/operarios).toFixed(2);
					$("#totalp").val(total);
				}
				
				function calcularg(){
					cajas=$("#cajasg").val();
					if(cajas=="")cajas=0;
					
					tam=$("#valorg").val();
					if(tam=="")tam=0;
					
					operarios=$("#operariosg").val();
					if(operarios=="")operarios=0;
					
					total=(cajas*tam/operarios).toFixed(2);
					$("#totalg").val(total);
				}
				
				function calculartodo(){
					total1=$("#totalp").val();
					$("#totalp1").val(total1);
					
					total2=$("#totalg").val();
					$("#totalg2").val(total2);
					
					total3=(parseFloat(total1)+parseFloat(total2)).toFixed(2);
					$("#totalpg").val(total3);
				}

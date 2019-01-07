$(function(){

				loadSP();
				loadRJ();
				loadMG();
				loadBA();
				loadRS();
				loadPE();

				$("#rg-sp").click(function(){
					$("#pag-sp").toggle(true);
					$("#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe,#pag-pesquisa").toggle(false);
					$('html,body').scrollTop(0);
				});

				$("#rg-rj").click(function(){
					$("#pag-rj").toggle(true);
					$("#pag-sp,#pag-mg,#pag-ba,#pag-rs,#pag-pe,#pag-pesquisa").toggle(false);
					$('html,body').scrollTop(0);
				});

				$("#rg-mg").click(function(){
					$("#pag-mg").toggle(true);
					$("#pag-sp,#pag-rj,#pag-ba,#pag-rs,#pag-pe,#pag-pesquisa").toggle(false);
					$('html,body').scrollTop(0);
				});

				$("#rg-ba").click(function(){
					$("#pag-ba").toggle(true);
					$("#pag-sp,#pag-rj,#pag-mg,#pag-rs,#pag-pe,#pag-pesquisa").toggle(false);
					$('html,body').scrollTop(0);
				});

				$("#rg-rs").click(function(){
					$("#pag-rs").toggle(true);
					$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-pe,#pag-pesquisa").toggle(false);
					$('html,body').scrollTop(0);
				});

				$("#rg-pe").click(function(){
					$("#pag-pe").toggle(true);
					$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pesquisa").toggle(false);
					$('html,body').scrollTop(0);
				});

				$("#span-pesquisa").click(function(){
					pesquisaEmp($("#barra-pesquisa").val());
					$("#barra-pesquisa").val("");
				});

				$("#barra-pesquisa").keypress(function(e) {
					if (e.which == 13){
						pesquisaEmp($("#barra-pesquisa").val());
						$("#barra-pesquisa").val("");
					}
				});

				addStyle();

				$("#pag-sp").toggle(false);
				$("#pag-rj").toggle(false);
				$("#pag-mg").toggle(false);
				$("#pag-ba").toggle(false);
				$("#pag-rs").toggle(false);
				$("#pag-pe").toggle(false);
				$("#pag-pesquisa").toggle(true);				

});

function pesquisaEmp(pesquisa){
	$("#pag-pes").empty();

	for(var c = 0; c < empSP.zonaLeste.length; c++){
		if(pesquisa == empSP.zonaLeste[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.zonaLeste[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.zonaLeste[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.zonaLeste[c].valor +" </td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.zonaLeste[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.zonaLeste[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.zonaLeste[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.zonaLeste[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.zonaLeste[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.zonaLeste[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Zona Sul SP
	for(var c = 0; c < empSP.zonaSul.length; c++){
		if(pesquisa == empSP.zonaSul[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.zonaSul[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.zonaSul[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.zonaSul[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.zonaSul[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.zonaSul[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.zonaSul[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.zonaSul[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.zonaSul[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.zonaSul[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.zonaSul[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Zona Oeste SP
	for(var c = 0; c < empSP.zonaOeste.length; c++){
		if(pesquisa == empSP.zonaOeste[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.zonaOeste[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.zonaOeste[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.zonaOeste[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.zonaOeste[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.zonaOeste[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.zonaOeste[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.zonaOeste[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.zonaOeste[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.zonaOeste[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.zonaOeste[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Guarulhos
	for(var c = 0; c < empSP.guarulhos.length; c++){
		if(pesquisa == empSP.guarulhos[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.guarulhos[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.guarulhos[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.guarulhos[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.guarulhos[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.guarulhos[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.guarulhos[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.guarulhos[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.guarulhos[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.guarulhos[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.guarulhos[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Cotia
	for(var c = 0; c < empSP.cotia.length; c++){
		if(pesquisa == empSP.cotia[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.cotia[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.cotia[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.cotia[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.cotia[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.cotia[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.cotia[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.cotia[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.cotia[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.cotia[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.cotia[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Alto Tiete
	for(var c = 0; c < empSP.altot.length; c++){
		if(pesquisa == empSP.altot[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.altot[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.altot[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.altot[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.altot[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.altot[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.altot[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.altot[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.altot[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.altot[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.altot[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//ABC
	for(var c = 0; c < empSP.abc.length; c++){
		if(pesquisa == empSP.abc[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.abc[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.abc[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.abc[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.abc[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.abc[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.abc[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.abc[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.abc[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.abc[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.abc[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Interior SP
	for(var c = 0; c < empSP.interior.length; c++){
		if(pesquisa == empSP.interior[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.interior[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.interior[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.interior[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.interior[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.interior[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.interior[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.interior[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.interior[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empSP.interior[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empSP.interior[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Zona Norte Rio De Janeiro
	for(var c = 0; c < empRJ.zonaNorte.length; c++){
		if(pesquisa == empRJ.zonaNorte[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.zonaNorte[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.zonaNorte[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.zonaNorte[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.zonaNorte[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.zonaNorte[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.zonaNorte[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.zonaNorte[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.zonaNorte[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRJ.zonaNorte[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRJ.zonaNorte[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	// Zona Oeste
	for(var c = 0; c < empRJ.zonaOeste.length; c++){
		if(pesquisa == empRJ.zonaOeste[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.zonaOeste[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.zonaOeste[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.zonaOeste[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.zonaOeste[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.zonaOeste[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.zonaOeste[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.zonaOeste[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.zonaOeste[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRJ.zonaOeste[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRJ.zonaOeste[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//São Gonçalo
	for(var c = 0; c < empRJ.saoGoncalo.length; c++){
		if(pesquisa == empRJ.saoGoncalo[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.saoGoncalo[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.saoGoncalo[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.saoGoncalo[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.saoGoncalo[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.saoGoncalo[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.saoGoncalo[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.saoGoncalo[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.saoGoncalo[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRJ.saoGoncalo[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRJ.saoGoncalo[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Baixada Fluminense
	for(var c = 0; c < empRJ.baixada.length; c++){
		if(pesquisa == empRJ.baixada[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.baixada[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.baixada[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.baixada[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.baixada[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.baixada[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.baixada[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.baixada[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.baixada[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRJ.baixada[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRJ.baixada[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	// Campos Goytacazes
	for(var c = 0; c < empRJ.camposG.length; c++){
		if(pesquisa == empRJ.camposG[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.camposG[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.camposG[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.camposG[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.camposG[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.camposG[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.camposG[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.camposG[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.camposG[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRJ.camposG[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRJ.camposG[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Belo Horizonte
	for(var c = 0; c < empMG.beloHorizonte.length; c++){
		if(pesquisa == empMG.beloHorizonte[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.beloHorizonte[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.beloHorizonte[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.beloHorizonte[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.beloHorizonte[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.beloHorizonte[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.beloHorizonte[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.beloHorizonte[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.beloHorizonte[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empMG.beloHorizonte[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empMG.beloHorizonte[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Região Metropolitana
	for(var c = 0; c < empMG.regiaoMetropolitana.length; c++){
		if(pesquisa == empMG.regiaoMetropolitana[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.regiaoMetropolitana[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.regiaoMetropolitana[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.regiaoMetropolitana[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.regiaoMetropolitana[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.regiaoMetropolitana[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.regiaoMetropolitana[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.regiaoMetropolitana[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.regiaoMetropolitana[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empMG.regiaoMetropolitana[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empMG.regiaoMetropolitana[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Betim
	for(var c = 0; c < empMG.betim.length; c++){
		if(pesquisa == empMG.betim[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.betim[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.betim[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.betim[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.betim[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.betim[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.betim[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.betim[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.betim[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empMG.betim[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empMG.betim[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Contagem
	for(var c = 0; c < empMG.contagem.length; c++){
		if(pesquisa == empMG.contagem[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.contagem[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.contagem[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.contagem[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.contagem[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.contagem[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.contagem[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.contagem[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.contagem[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empMG.contagem[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empMG.contagem[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//G. Valadares E Sete Lagoas
	for(var c = 0; c < empMG.gvalEsete.length; c++){
		if(pesquisa == empMG.gvalEsete[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.gvalEsete[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.gvalEsete[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.contagem[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.contagem[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.contagem[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.contagem[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.contagem[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.contagem[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empMG.contagem[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empMG.contagem[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Salvador
	for(var c = 0; c < empBA.salvador.length; c++){
		if(pesquisa == empBA.salvador[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empBA.salvador[c].imag+"></td></tr>"+				
					"<tr><td>"+ empBA.salvador[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empBA.salvador[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empBA.salvador[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empBA.salvador[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empBA.salvador[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empBA.salvador[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empBA.salvador[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empBA.salvador[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empBA.salvador[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Camaçari
	for(var c = 0; c < empBA.camacari.length; c++){
		if(pesquisa == empBA.camacari[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empBA.camacari[c].imag+"></td></tr>"+				
					"<tr><td>"+ empBA.camacari[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empBA.camacari[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empBA.camacari[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empBA.camacari[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empBA.camacari[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empBA.camacari[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empBA.camacari[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empBA.camacari[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empBA.camacari[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Lauro De Freitas
	for(var c = 0; c < empBA.lauroFreitas.length; c++){
		if(pesquisa == empBA.lauroFreitas[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empBA.lauroFreitas[c].imag+"></td></tr>"+				
					"<tr><td>"+ empBA.lauroFreitas[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empBA.lauroFreitas[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empBA.lauroFreitas[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empBA.lauroFreitas[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empBA.lauroFreitas[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empBA.lauroFreitas[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empBA.lauroFreitas[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empBA.lauroFreitas[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empBA.lauroFreitas[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//PA Zona Norte
	for(var c = 0; c < empRS.portoAlegreNorte.length; c++){
		if(pesquisa == empRS.portoAlegreNorte[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.portoAlegreNorte[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.portoAlegreNorte[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.portoAlegreNorte[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.portoAlegreNorte[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.portoAlegreNorte[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.portoAlegreNorte[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.portoAlegreNorte[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.portoAlegreNorte[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRS.portoAlegreNorte[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRS.portoAlegreNorte[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//PA Zona Sul
	for(var c = 0; c < empRS.portoAlegreSul.length; c++){
		if(pesquisa == empRS.portoAlegreSul[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.portoAlegreSul[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.portoAlegreSul[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.portoAlegreSul[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.portoAlegreSul[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.portoAlegreSul[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.portoAlegreSul[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.portoAlegreSul[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.portoAlegreSul[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRS.portoAlegreSul[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRS.portoAlegreSul[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//São Leopoldo
	for(var c = 0; c < empRS.saoLeopoldo.length; c++){
		if(pesquisa == empRS.saoLeopoldo[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.saoLeopoldo[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.saoLeopoldo[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.saoLeopoldo[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.saoLeopoldo[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.saoLeopoldo[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.saoLeopoldo[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.saoLeopoldo[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.saoLeopoldo[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRS.saoLeopoldo[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRS.saoLeopoldo[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Canoas
	for(var c = 0; c < empRS.canoas.length; c++){
		if(pesquisa == empRS.canoas[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.canoas[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.canoas[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.canoas[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.canoas[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.canoas[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.canoas[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.canoas[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.canoas[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRS.canoas[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRS.canoas[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Caxias Do Sul E Cachoeirinha
	for(var c = 0; c < empRS.caxiasEcachoeira.length; c++){
		if(pesquisa == empRS.caxiasEcachoeira[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.caxiasEcachoeira[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.caxiasEcachoeira[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.caxiasEcachoeira[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.caxiasEcachoeira[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.caxiasEcachoeira[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.caxiasEcachoeira[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.caxiasEcachoeira[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.caxiasEcachoeira[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empRS.caxiasEcachoeira[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empRS.caxiasEcachoeira[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Camaragibe
	for(var c = 0; c < empPE.camagibe.length; c++){
		if(pesquisa == empPE.camagibe[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empPE.camagibe[c].imag+"></td></tr>"+				
					"<tr><td>"+ empPE.camagibe[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empPE.camagibe[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empPE.camagibe[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empPE.camagibe[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empPE.camagibe[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empPE.camagibe[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empPE.camagibe[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empPE.camagibe[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empPE.camagibe[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Paulista
	for(var c = 0; c < empPE.paulista.length; c++){
		if(pesquisa == empPE.paulista[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empPE.paulista[c].imag+"></td></tr>"+				
					"<tr><td>"+ empPE.paulista[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empPE.paulista[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empPE.paulista[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empPE.paulista[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empPE.paulista[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empPE.paulista[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empPE.paulista[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empPE.paulista[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empPE.paulista[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	//Jaboatão
	for(var c = 0; c < empPE.jaboatao.length; c++){
		if(pesquisa == empPE.jaboatao[c].nome){
			$("#pag-pes").append(
			"<div class="+"col-xs-4 col-md-4"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empPE.jaboatao[c].imag+"></td></tr>"+				
					"<tr><td>"+ empPE.jaboatao[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empPE.jaboatao[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empPE.jaboatao[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empPE.jaboatao[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empPE.jaboatao[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empPE.jaboatao[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empPE.jaboatao[c].m +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 1 Quarto:</strong> "+ empPE.jaboatao[c].q1 +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Valor com 2 Quartos:</strong> "+ empPE.jaboatao[c].q2 +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
		addStyle();
		$("#pag-pesquisa").toggle(true);
		$("#pag-sp,#pag-rj,#pag-mg,#pag-ba,#pag-rs,#pag-pe").toggle(false);
		return
		}
	}

	alert("Escolha Um Dos Residenciais Sugeridos");
	return
}

function addStyle(){
	$(".btn-infoMais").addClass("dropdown-toggle");
	$(".btn-infoMais").addClass("btn");
	$(".btn-infoMais").addClass("btn-primary");
	$(".table").addClass("table-bordered");
	$(".table").addClass("table-hover");
	$(".panel").addClass("panel-default");
	$(".panel-info").addClass("panel");
	$(".panel-info").addClass("panel-default");
	$(".btn-voltar").addClass("pull-right");
	$(".btn-voltar").addClass("btn");
	$(".btn-voltar").addClass("btn-primary");
	$(".noCopy").addClass("btn");
	$(".noCopy").addClass("btn-primary");
	$(".noCopy").addClass("btn-xs");
}

function loadSP(){
		var c =0;

		//Zona Leste
		$("#pag-sp-zl").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-zl"+">Zona Leste (SP)</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empSP.zonaLeste.length;c++){
		$("#pag-sp-zl").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.zonaLeste[c].imag+"></td></tr>"+			
					"<tr><td>"+ empSP.zonaLeste[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.zonaLeste[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.zonaLeste[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">"+ empSP.zonaLeste[c].status +"</button> <button class="+"noCopy"+">"+ empSP.zonaLeste[c].m +"</button></td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.zonaLeste[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.zonaLeste[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.zonaLeste[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Zona Leste
    
    //Zona Sul
    $("#pag-sp-zs").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-zs"+">Zona Sul (SP)</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.zonaSul.length;c++){
		$("#pag-sp-zs").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.zonaSul[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.zonaSul[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.zonaSul[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.zonaSul[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.zonaSul[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.zonaSul[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.zonaSul[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.zonaSul[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Zona Sul

	//Zona Oeste
    $("#pag-sp-zo").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-zo"+">Zona Oeste (SP)</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.zonaOeste.length;c++){
		$("#pag-sp-zo").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.zonaOeste[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.zonaOeste[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.zonaOeste[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.zonaOeste[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.zonaOeste[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.zonaOeste[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.zonaOeste[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.zonaOeste[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Zona Oeste

	//Zona Guarulhos
    $("#pag-sp-gua").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-gua"+">Guarulhos</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.guarulhos.length;c++){
		$("#pag-sp-gua").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+	
					"<tr><td><img class="+"img-center"+" src="+empSP.guarulhos[c].imag+"></td></tr>"+			
					"<tr><td>"+ empSP.guarulhos[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.guarulhos[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.guarulhos[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.guarulhos[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.guarulhos[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.guarulhos[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.guarulhos[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Guarulhos

	//Cotia
    $("#pag-sp-co").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-co"+">Cotia</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.cotia.length;c++){
		$("#pag-sp-co").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.cotia[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.cotia[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.cotia[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.cotia[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.cotia[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.cotia[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.cotia[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.cotia[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Cotia

	//Alto Tiete
    $("#pag-sp-co").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-alt"+">Alto Tietê</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.altot.length;c++){
		$("#pag-sp-co").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+	
					"<tr><td><img class="+"img-center"+" src="+empSP.altot[c].imag+"></td></tr>"+			
					"<tr><td>"+ empSP.altot[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.altot[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.altot[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.altot[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.altot[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.altot[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.altot[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Alto Tiete

	//ABC
    $("#pag-sp-abc").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-abc"+">ABC</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.abc.length;c++){
		$("#pag-sp-abc").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.abc[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.abc[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.abc[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.abc[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.abc[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.abc[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.abc[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.abc[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim ABC

	//Interior
    $("#pag-sp-abc").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-sp-int"+">Interior</a>"+
					"</div>"+
				"</div>"+
			"</div>"
	);

	for(c = 0;c<empSP.interior.length;c++){
		$("#pag-sp-abc").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empSP.interior[c].imag+"></td></tr>"+				
					"<tr><td>"+ empSP.interior[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empSP.interior[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empSP.interior[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empSP.interior[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empSP.interior[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empSP.interior[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empSP.interior[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Interior
}

function loadRJ(){
	var c = 0;

		//Zona Norte
		$("#pag-rj-zn").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rj-zn"+">Zona Norte (RJ)</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRJ.zonaNorte.length;c++){
		$("#pag-rj-zn").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+	
					"<tr><td><img class="+"img-center"+" src="+empRJ.zonaNorte[c].imag+"></td></tr>"+			
					"<tr><td>"+ empRJ.zonaNorte[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.zonaNorte[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.zonaNorte[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.zonaNorte[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.zonaNorte[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.zonaNorte[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.zonaNorte[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Zona Norte

	//Zona Oeste
		$("#pag-rj-zn").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rj-zo"+">Zona Oeste (RJ)</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRJ.zonaOeste.length;c++){
		$("#pag-rj-zn").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.zonaOeste[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.zonaOeste[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.zonaOeste[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.zonaOeste[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.zonaOeste[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.zonaOeste[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.zonaOeste[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.zonaOeste[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Zona Oeste

	//São Gonçalo
		$("#pag-rj-sgo").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rj-sgo"+">São Gonçalo</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRJ.saoGoncalo.length;c++){
		$("#pag-rj-sgo").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+	
					"<tr><td><img class="+"img-center"+" src="+empRJ.saoGoncalo[c].imag+"></td></tr>"+			
					"<tr><td>"+ empRJ.saoGoncalo[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.saoGoncalo[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.saoGoncalo[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.saoGoncalo[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.saoGoncalo[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.saoGoncalo[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.saoGoncalo[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim São Gonçalo

	//Baixada Fluminense
		$("#pag-rj-bai").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rj-bai"+">Baixada Fluminense</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRJ.baixada.length;c++){
		$("#pag-rj-bai").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.baixada[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.baixada[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.baixada[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.baixada[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.baixada[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.baixada[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.baixada[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.baixada[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Baixada Fluminense

	//Campos Goytacazes
		$("#pag-rj-cgo").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rj-cgo"+">Campos Goytacazes</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRJ.camposG.length;c++){
		$("#pag-rj-cgo").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRJ.camposG[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRJ.camposG[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRJ.camposG[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRJ.camposG[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRJ.camposG[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRJ.camposG[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRJ.camposG[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRJ.camposG[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Campos Goytacazes
	
}

function loadMG(){
	//Belo Horizonte
		$("#pag-mg-bh").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-mg-bh"+">Belo Horizonte</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empMG.beloHorizonte.length;c++){
		$("#pag-mg-bh").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.beloHorizonte[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.beloHorizonte[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.beloHorizonte[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.beloHorizonte[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.beloHorizonte[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.beloHorizonte[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.beloHorizonte[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.beloHorizonte[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Belo Horizonte

	//Região Metropolitada
		$("#pag-mg-rm").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-mg-rm"+">Região Metropolitana</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empMG.regiaoMetropolitana.length;c++){
		$("#pag-mg-rm").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.regiaoMetropolitana[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.regiaoMetropolitana[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.regiaoMetropolitana[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.regiaoMetropolitana[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.regiaoMetropolitana[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.regiaoMetropolitana[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.regiaoMetropolitana[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.regiaoMetropolitana[c].m +" </li>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Região Metropolitada

	//Betim
		$("#pag-mg-bem").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-mg-bem"+">Betim</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empMG.betim.length;c++){
		$("#pag-mg-bem").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.betim[c].imag+"></td></tr>"+		
					"<tr><td>"+ empMG.betim[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.betim[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.betim[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.betim[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.betim[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.betim[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.betim[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Betim

	//Contagem
		$("#pag-mg-con").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-mg-con"+">Contagem</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empMG.contagem.length;c++){
		$("#pag-mg-con").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empMG.contagem[c].imag+"></td></tr>"+				
					"<tr><td>"+ empMG.contagem[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.contagem[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.contagem[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.contagem[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.contagem[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.contagem[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.contagem[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Contagem

	//G. Valadares e Sete
		$("#pag-mg-ges").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-mg-ges"+">G. Valadares e Sete Lagoas</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empMG.gvalEsete.length;c++){
		$("#pag-mg-ges").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+	
					"<tr><td><img class="+"img-center"+" src="+empMG.gvalEsete[c].imag+"></td></tr>"+			
					"<tr><td>"+ empMG.gvalEsete[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empMG.gvalEsete[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empMG.gvalEsete[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empMG.gvalEsete[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empMG.gvalEsete[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empMG.gvalEsete[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empMG.gvalEsete[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim G. Valadres E Sete

}

function loadBA(){
		var c = 0;
		//Salvador
		$("#pag-ba-sa").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-ba-sa"+">Salvador</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empBA.salvador.length;c++){
		$("#pag-ba-sa").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empBA.salvador[c].imag+"></td></tr>"+				
					"<tr><td>"+ empBA.salvador[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empBA.salvador[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empBA.salvador[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empBA.salvador[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empBA.salvador[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empBA.salvador[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empBA.salvador[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Salvador

	//Camaçari
		$("#pag-ba-ca").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-ba-ca"+">Camaçari</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empBA.camacari.length;c++){
		$("#pag-ba-ca").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empBA.camacari[c].imag+"></td></tr>"+				
					"<tr><td>"+ empBA.camacari[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empBA.camacari[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empBA.camacari[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empBA.camacari[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empBA.camacari[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empBA.camacari[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empBA.camacari[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Camaçari

	//Lauro De Freitas
		$("#pag-ba-lau").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-ba-lau"+">Lauro De Freitas</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empBA.lauroFreitas.length;c++){
		$("#pag-ba-lau").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empBA.salvador[c].imag+"></td></tr>"+				
					"<tr><td>"+ empBA.lauroFreitas[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empBA.lauroFreitas[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empBA.lauroFreitas[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empBA.lauroFreitas[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empBA.lauroFreitas[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empBA.lauroFreitas[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empBA.lauroFreitas[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Lauro De Freitas
}

function loadRS(){
		var c = 0;

		// Porto Alegre - ZN
		$("#pag-rs-zn").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rs-zn"+">Porto Alegre - Zona Norte</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRS.portoAlegreNorte.length;c++){
		$("#pag-rs-zn").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.portoAlegreNorte[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.portoAlegreNorte[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.portoAlegreNorte[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.portoAlegreNorte[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.portoAlegreNorte[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.portoAlegreNorte[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.portoAlegreNorte[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.portoAlegreNorte[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Porto Alegre - ZN

	// Porto Alegre - ZS
		$("#pag-rs-zs").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rs-zs"+">Porto Alegre - Zona Sul</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRS.portoAlegreSul.length;c++){
		$("#pag-rs-zs").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.portoAlegreSul[c].imag+"></td></tr>"+				
					"<tr><td>"+ empRS.portoAlegreSul[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.portoAlegreSul[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.portoAlegreSul[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.portoAlegreSul[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.portoAlegreSul[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.portoAlegreSul[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.portoAlegreSul[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Porto Alegre - ZS

	// São Leopoldo
		$("#pag-rs-zs").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rs-sl"+">São Leopoldo</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRS.saoLeopoldo.length;c++){
		$("#pag-rs-zs").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.saoLeopoldo[c].imag+"></td></tr>"+			
					"<tr><td>"+ empRS.saoLeopoldo[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.saoLeopoldo[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.saoLeopoldo[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.saoLeopoldo[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.saoLeopoldo[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.saoLeopoldo[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.saoLeopoldo[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim São Leopoldo

	// Canoas
		$("#pag-rs-zs").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rs-ca"+">Canoas</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRS.canoas.length;c++){
		$("#pag-rs-zs").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.canoas[c].imag+"></td></tr>"+					
					"<tr><td>"+ empRS.canoas[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.canoas[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.canoas[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.canoas[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.canoas[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.canoas[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.canoas[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Canoas

	// Caxias Do Sul e Cachoeirinha
		$("#pag-rs-cec").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-rs-cec"+">Caxias Do Sul e Cachoeirinha</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empRS.caxiasEcachoeira.length;c++){
		$("#pag-rs-cec").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empRS.caxiasEcachoeira[c].imag+"></td></tr>"+					
					"<tr><td>"+ empRS.caxiasEcachoeira[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empRS.caxiasEcachoeira[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empRS.caxiasEcachoeira[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empRS.caxiasEcachoeira[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empRS.caxiasEcachoeira[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empRS.caxiasEcachoeira[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empRS.caxiasEcachoeira[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Caxias Do Sul e Cachoeirinha
}

function loadPE(){
	var c = 0;

	// Camaragibe
		$("#pag-pe-ca").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-pe-ca"+">Camaragibe</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empPE.camagibe.length;c++){
		$("#pag-pe-ca").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empPE.camagibe[c].imag+"></td></tr>"+					
					"<tr><td>"+ empPE.camagibe[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empPE.camagibe[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empPE.camagibe[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empPE.camagibe[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empPE.camagibe[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empPE.camagibe[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empPE.camagibe[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Camaragibe

	// Paulista
		$("#pag-pe-pa").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-pe-pa"+">Paulista</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empPE.paulista.length;c++){
		$("#pag-pe-pa").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empPE.paulista[c].imag+"></td></tr>"+				
					"<tr><td>"+ empPE.paulista[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empPE.paulista[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empPE.paulista[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empPE.paulista[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empPE.paulista[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empPE.paulista[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empPE.paulista[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Paulista

	// Jaboatão dos Guararapes
		$("#pag-pe-ja").append(
			"<div class="+"col-md-12"+">"+
				"<div class="+"panel-info"+">"+
					"<div class="+"panel-body"+">"+
						"<a name="+"map-pe-ja"+">Jaboatão dos Guararapes</a>"+
					"</div>"+
				"</div>"+
			"</div>"
		);


		for(c = 0;c<empPE.jaboatao.length;c++){
		$("#pag-pe-ja").append(
			"<div class="+"col-xs-4 col-md-3"+">"+
				"<table class="+"table table-hover"+">"+
					"<tr><td><img class="+"img-center"+" src="+empPE.jaboatao[c].imag+"></td></tr>"+			
					"<tr><td>"+ empPE.jaboatao[c].nome +" ➯ </td></tr>"+					
					"<tr><td><strong>• Valor: </strong>"+ empPE.jaboatao[c].valor +" </td></tr>"+
					"<tr><td><strong>• Local: </strong>"+ empPE.jaboatao[c].local +"</td></tr>"+
					"<tr><td><button class="+"noCopy"+">Data Da Entrega: "+ empPE.jaboatao[c].status +"</button</td></tr>"+
						"<tr><td>"+
							"<div class="+"dropup"+">"+
  								"<button class="+"btn-infoMais data-toggle="+"dropdown"+">Mais Informações <span class="+"caret"+"></span></button>"+
  								"<ul class="+"dropdown-menu"+">"+
    								"<li><strong>Endereço:</strong> "+ empPE.jaboatao[c].rua +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Entrega:</strong> "+ empPE.jaboatao[c].status +" </li>"+
    								"<li class="+"divider"+"></li>"+
    								"<li><strong>Metragem:</strong> "+ empPE.jaboatao[c].m +" </li>"+
  								"</ul>"+
							"</div>"+
						"</td></tr>"+
					"</table>"+
			"</div>"
		);
	}
	//Fim Jaboatão dos Guararapes
}
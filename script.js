( function(){
	
	//defino actualizarHora
	
	var actualizarHora = function(){
		
		//variables
		
		//extraigo datos de fecha
        var fecha = new Date(),
            horas = fecha.getHours(),
            am_pm,
            minutos = fecha.getMinutes(), 
            segundos = fecha.getSeconds(), 
            diaSemana = fecha.getDay(), 
            dia = fecha.getDate(), 
            mes = fecha.getMonth(), 
            anio = fecha.getFullYear();

		//acceso a su id en html
        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('am_pm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('anio');

        //muestro el dia	
		
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;

		//muestro el mes
		
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        pYear.textContent = anio;

		//muestro las horas
		
        if(horas > 12){
			horas = horas - 12;
			am_pm = 'PM';
			if(horas <10){ horas = "0" + horas};	
        }
		else{
			am_pm = 'AM';
        }
        
        /*if(horas == 0){
			horas = 12;
        };*/

        pHoras.textContent = horas;
        pAMPM.textContent = am_pm;

		//muestro minutos y segundos
		
        if(minutos <10){ minutos = "0" + minutos};		
        if(segundos < 10){ segundos = "0" + segundos};
		
		//
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

	};
 
	//llamo a actualizarHora
	actualizarHora();
	//actualizo cada 1s
	var intervalo = setInterval(actualizarHora, 1000);
 
}	())
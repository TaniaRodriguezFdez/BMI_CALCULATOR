import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;
  constructor(private route: ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi)
  }
  ngOnInit(): void {
    this.getResultado();
  }
  getResultado() { 
    if (this.bmi >= 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso superior al normal, ponte a hacer ejercicio';
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso normal. ¡Buen trabajo!'
    } else { 
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'Tienes un peso por debajo de lo normal, puedes comer un poco más'
    }
  }

}

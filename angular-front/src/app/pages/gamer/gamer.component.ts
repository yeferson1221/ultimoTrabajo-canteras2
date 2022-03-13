/**
 *  tenemos a logica del bingo donde se seleccciona las casillas, se hace la comparacion de la
 *  tabla de bingo ganadora y se selecciona el ganardor que se va almacenar en la bd
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { TableBingo } from 'src/app/models/tableBingo.model';


@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
   //listar de los juagdores que ganan
  listTableBingo: TableBingo[] = [];
  //lista  donde se guarda los numeros marcados en la targeta de bingo
  listOfMarkedNumber: number [] = [];
  //lista de los numeros que se han mostrado aleatoriamente
  listOfDisplayedNumber:number[]=[];
  //lista total de numeros que puden  caer 
  listOfAleatoryNumber: number [] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  //booleano que me inicia el juego
  startGame: boolean = true;

  constructor(private _tableBingoService: UsuarioService) { }

  ngOnInit(): void {
    // el metodo que se inicia primero al cargar la pagina
    this.obtenerTableBingos();
  }

  //metodo optener ganadores del bingo 
  obtenerTableBingos() {
    this._tableBingoService.getTableBingo().subscribe(data => {
      console.log(data);
      this.listTableBingo = data;
    }, error => {
      console.log(error);
    })
  }
  // imprime en pantalla un numero aleatorio cada 10s
  AleatoryNumber(){
    this.listOfAleatoryNumber.sort(()=>  Math.random() - 0.5 );
    for(let i=0; i<this.listOfAleatoryNumber.length; i++){
      setTimeout(()=>{
        this.listOfDisplayedNumber[i]=this.listOfAleatoryNumber[i]
        document.querySelector(".aleatory-number").innerHTML = (this.listOfAleatoryNumber[i]).toString()
      },i*3000)
    }
  }
  // la logica para seleccionar y guardar el numero en el bingo de forma dinamica
  markNumber(e){
    this.listOfMarkedNumber.push(parseInt(e.target.innerHTML))
    console.log(e.target.id);
    document.getElementById(e.target.id).setAttribute("disabled","false");
    document.getElementById(e.target.id).classList.add("bg-primary")

  }

  shoutBingo(){
    console.log(this.listOfMarkedNumber);
    console.log(this.listOfDisplayedNumber);
    let winner = false;
    for(let i in this.listOfMarkedNumber){
      if(this.listOfDisplayedNumber.includes(this.listOfMarkedNumber[i])){
        console.log("si esta")
        winner=true
      }else{
        winner=false
      }
    }
    
    console.log(winner);
  }
  
  guardarTableBingo(){

  }

}

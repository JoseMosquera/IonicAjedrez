import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the JugadoresEquipoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JugadoresEquipoProvider {

  jugadores: Array<any> = [];
  jugadoresList: Array<any> = [];

  
  pertenecenList: Array<any> = [];
  jugadoresListEquipo: Array<any> = [];

  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello JugadoresEquipoProvider Provider');
  }

  obtenerJugadores(clave: string){
    this.jugadores.length = 0;
    this.jugadoresList.length = 0;
    console.log("funcion obtenerJugadores recibe un key de equipo: "+clave)
    return new Promise((resolve, reject) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(clave)).valueChanges().subscribe(data => {
        if (data) {
          console.log("Variable data en el povider, retorna objetos con el mismo key equipo: ");
          console.log(data);

          this.jugadoresList = data;

          this.jugadoresList.forEach(element => {

            let clave = element.jugador;

            this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
              console.log("Key del jugador provider: "+clave);
              console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data));
              console.log("--------------------------");
              console.log(data[0]);
              this.jugadores.push(data[0]);

            });
          });


          // data.forEach(element => {
          //   console.log(element);
            
          //   let clave = element.jugador;

            // this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
            //   console.log("Key del jugador provider: "+clave);
            //     console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data));
            //     console.log("--------------------------");
            //     console.log(data[0]);
            //     this.jugadores.push(data[0]);

          //   });
          // });
          console.log(this.jugadores);
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  }

  listarJugadores(categoria: string){
    this.pertenecenList.length = 0;
    this.jugadoresListEquipo.length = 0;
    return new Promise((resolve, reject) => {
      if (categoria=="A") {
        this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt(1500)).valueChanges().subscribe(data => {
          if(data){
            console.log("entra en categoria A");
            console.log("Variable data jugador en el povider funcion listarJugadores: "+JSON.stringify(data));

            console.log("valor data");
            console.log(data);
            this.pertenecenList = data;
            console.log("valor pertenecenList");
            console.log(this.pertenecenList);

            console.log("valor pertenecenList fuera de foreach")
            console.log(this.pertenecenList);

            this.pertenecenList.forEach(element => {
              console.log("foreach obtener todos los jugadores con equipo false");
              console.log(element);
              if (element.equipo==false) {
                console.log("el siguiente jugador tiene equipo=false");
                console.log(element);
                this.jugadoresListEquipo.push(element);
                console.log(this.jugadoresListEquipo);
              }
              console.log("salida if e imprime la lista de jugadores");
              console.log(this.jugadoresListEquipo);
            });

            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else if (categoria=="B"){
        this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt(1250).endAt(1499)).valueChanges().subscribe(data => {
          if(data){
            console.log("entra en categoria B");
            console.log("Variable data jugador en el povider funcion listarJugadores: "+JSON.stringify(data));

            console.log("forecah guardar jugadores en pertenecenList");
            data.forEach(element => {
              console.log(element);
              this.pertenecenList.push(element);
            });

            this.pertenecenList.forEach(element => {
              console.log("foreach obtener todos los jugadores con equipo false");
              console.log(element);
              if (element.equipo==false) {
                console.log("el siguiente jugador tiene equipo=false");
                console.log(element);
                this.jugadoresListEquipo.push(element);
                console.log(this.jugadoresListEquipo);
              }
              console.log("salida if e imprime la lista de jugadores");
              console.log(this.jugadoresListEquipo);
            });

            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else if (categoria=="C"){
        this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt(1000).endAt(1249)).valueChanges().subscribe(data => {
          if(data){
            console.log("entra en categoria C");
            console.log("Variable data jugador en el povider funcion listarJugadores: "+JSON.stringify(data));

            console.log("forecah guardar jugadores en pertenecenList");
            data.forEach(element => {
              console.log(element);
              this.pertenecenList.push(element);
            });

            this.pertenecenList.forEach(element => {
              console.log("foreach obtener todos los jugadores con equipo false");
              console.log(element);
              if (element.equipo==false) {
                console.log("el siguiente jugador tiene equipo=false");
                console.log(element);
                this.jugadoresListEquipo.push(element);
                console.log(this.jugadoresListEquipo);
              }
              console.log("salida if e imprime la lista de jugadores");
              console.log(this.jugadoresListEquipo);
            });

            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else if (categoria=="D"){
        this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt(750).endAt(999)).valueChanges().subscribe(data => {
          if(data){
            console.log("entra en categoria D");
            console.log("Variable data jugador en el povider funcion listarJugadores: "+JSON.stringify(data));

            console.log("forecah guardar jugadores en pertenecenList");
            data.forEach(element => {
              console.log(element);
              this.pertenecenList.push(element);
            });

            this.pertenecenList.forEach(element => {
              console.log("foreach obtener todos los jugadores con equipo false");
              console.log(element);
              if (element.equipo==false) {
                console.log("el siguiente jugador tiene equipo=false");
                console.log(element);
                this.jugadoresListEquipo.push(element);
                console.log(this.jugadoresListEquipo);
              }
              console.log("salida if e imprime la lista de jugadores");
              console.log(this.jugadoresListEquipo);
            });

            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    })
  }
}

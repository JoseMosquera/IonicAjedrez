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

  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello JugadoresEquipoProvider Provider');
  }

  obtenerJugadores(clave: string){
    this.jugadores = [];
    console.log("funcion obtenerJugadores recibe un key de equipo: "+clave)
    return new Promise((resolve, reject) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(clave)).valueChanges().subscribe(data => {
        if (data) {
          console.log("Variable data en el povider, retorna objetos con el mismo key equipo: "+JSON.stringify(data));
          let jugador: any;
          data.forEach(element => {
            console.log(element);
            
            let clave = element.jugador;

            this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
              console.log("Key del jugador provider: "+clave);
                console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data));
                let algo = {
                  nombre: data[0].nombre,
                  elo: data[0].elo
                }
                this.jugadores.push(algo);

            });
            // this.obtenerJugador(element.jugador)
            // .then(exist => {
            //   if (exist) {
            //     this.jugadores.unshift(this.jugador)
            //     console.log("Variable jugadores en provider dentro de foreach: "+this.jugadores);
            //   } else {
            //     return null;
            //   }
            // })
          });
          
          console.log(this.jugadores);
          // this.jugadoresEquipo = jugador;
          // let jugadores = this.jugadoresEquipo['jugador'];
          // console.log("Intento de obtener solo jugadores: "+jugadores);
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  }

  listarJugadores(){

  }

  // obtenerJugador(clave: string){
  //   console.log("funcion obtenerJugador recibe un key de jugador provider: "+clave)
  //   return new Promise((resolve, reject) => {
  //     this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
  //       if (data) {
  //         console.log("Key del jugador provider: "+clave)
  //           this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
  //             console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data));
  //             this.jugador = data;
  //             console.log("Variable jugador en el povider funcion obtenerJugador: "+this.jugador);
  //           });
  //         // console.log("Variable data en el povider: "+JSON.stringify(data));
  //         // let jugador: any;
  //         // data.forEach(element => {
  //         //   console.log(element.jugador);
            
  //         // });
  //         // this.jugadoresEquipo = jugador;
  //         // // let jugadores = this.jugadoresEquipo['jugador'];
  //         // // console.log("Intento de obtener solo jugadores: "+jugadores);
  //         // console.log("Variable jugadoresEquipo en el povider: "+this.jugadoresEquipo);
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }
  //     })
  //   })
  // }

}

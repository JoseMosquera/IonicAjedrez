import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Jugador } from '../../models/jugador';
import { map } from 'rxjs/operators';

@Injectable()
export class JugadoresEquipoProvider {

  jugadores: Array<any> = [];
  jugadoresList: Array<any> = [];

  capitanes: Array<any> = [];
  capitanesList: Array<any> = [];
  
  pertenecenList: Array<any> = [];
  jugadoresListEquipo: Array<any> = [];

  rol: string;

  equipo = {};
  equiposList = [];
  jugadoresEquipos = [];

  claveList = [];

  claveTitulares = [];
  titularesJornada = [];

  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello JugadoresEquipoProvider Provider');
    this.jugadores.length = 0;
    console.log(this.jugadores);
  }

  obtenerJugadores(clave: string){
    this.jugadores.length = 0;
    console.log(this.jugadores);
    this.jugadoresList.length = 0;
    console.log("funcion obtenerJugadores recibe un key de equipo: "+clave)
    return new Promise((resolve) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(clave)).valueChanges().subscribe(data => {
        if (data) {
          console.log("Variable data en el povider, retorna objetos con el mismo key equipo: ");
          console.log(data);

          this.jugadoresList = data;

          console.log(this.jugadoresList);

          this.jugadoresList.forEach(element => {

            let clave = element.jugador;

            console.log(this.jugadores);  

            this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
              console.log("Key del jugador provider: "+clave);
              console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data[0]));
              console.log("--------------------------");
              console.log(data[0]);
              this.jugadores.push(data[0]);
              console.log(this.jugadores);
            });
          });
          console.log(this.jugadores);
          resolve(true);
          this.jugadores.length=0;
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

  listarCapitanes(){
    return new Promise((resolve, reject) => {
      this.afdb.list('/Jugadores/', ref => ref.orderByChild('rol').equalTo('capitan'))
        .valueChanges().subscribe(data => {
          if(data){
            console.log("Variable data jugador en el povider funcion listarCapitanes: "+JSON.stringify(data));

            console.log("valor data");
            console.log(data);
            this.capitanes = data;
            console.log("valor capitanes");
            console.log(this.capitanes);
            resolve(true);
          } else {
            resolve(false);
          }
        })
    })
  }

  expulsarJugador(jugador: Jugador, listado: Array<any>){
    console.log("--------------------expulsarJugador-------------------");
    let clave = jugador.key;
    return new Promise((resolve, reject) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('jugador').equalTo(clave))
        .snapshotChanges().pipe(
          map(actions => 
            actions.map(a => ({ key: a.key, ...a.payload.val() }))
          )
        ).subscribe(item => {
          let claveList = item.map(item => item.key);

          let clave;

          claveList.forEach(element => {
            clave = element;
          });
          
          console.log("clave: ");
          console.log(clave);

          if (item) {
            console.log("variable item funcion expulsar jugador: ");
            console.log(item);
            
            this.afdb.database.ref('/EquiposJugadores/'+clave).remove();

            listado.forEach(element => {
              console.log("variable element dentro de foreach data: ");
              console.log(element);
              if(element.key == jugador.key){
                console.log("jugador antes de editar");
                console.log(jugador);
                jugador.equipo = false;
                this.afdb.list("/Jugadores/").update(jugador.key, jugador);
                console.log("jugador despues de editar");
                console.log(jugador);
              }
            });
            resolve(true);
          } else {
            resolve(false)
          }
        });
    })
  }

  desasignarTitular(jugador: Jugador, listado: Array<any>){
    console.log("--------------------expulsarJugador-------------------");
    let clave = jugador.key;
    return new Promise((resolve, reject) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('jugador').equalTo(clave))
        .snapshotChanges().pipe(
          map(actions => 
            actions.map(a => ({ key: a.key, ...a.payload.val() }))
          )
        ).subscribe(item => {
          let claveList = item.map(item => item.key);

          let clave;

          claveList.forEach(element => {
            clave = element;
          });
          
          console.log("clave: ");
          console.log(clave);

          if (item) {
            console.log("variable item funcion expulsar jugador: ");
            console.log(item);
            
            this.afdb.database.ref('/EquiposJugadores/'+clave).remove();

            listado.forEach(element => {
              console.log("variable element dentro de foreach data: ");
              console.log(element);
              if(element.key == jugador.key){
                console.log("jugador antes de editar");
                console.log(jugador);
                jugador.equipo = false;
                this.afdb.list("/Jugadores/").update(jugador.key, jugador);
                console.log("jugador despues de editar");
                console.log(jugador);
              }
            });
            resolve(true);
          } else {
            resolve(false)
          }
        });
    })
  }

  titulares(clave: string){
    console.log("---------------titulares----------------")
    console.log(clave);
    return new Promise((resolve) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(clave)).valueChanges().subscribe(data => {
        if(data){
          console.log("Variable data en el povider, retorna objetos con el mismo key equipo: ");
          console.log(data);

          this.claveList = data;

          this.claveList.forEach(element => {
            let clave = element.jugador;

            this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
              console.log("Key del jugador provider: "+clave);
              console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data[0]));
              console.log("--------------------------");
              console.log(data[0]);
              this.jugadoresEquipos.push(data[0]);
              console.log(this.jugadoresEquipos);
            });
          });

        console.log(this.jugadoresEquipos);
        resolve(true);
        this.jugadoresEquipos.length=0;

          console.log(this.jugadoresEquipos);
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  }

  obtenerTitulares(clave: string){
    console.log("---------------titulares----------------")
    console.log(clave);
    return new Promise((resolve) => {
      this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(clave)).valueChanges().subscribe(data => {
        if(data){
          console.log("Variable data en el povider, retorna objetos con el mismo key equipo: ");
          console.log(data);

          this.claveList = data;

          this.claveList.forEach(element => {
            let clave = element.jugador;

            this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave)).valueChanges().subscribe(data => {
              console.log("Key del jugador provider: "+clave);
              console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data[0]));
              console.log("--------------------------");
              console.log(data[0]);
              this.titularesJornada.push(data[0]);
              console.log(this.titularesJornada);
            });
          });

        console.log(this.titularesJornada);
        resolve(true);
        this.titularesJornada.length=0;

          console.log(this.titularesJornada);
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  }

  titularesObt(clave: string){
    console.log("---------------titulares----------------")
    console.log(clave);
    return new Promise((resolve) => {
      this.afdb.list('/JornadasJugadores/', ref => ref.orderByChild('jornada').equalTo(clave)).valueChanges().subscribe(data => {
        if(data){
          console.log("Variable data en el povider, retorna objetos con el mismo key equipo: ");
          console.log(data);

          this.claveTitulares = data;

          this.claveTitulares.forEach(element => {
            let clave = element.jugador;

            this.afdb.list('/JornadasJugadores/', ref => ref.orderByChild('jugador').equalTo(clave)).valueChanges().subscribe(data => {
              console.log("Key del jugador provider: "+clave);
              console.log("Variable data jugador en el povider funcion obtenerJugador: "+JSON.stringify(data[0]));
              console.log("--------------------------");
              console.log(data[0]);
              this.jugadoresEquipos.push(data[0]);
              console.log(this.jugadoresEquipos);
            });
          });

          console.log(this.jugadoresEquipos);
          resolve(true);
          this.jugadoresEquipos.length=0;
        } else {
          resolve(false);
        }
      })
    })
  }

  comprobarRol(email: string){
    return new Promise((resolve, reject) => {
      this.afdb.list('/Jugadores/', ref => ref.orderByChild('email').equalTo(email))
        .valueChanges().subscribe(data => {
          if(data){
            console.log("Variable data jugador en el povider funcion comprobarRol: "+JSON.stringify(data));

            console.log("valor data");
            console.log(data);
            data.forEach(element => {
              this.rol = element.rol;
            });
            console.log("valor rol");
            console.log(this.rol);
            resolve(true);
          } else {
            resolve(false);
          }
        })
    })
  }

  resultados(clave: string, resultado:string, casa: string){
    return new Promise((resolve, reject) => {
      this.afdb.list('/Jugadores/', ref => ref.orderByChild('key').equalTo(clave))
        .valueChanges().subscribe(data => {
          if(data){
            console.log("Variable data jugador en el povider funcion comprobarRol: "+JSON.stringify(data));

            console.log("valor data");
            console.log(data);
            data.forEach(element => {
              console.log("elemenr: ");
              console.log(element);
              let jugador = element;
              console.log("jugador antes de modificar: ");
              console.log(jugador);
              if (resultado=="Ha ganado") {
                jugador.elo += 2;
                jugador.g += 1;
                jugador.j +=1;
                if (casa=='t') {
                  jugador.c +=1;
                } else if (casa=='f'){
                  jugador.f += 1;
                }
              } else if (resultado=="Ha empatado"){
                jugador.elo += 1;
                jugador.e += 1;
                jugador.j +=1;
                if (casa=='t') {
                  jugador.c +=1;
                } else if (casa=='f'){
                  jugador.f += 1;
                }
              } else if (resultado=="Ha perdido"){
                jugador.elo += 1;
                jugador.p += 1;
                jugador.j +=1;
                if (casa=='t') {
                  jugador.c +=1;
                } else if (casa=='f'){
                  jugador.f += 1;
                }
              }
              
              console.log("jugador despues de modificar: ");
              console.log(jugador);
              this.afdb.list("/Jugadores/").update(jugador.key, jugador);
            });

            console.log("valor rol");
            console.log(this.rol);
            resolve(true);
          } else {
            resolve(false);
          }
        })
    })
  }
}

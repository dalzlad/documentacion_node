function resolverDespues3Segundos(t1, t2, t3 ) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.max(t1, t2, t3));
      }, 3000);
    });
  }

 async function promediarMaximaTemperatura(n1){
    const maximoA = await resolverDespues3Segundos(10, 20, 40);
    const maximoB = await resolverDespues3Segundos(20, 20, 20);
    return (maximoA + maximoB) / 2;
 }

 promediarMaximaTemperatura(10).then(promedioCiudades => {
    console.log(promedioCiudades);  // prints 60 after 4 seconds.
  });
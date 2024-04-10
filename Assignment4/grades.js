"use strict";

let djaci = [
    {
      ime: "Ana",
      prezime: "Kovačević",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 5,
        engleski_jezik: 3,
        biologija: 4,
        likovna_kultura: 5
      }
    },
    {
      ime: "Marko",
      prezime: "Petrović",
      godina_rodjenja: 2006,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 3,
        likovna_kultura: 4
      }
    },
    {
      ime: "Elena",
      prezime: "Jovanović",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 3,
        maternji_jezik: 5,
        engleski_jezik: 4,
        biologija: 4,
        likovna_kultura: 4
      }
    },
    {
      ime: "Ivan",
      prezime: "Popović",
      godina_rodjenja: 2007,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 5,
        likovna_kultura: 3
      }
    },
    {
      ime: "Jelena",
      prezime: "Nikolić",
      godina_rodjenja: 2006,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 3,
        engleski_jezik: 5,
        biologija: 4,
        likovna_kultura: 4
      }
    },
    {
      ime: "Stefan",
      prezime: "Stojanović",
      godina_rodjenja: 2007,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 3,
        likovna_kultura: 5
      }
    },
    {
      ime: "Milica",
      prezime: "Simić",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 5,
        engleski_jezik: 4,
        biologija: 3,
        likovna_kultura: 4
      }
    },
    {
      ime: "Nikola",
      prezime: "Pavlović",
      godina_rodjenja: 2006,
      pol: "muški",
      ocjene: {
        matematika: 3,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 5,
        likovna_kultura: 4
      }
    },
    {
      ime: "Sara",
      prezime: "Ilić",
      godina_rodjenja: 2007,
      pol: "ženski",
      ocjene: {
        matematika: 5,
        maternji_jezik: 3,
        engleski_jezik: 5,
        biologija: 4,
        likovna_kultura: 3
      }
    },
    {
      ime: "Luka",
      prezime: "Đorđević",
      godina_rodjenja: 2005,
      pol: "muški",
      ocjene: {
        matematika: 4,
        maternji_jezik: 4,
        engleski_jezik: 4,
        biologija: 5,
        likovna_kultura: 5
      }
    }
  ];
  

djaci.forEach(function (element){
    element.izracunajProsjek = () =>{
        let sum = 0;
        let duzina = 0;
        for(const [key, value] of Object.entries(element["ocjene"])){
            sum+=value;
            duzina++;
        }
        return sum/duzina;
    }
    element.prosjek = element.izracunajProsjek();
});

djaci.forEach(function (element){
    const pol = element["pol"];
    const prosjek = element["prosjek"];
    let uspjeh;
    if(pol==="muški"){
        if(prosjek>=1.5 && prosjek<2.5){
            uspjeh = 'zadovoljan';
        }else if(prosjek>=2.5 && prosjek<3.5){
            uspjeh = 'dobar';
        }else if(prosjek>=3.5 && prosjek<4.5){
            uspjeh = 'vrlodobar';
        }else if(prosjek>=4.5 && prosjek<=5){
            uspjeh = 'odlican';
        }
    }else{
        if(prosjek>=1.5 && prosjek<2.5){
            uspjeh = 'zadovoljna';
        }else if(prosjek>=2.5 && prosjek<3.5){
            uspjeh = 'dobra';
        }else if(prosjek>=3.5 && prosjek<4.5){
            uspjeh = 'vrlodobra';
        }else if(prosjek>=4.5 && prosjek<=5){
            uspjeh = 'odlicna'
        }
    }
    element.uspjeh = () => console.log(`${element['ime']} ${element['prezime']} je ${uspjeh}.`);
})

console.log(djaci);
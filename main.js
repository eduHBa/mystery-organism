// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(mockUpStrand())

/*
Since you need to create multiple objects, create a factory function pAequorFactory() that has two
 parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that
 correspond to the parameters provided.

You’ll also add more methods to this returned object in the later steps.
*/

const pAequorFactory = (number, mockUpStrand) => {
  return {
    specimenNum: number,
    dna: mockUpStrand,

/* Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

.mutate() is responsible for randomly selecting a base in the object’s dna property and
 changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be
 changed to 'T', 'C', or 'G'. But it cannot be 'A' again.*/

    mutate() {
      
      let randomBase = Math.floor(Math.random() * 15); //select the base to change
      
      switch (this.dna[randomBase]) {

        case 'A':

          const newDnaBasesA = ['T', 'C', 'G'];

          this.dna[randomBase] = newDnaBasesA[Math.floor(Math.random() * 3)];

          break;

        case 'T':

          const newDnaBasesT = ['A', 'C', 'G'];

          this.dna[randomBase] = newDnaBasesT[Math.floor(Math.random() * 3)];

          break;

        case 'C':

          const newDnaBasesC = ['T', 'A', 'G'];

          this.dna[randomBase] = newDnaBasesC[Math.floor(Math.random() * 3)];

          break;

        case 'G':

          const newDnaBasesG = ['T', 'C', 'A'];

          this.dna[randomBase] = newDnaBasesG[Math.floor(Math.random() * 3)];

          break;

        default:
        
          console.log("error in mutation")
              
      }
      
    return this.dna;

    },

/* Your research team wants to be able to compare the DNA sequences of different P. aequor.
You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.

.compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in
pAequor‘s .dna and compute how many bases are identical and in the same locations. 

.compareDNA() does not return anything, but prints a message that states the percentage of
DNA the two objects have in common — use the .specimenNum to identify which pAequor objects
are being compared.

For example:

ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']

ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA
in common. The resulting message would read something along the lines of: specimen #1 and specimen
#2 have 25% DNA in common.*/

    compareDNA(pAequor) {

      let percent = 0;

      for (let i = 0; i < 15; i++) {

        if (this.dna[i] == pAequor.dna[i]) {

          percent += (1/15)*100;

        } else {

        }

      }
      
      //console.log(`specimen #` + this.specimenNum + ` and specimen #`+ pAequor.specimenNum + ` have `+ percent + `% DNA in common.`)

      return percent;

    },

/* P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

In the returned object of pAequorFactory(), add another method .willLikelySurvive().

.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases.
Otherwise, .willLikelySurvive() returns false.*/

    willLikelySurvive() {

      let percentSurvive = 0;

      for (let i = 0; i < 15; i++) {

        if (this.dna[i] === "C") {

          percentSurvive += (1/15);

        } else if (this.dna[i] === "G") {

          percentSurvive += (1/15);

        }

      }

      //console.log(percentSurvive)

      if (percentSurvive >= 0.60) {
      
        return true;
            
      } else {

        return false;

      }
  },

/*Create a .complementStrand() method to the factory function’s object that returns the complementary 
DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and 
vice versa. (Check the hint for more details) */

  complementStrand() {

    let complementDNA = [];

    for (let k = 0; k < this.dna.length; k++) {

      switch (this.dna[k]) {

        case 'A':
          
        complementDNA.push('T');

        break;

        case 'T':
          
        complementDNA.push('A');

        break;

        case 'G':
          
        complementDNA.push('C');

        break;

        case 'C':
          
        complementDNA.push('G');

        break;

        default:

        console.log("complment error");

      }

    }

    this.dna = complementDNA;
  
  },

}
}


//const organism1 = pAequorFactory(1,mockUpStrand())

//console.log(organism1)

//organism1.mutate()

//console.log(organism1.mutate()) 

//const organism2 = pAequorFactory(2,mockUpStrand())

// console.log(organism1.dna)

// console.log(organism2.dna)

// organism1.compareDNA(organism2);

//console.log(organism1.willLikelySurvive())

/* With the factory function set up, your team requests that you create 30 instances
of pAequor that can survive in their natural environment.
Store these instances in an array for your team to study later.*/

const pAequorSurvivors = [];

for (let j = 0; pAequorSurvivors.length < 30; j++) {

  let organism = pAequorFactory(j, mockUpStrand());

  if (organism.willLikelySurvive() == true) {

    pAequorSurvivors.push(organism);

  }

}

//console.log(pAequorSurvivors)
//console.log(pAequorSurvivors.length)

/* Use the .compareDNA() to find the two most related instances of pAequor. */

let mostRelatedPercent = 0;

let mostRelated = '';

for (let l = 0; l < 30; l++) {

  for (let m = 0; m < 30; m++) { 

  if (l !== m) {

  pAequorSurvivors[l].compareDNA(pAequorSurvivors[m])

  if (pAequorSurvivors[l].compareDNA(pAequorSurvivors[m]) >= mostRelatedPercent) {

    mostRelatedPercent = pAequorSurvivors[l].compareDNA(pAequorSurvivors[m]);

    mostRelated = `Specimen #${pAequorSurvivors[l].specimenNum} and specimen #${pAequorSurvivors[m].specimenNum} have ${pAequorSurvivors[l].compareDNA(pAequorSurvivors[m])}% DNA in commom.`;

   }

  }

}

}

//console.log(mostRelated)

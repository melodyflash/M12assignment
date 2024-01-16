// // STEP 1
// class Cat {
//     constructor() {
//         this.name = 'Gander'
//         this.breed = 'Shorthair'
//         this.color = 'Tuxedo'
//     }
// }
// const Dog = class {
//     constructor() {
//         this.name = 'Babs'
//         this.breed = 'Golden Retriever'
//         this.color = 'Red'
//     }
// }

// // STEP 2
// const myCat = new Cat()
// console.log(myCat.name)
// const myDog = new Dog()
// console.log(myDog.name)

// // STEP 3

// class Animal {
//     constructor() {
//         // STEP 4
//         this.type = prompt('Which type of animal should we create?')
//         console.log(`The ${this.type} has been created.`)
//     }
// }
// const newAnimal = new Animal()



// // STEP 5
// class Animal {
//     constructor(type, breed, color, height, weight) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.weight = weight
//     }
// }

// const goose = new Animal('Cat','Shorthair','Tabby','1ft','8lbs')
// // STEP 6
// for (const prop in goose) {
//     console.log(`${prop}: ${goose[prop]}`)
// }

// // STEP 7

// class Animal {
//     constructor(type, breed, color, height, weight) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.weight = weight
//     }
//     speak = function() {
//         if (this.type == 'Cat') {
//             alert(`The ${this.color} cat is meowing!`)
//         }
//         if (this.type == 'Dog') {
//             alert(`The ${this.color} dog is barking!`)
//         }
//     }
// }

// const meme = new Animal('Dog','mixed','white','3ft','25lbs')
// meme.speak()


// STEP 8
function Animal(type, breed, color, height, weight) {
        let _type = type
        let _breed = breed
        let _color = color
        let _height = height
        let _weight = weight

        let speak = function() {
            if (this._type == 'Cat') {
                alert(`The ${this._color} cat is meowing!`)
            }
            if (this._type == 'Dog') {
                alert(`The ${this._color} dog is barking!`)
            }
        }
        this.animalSpeaks = function() {
            speak()
        }
    
}

const chomps = new Animal('Cat','Shorthair','Black','1ft','9lbs')
chomps.animalSpeaks()

// STEP 9


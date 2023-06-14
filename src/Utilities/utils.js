const initialPets = [
  {
    id: 1,
    age: 7,
    breed: "Chihuahua",
    name: "Ruby",
    comments: `Everyone's bestfriend! `,
    type: "dog",
  },
  {
    id: 2,
    age: 3,
    breed: "Wild",
    name: "Iron",
    comments: `Likes to eat. A lot.`,
    type: "cat",
  },
];

export const generateId = () => {
  const minLength = 5;
  const maxLength = 10;
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    randomId += randomNumber.toString();
  }

  return randomId;
};

export const getListPets = () => {
  let pets = localStorage.getItem("pets");
  if (!pets) {
    pets = initialPets;
    localStorage.setItem("pets", JSON.stringify(pets));
  } else {
    pets = JSON.parse(pets);
  }

  return pets;
};

export const addPet = (pet) => {
  const pets = getListPets();
  pets.push(pet);
  localStorage.setItem("pets", JSON.stringify(pets));
};

export const deletePet = (id) => {
  const pets = JSON.parse(localStorage.getItem("pets"));
  const indextoDelete = pets.findIndex((pet) => pet.id === id);
  pets.splice(indextoDelete, 1);
  localStorage.setItem("pets", JSON.stringify(pets));
};

export const editPet = (pet) => {
  const pets = JSON.parse(localStorage.getItem("pets"));
  const indexOfPet = pets.findIndex((existingPet) => existingPet.id === pet.id);

  pets[indexOfPet].name = pet.name;
  pets[indexOfPet].breed = pet.breed;
  pets[indexOfPet].type = pet.type;
  pets[indexOfPet].age = pet.age;
  pets[indexOfPet].comments = pet.comments;

  localStorage.setItem("pets", JSON.stringify(pets));
};

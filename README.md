To query anything, you would have to go to localhost:3000/graphql. It will open up playground.

----------------------------------------------------------------------------------------------

For guard implmentation, I used the simplest way of doing it by using API KEYS.
So everytime, you need to pass the api-key in headers like this with every request.

{
  "api-key": "cardinal"
}

---------------------------------API ENDPOINTS------------------------------------------------

To create animal, you can use this query. returns a string message.

mutation CreateNewAnimal($input: CreateAnimalInput!) {
  createAnimal(createAnimalInput: $input) {
    message
  }
}

INPUT

{
  "input": {
    "name": "Buddy",
    "type": "Dog",
    "species": "Golden Retriever",
    "age": 2,
    "gender": "Male",
    "weight": 25.5,
    "verse": "Woof woof!"
  }
}

-------------------------------------------------------------------------------------------------
Get Single Animal Query

query GetSingleAnimal {
  getAnimalById(id: 1) {
    id
    name
    type
    species
    age
    gender
    weight
    verse
    createdAt
    updatedAt
    deletedAt
  }
}

--------------------------------------------------------------------------------------------------
Get All Animals Endpoint, this uses pagination as well. Returns count and array of animals

query GetAllAnimals($getAllAnimalsInput: GetAllAnimalsInput!) {
  getAllAnimals(getAllAnimalsInput: $getAllAnimalsInput) {
    animals {
      id
      name
      type
      species
      age
      gender
      weight
      verse
      createdAt
      updatedAt
      deletedAt
    }
    count
  }
}

Input this to get all animals data

{
  "getAllAnimalsInput": {
    "page": 0,
    "limit": 10
  }
}

------------------------------------------------------------------------------------------------------
Update Animal endpoint, returns a String.

mutation UpdateAnimalName($updateParams: UpdateAnimalInput!) {
  updateAnimal(updateAnimalInput: $updateParams) {
    message
  }
}

Update Animal input data.
{
  "updateParams": {
    "id": 1,
    "name": "chinto Name"
  }
}

--------------------------------------------------------------------------------------------------------
Eat Interface implmentation with functionality. I made an assumption of increasing the weight by 0.1

mutation Eat($id: Int!) {
  eat(id: $id) {
    id
    name
    type
    species
    age
    gender
    weight
    verse
    createdAt
    updatedAt
    deletedAt
  }
}

ID as input
{
  "id": 1
}

------------------------------------------------------------------------------------------------------------
Sleep Interface implmentation with functionality. I made an assumption of increasing age by 1
mutation Sleep($id: Int!) {
  sleep(id: $id) {
    id
    name
    type
    species
    age
    gender
    weight
    verse
    createdAt
    updatedAt
    deletedAt
  }
}

ID as input
{
  "id": 1
}

---------------------------------------------------------------------------------------------------------------
Returns the verse as a string.
query Speak {
  speak(id: 1) {
    message
  }
}

----------------------------------------------------------------------------------------------------------------
I made an assumption and made all the records to be soft deleted.
mutation RemoveAnimal($id: Int!) {
  removeAnimal(id: $id) {
    message
  }
}

ID as Input
{
  "id": 1
}
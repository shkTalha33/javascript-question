const dummyData = [
    {
        "userId": 1,
        "id": 2,
        "department" : "CS",
        "salary" : 20000,
        "dob" : '20/01/2002',
        "fname": "Zain",
        "lname": "Qureshi"
    },
    {
        "userId": 1,
        "id": 1,
        "department" : "IT",
        "salary" : 10000,
        "dob" : '02/05/2003',
        "fname": "Abid",
        "lname": "Raza"
      },
      {
        "userId": 1,
        "id": 3,
        "department" : "AI",
        "salary" : 30000,
        "dob" : '12/10/2001',
        "fname": "Muhammad",
        "lname": "Talha"
      },
      {
        "userId": 1,
        "id": 5,
        "department" : "SE",
        "salary" : 50000,
        "dob" : '29/07/1980',
        "fname": "Ali",
        "lname": "Hamza"
      },
      {
        "userId": 1,
        "id": 4,
        "department" : "CS",
        "salary" : 40000,
        "dob" : '16/09/1960',
        "fname": "HUssnain",
        "lname": "Tariq"
      },
]




// Average Salary
const averageIncome = () => {
    return dummyData.reduce((accum , currentValue) =>  accum + currentValue.salary ,0) / dummyData.length
}

// console.log(averageIncome());



// Find People older than 30
const calculateAge = () => {
     const getCurrentYear = new Date().getFullYear()
     return dummyData.filter((people) => {
        let personBirthYear = parseInt(people.dob.slice(people.dob.lastIndexOf('/') + 1))
        return getCurrentYear  - personBirthYear > 30
     })
}

// console.log(calculateAge());


// Get Full Name of person
const getFullName = () => {
    return dummyData.map(({fname, lname}, i) => {
        let fullName = `${fname} ${lname}`
        dummyData[i].fullName = fullName
        return dummyData
    })
}

// console.log(getFullName());


// Sort person from yougest to older
const sortFromYoungerToOldest = () => {
        return dummyData.sort((a, b) => new Date(b.dob.split('/').reverse().join('-')) - new Date(a.dob.split('/').reverse().join('-')))
}

// console.log(sortFromYoungerToOldest());





// Peoples in each department 
const numberOfPersonInEachDepartemnt = () => {
    return dummyData.reduce((accum, person) => {
      return {...accum, [person.department] : accum[person.department] + 1 || 1}      
    }, {})
}
console.log(numberOfPersonInEachDepartemnt());





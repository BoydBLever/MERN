const { faker } = require('@faker-js/faker');
const express = require('express')
const app = express()
const PORT = 1440;

app.get("/api/users/new", (requestObj, responseObj) => {
    responseObj.json({
        Username: faker.internet.userName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
        quote: faker.hacker.phrase(),
    })
})

app.get("/api/companies/new", (req, res) => {
    res.json({
        Company: faker.company.name(),
        Phone: faker.phone.number(),
        Stock: faker.finance.amount(),
    })
})

app.get("/api/user/company", (req, res) => {
    res.json({
        Username: faker.internet.userName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
        quote: faker.hacker.phrase(),
        Company: faker.company.name(),
        Phone: faker.phone.number(),
        Stock: faker.finance.amount(),
    })
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} and is listening for REQUESTS to RESPOND to`))


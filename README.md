# Team Builder

### Download Project Files and Install Dependencies

- **Fork** and **Clone** this repository.
- **CD into the backend folder**
- Type `npm install` to download all dependencies listed inside `package.json`.
- **CD into the client folder**
- Type `npm install` to download all dependencies

### Database access

Database access will be done using the `db.js` file included inside the `data` folder. This file publishes the following methods:

- `find()`: calling find returns a promise that resolves to an array of all the users contained in the database.
- `findById()`: this method expects an `id` as it's only parameter and returns the user corresponding to the `id` provided or an empty array if no user with that `id` is found.
- `insert()`: calling insert passing it a user object will add it to the database and return an object with the `id` of the inserted user. The object looks like this: `{ id: 123 }`.
- `update()`: accepts two arguments, the first is the `id` of the user to update and the second is an object with the `changes` to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
- `remove()`: the remove method accepts an `id` as it's first parameter and upon successfully deleting the user from the database it returns the number of records deleted.

Now that we have a way to add, update, remove and retrieve data from the provided database, it is time to work on the API.

### Start the API and Implement Requirements

- To start the server, type `npm run server` from the root folder (where the _package.json_ file is). The server is configured to restart automatically as you make changes.
- Add the code necessary to implement the API requirements.
- **Test the API using _Postman_ as you work through the exercises.**

### Technician Schema

Techs in the database conform to the following object structure:

```js
{
  name: "Jane Doe", // String, required
}
```

### Job Schema

Jobs in the database conform to the following object structure:

```js
{
  machine: "D5",
  complaint: "some complaint",
  job_date: "date tech started work",
  tech_id: "technician working on job"
}
```

### API Endpoints

Technicians

| Method | URL                       | Description                                                                                            |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/technicians          | Creates a tech using the information sent inside the `request body`.                                   |
| GET    | /api/technicians          | Returns an array of all the techs contained in the database.                                           |
| GET    | /api/technicians/:id      | Returns Technician that matches specified id in `req.params.id`                                        |
| GET    | /api/technicians/:id/jobs | Returns all Jobs that has a `tech_id` matching `req.params.id`                                         |

Jobs

| Method | URL                       | Description                                                                                     |
| ------ | ------------------------- | ----------------------------------------------------------------------------------------------- |
| POST   | /api/jobs          | Creates a tech using the information sent inside the `request body`.                                   |
| GET    | /api/jobs          | Returns an array of all the techs contained in the database.                                           |
| GET    | /api/jobs/:id      | Returns Technician that matches specified id in `req.params.id`                                        |
| PUT    | /api/jobs/:id      | Adds a job to the database                                                                             |

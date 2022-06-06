# Milestone-2-Group-Project

# This is a fitness app for creating and tracking workout routines

# ROUTES (may change over time)

| METHOD | PATH               | PURPOSE                                        |
| ------ | ------------------ | ---------------------------------------------- |
| GET    | /                  | Home Page                                      |
| GET    | /workouts          | Workouts index page                            |
| POST   | /workouts          | Create new workout                             |
| GET    | /workouts/routines | Form for creating a new workout                |
| GET    | /workouts/:id      | Details about a particular workout             |
| PUT    | /workouts/:id      | Update a particular workout                    |
| GET    | /workouts/:id/edit | Form page for editing an existing workout      |
| DELETE | /workouts/:id      | Delete a particular workout                    |
| GET    | \*                 | 404 page (matches any route not defined above) |

## Database

**workouts**

| Field | Type      |
| ----- | --------- |
| \_id  | Object ID |
| name  | String    |
| sets  | Number    |
| lbs   | Number    |
| rep   | Number    |
| timer | Number    |

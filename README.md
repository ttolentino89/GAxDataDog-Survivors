# GAxDataDog - Survivors: BarkPark

<img width="957" alt="Screen Shot 2020-05-21 at 11 26 40 PM" src="https://user-images.githubusercontent.com/27389714/82628344-925cd080-9bba-11ea-9312-161e8d067b92.png">

BarkPark is a single page webapp that allows colleagues to hangout, collaborate and get stuff done. In a socially-distant world where working from home is the new normal, BarkPark is a tool that allows us to stay closer while six feet or more apart.

This project was created for the GAxDataDog Hackathon in May 2020 by team Survivors which is comprised of the following GA alumni:

- UXDI: Ajani
- UXDI: Victoria
- SEI: Trish
- SEI: Corinna

Original wireframes are available on Figma here:
https://www.figma.com/file/L0of93yGm6FEjcjLsxhlkg/Hackathon-GA-X-DataDog?node-id=0%3A1

# Login/Signup:
<img width="1228" alt="Screen Shot 2020-05-22 at 1 04 00 AM" src="https://user-images.githubusercontent.com/27389714/82633095-4a44aa80-9bc8-11ea-9246-f4a606ed493d.png">

# Homepage/Dashboard:
<img width="1439" alt="Screen Shot 2020-05-21 at 11 20 27 PM" src="https://user-images.githubusercontent.com/27389714/82628006-b23fc480-9bb9-11ea-92ee-79546c2de28c.png">

# Tasks/Projects/Events/General Cool Stuff to do:
<img width="1231" alt="Screen Shot 2020-05-21 at 11 23 51 PM" src="https://user-images.githubusercontent.com/27389714/82628177-29755880-9bba-11ea-80fc-69cf6ab12bdd.png">

# Task Detail Page + Functions
<img width="1435" alt="Screen Shot 2020-05-22 at 12 36 23 PM" src="https://user-images.githubusercontent.com/27389714/82689750-fc13c380-9c28-11ea-85a9-f12385e1e19b.png">

# Global User Activity Feed
<img width="1437" alt="Screen Shot 2020-05-22 at 1 40 14 AM" src="https://user-images.githubusercontent.com/27389714/82635006-35b6e100-9bcd-11ea-84cf-0483f30e0863.png">

Technologies used (MERN stack + more!):

# Front-End:
- React.js
- (Gatsby.js)
- JavaScript
- HTML
- CSS (Flexbox)
- Bootstrap
- A tiny bit of jQuery

# Back-End/Database:
- Node.js
- Nodemon
- Express
- Mongoose
- MongoDB
- PHP
- AJAX
- (GraphQL)
- (TypeScript)

# Plugins/Dependencies/APIs:
- Axios
- React-Router
- React-Reveal (for CSS animations)
- Faker API
- (Firebase)

# Routes:
- POST /api/sign-in
- GET /api/items
- POST /api/items/id
- PUT api/items/id
- DELETE api/items/id
- GET api/users
- POST api/users/id
- PUT api/users/id
- DELETE api/users/id

Authenticated routes are (2FA) password-protected and include create, update, read item/user by ID and edit + delete items/users by ID. Read all items is non-password protected and *technically* publicly visible (still have to pass first round of auth). Here's a quick snapshot of typical user route activity:

<img width="433" alt="Screen Shot 2020-05-22 at 9 55 34 AM" src="https://user-images.githubusercontent.com/27389714/82675206-7d139080-9c12-11ea-802f-fe2a25bf66e2.png">

# Preliminary ERD + Flowchart

![image](https://user-images.githubusercontent.com/27389714/82681765-3f1b6a00-9c1c-11ea-8be6-88bfce7da34d.png)

![ERD](https://user-images.githubusercontent.com/27389714/82681830-56f2ee00-9c1c-11ea-9e75-72a8a6efafd0.png)

# Post-MVP goals:
- Build out chat feature using ChatKit API
- Get deployed version closer to original wireframes from UXDI team
- Implement Trello-like taskboard on Homepage
- Flesh out teams page with actual users, make profiles clickable
- Port everything to Gatsby for half the runtime of create-react-app + GraphQL awesomeness
- Implement Firebase for seamless authentication (current workaround is a bit janky with terrible UI, but works)

![bark1](https://user-images.githubusercontent.com/27389714/82627460-748e6c00-9bb8-11ea-8e5b-d9d5a7f6783d.png)

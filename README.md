# MemberShip App
Membership app is an API application that enable create user, add user to a specific plan and also list user based on specific plan


## Features
- Create user
- Add user to a Specific Plan
- List members based on Plan Provided

## Installation

Clone repo to your local machine:

```git
git clone https://github.com/ssanusi/memership-app.git
```

```.env
DB_USERNAME=,
DB_PASSWORD=,
DB_NAME=,
HOST=,
```

**Install dependencies and run locally**<br/>
*Note>> Install node if not already installed on local machine:*

Then run:

```yarn
yarn install
```

Create .env like the .env.sample file, just replace with your own enviroment variables.

Now start the server:

```yarn
yarn start
```

## Testing

test with Postman

```yarn
npm start
```

### API Routes

- POST /api/v1/user,
- POST /api/v1/plan
- GET /api/v1/membership

### API Parameters

```postman
{
  "firstName" : "ade",
  "lastName" : "yemi"
  "dob" : "1988/11/2"
}
```

```postman
{
	"userId" : 1,
  "membershipName" : "Standard Membership",
	"membershipType" : "limited",
  "membershipStartDate" : "2019/8/27",
  "membershipEndDate" : "2020/7/27"
}

```
note userId is gotten after creating user.

```postman
{
  "membershipName" : "Standard Membership",
}

```
note use membership type to get list of members associated with the membershipName 


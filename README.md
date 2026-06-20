# Online Appointment Booking System

## Project Overview

The Online Appointment Booking System is a full-stack MERN application that allows customers to book appointments with service providers. The system provides authentication, service management, appointment scheduling, appointment tracking, and availability management.

## Features

* User Registration
* User Login
* JWT Authentication
* Customer and Service Provider Roles
* User Profile Management
* Service Listing
* Availability Management
* Appointment Booking
* Appointment History
* Appointment Status Updates
* Duplicate Booking Prevention
* Input Validation and Error Handling
* MongoDB Database Integration
* REST APIs
* React Frontend

## Technology Stack

### Frontend

* React.js
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

## Database Collections

### Users

* Name
* Email
* Password
* Role

### Services

* Service Name
* Description
* Available Slots

### Appointments

* Customer
* Service
* Date
* Time
* Status

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Services

POST /api/services/create

GET /api/services/all

PUT /api/services/slots/:id

### Appointments

POST /api/appointments/book

GET /api/appointments/all

PUT /api/appointments/status/:id

## Project Modules

### Customer Module

* Register Account
* Login
* View Services
* Book Appointments
* View Appointment History
* Manage Profile

### Service Provider Module

* Manage Available Slots
* Manage Appointments
* Update Appointment Status
* View Booking Requests

## Validation Features

* Empty Field Validation
* Email Validation
* Password Validation
* Future Date Validation
* Duplicate Booking Validation
* Error Handling

## Installation

### Backend

```bash
npm install
npm run dev
```

### Frontend

```bash
npm install
npm start
```

## Deployment

### Backend

Render

### Frontend

Render / Netlify / Vercel

## Screenshots

(Add project screenshots here)

## Expected Outcomes

* Full Stack Application Development
* Frontend and Backend Integration
* REST API Development
* MongoDB Database Design
* Authentication and Authorization
* Real-Time Appointment Scheduling Workflow
* Industry-Oriented MERN Stack Project


## Live Demo

### Frontend Deployment
[text](https://online-appointment-booking-system-1-ury7.onrender.com)

### Backend Deployment
[text]https://online-appointment-booking-system-7338.onrender.com

## GitHub Repository
[text](https://github.com/Jahnavi630-lang/Online-Appointment-Booking-System)



## Author

Jahnavi
RISE Internship – Full Stack Development (MERN / MEAN)

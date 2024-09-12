Task Scheduler Backend
Overview
This repository contains the backend for a Task Scheduler application built with Node.js. The backend uses cron jobs to manage and execute scheduled tasks, including sending emails. It also logs the details of sent emails into a database.

Features
Email Sending: Automatically send emails based on predefined schedules.
Database Logging: Store details of sent emails in a MongoDB database.
Flexible Scheduling: Configure task schedules using cron expressions with node-cron.
Dependencies
node-cron: For scheduling tasks using cron expressions.
dotenv: For managing environment variables.
nodemailer: For sending emails.
mongoose: For interacting with MongoDB.

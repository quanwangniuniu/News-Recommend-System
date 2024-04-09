# News Recommendation System

## Overview

This is a news recommendation system that employs three different recommendation methods: tag-based recommendation, popularity-based recommendation, and hybrid recommendation (combining tag-based and popularity-based).

## Functionality

### Tag-Based Recommendation

This method recommends news articles based on the tags associated with each article. Users will receive recommendations of articles that share similar tags with the ones they have shown interest in or read before.

### Popularity-Based Recommendation

In this method, news articles are recommended to users based on their overall popularity among all users. Popular articles, regardless of their tags, will be recommended to a wider audience.

### Hybrid Recommendation

The hybrid recommendation method combines both tag-based and popularity-based recommendations. It takes into account both the user's preferences indicated by their interactions with tags and the general popularity of articles.

## System Components and Ports

- **Admin Portal**: The admin portal is built with Vue and runs on port 9091.
- **User Portal**: The user portal is also built with Vue and runs on port 9090.
- **Backend Server**: The backend server is developed with Django and handles database interactions. It runs on port 8081.

## Running the System

### Frontend (Vue)

1. Navigate to the admin portal directory.
   ```bash
   cd admin-portal

2. Install dependencies using npm.
   ```bash
   npm install
   # Run the admin portal on port 9091.

3. npm run serve
   Repeat the same steps for the user portal, replacing admin-portal with user-portal.

### Backend (Django)

1. Navigate to the Django backend directory.

  ```bash
  cd backend
  ```
 
2. Install Django and other dependencies.

  ```pip install -r requirements.txt```
  Apply migrations to create the database schema.

3. python manage.py migrate
  Run the Django server on port 8081.
  ```python manage.py runserver 8081```

### Usage
Once the system is up and running, administrators can access the admin portal to manage articles, tags, and other settings. 
Regular users can visit the user portal to view recommended articles based on their preferences and system recommendations.


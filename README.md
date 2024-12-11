# AngularExamProject

Shared Cookbook - the SoftUni Angular Oct 2024 course exam project

## 📋 Table of Contents

- [AngularExamProject](#angularexamproject)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 Overview](#-overview)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🚀 Installation and Setup](#-installation-and-setup)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Start the Application](#3-start-the-application)
      - [1. Terminal 1: Start the Client](#1-terminal-1-start-the-client)
      - [2. Terminal 2: Start the Server](#2-terminal-2-start-the-server)
  - [🌐 Visit the App](#-visit-the-app)
  - [💡 Usage](#-usage)
  - [📝 Features](#-features)
  - [📸 Screenshots](#-screenshots)
    - [🏠 Home Page](#-home-page)
    - [🍲 Recipes Page](#-recipes-page)
    - [📋 Recipe Details Page](#-recipe-details-page)
    - [💡 Create Recipe Page](#-create-recipe-page)
    - [📝 Profile Page](#-profile-page)
    - [📝 Register Page](#-register-page)
    - [📝 Login Page](#-login-page)
  - [📜 License](#-license)

## 📖 Overview

**Shared Cook-book** is a comprehensive platform that allows users to share and discover recipes:

The application provides an engaging and interactive experience for users who are passionate about cooking and want to expand their culinary knowledge.

## 🛠️ Technologies Used

This project utilizes the following technologies and libraries:

- **Angular**: A TypeScript-based framework for building web applications.
- **Node.js**: A JavaScript runtime for running the server-side code.
- **SoftUni Practice Server**: Backend server used for managing data and authentication. For more details, visit the [SoftUni Practice Server GitHub repository](https://github.com/softuni-practice-server/softuni-practice-server).

## 🚀 Installation and Setup

To get started with **Shared Cook-book**, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine. You will need Node.js and npm installed globally on your machine.

```bash
https://github.com/AssiaIlieva/AngularExamProject
```

Alternatively, you can download the project as a ZIP file from [here](https://github.com/AssiaIlieva/AngularExamProject/archive/refs/heads/main.zip).

### 2. Install Dependencies

Install the dependencies for the client application:

```bash
cd shared-cookbook
npm install
```

### 3. Start the Application

You need to use two terminal windows to start the application:

#### 1. Terminal 1: Start the Client

```bash
cd shared-cookbook
npm start or ng serve
```

#### 2. Terminal 2: Start the Server

```bash
cd server
node server.js
```

## 🌐 Visit the App

Open your browser and go to the following URL to access the application:
http://localhost:4200/

## 💡 Usage

- **Explore Recipes:** Browse through a variety of recipes. Non-logged-in users can explore content but have limited interactions.
- **Search Functionality:** Search for recipe by type on catalogue page.
- **Share Recipes:** Registered users can contribute their own recipes.
- **Interact with Content:**
  - **For Non-Logged-In Users:** Can browse, search, but cannot comment, or manage content.
  - **For Logged-In Users:**
    - Can comment on recipes multiple times.
    - Can comment on their own recipes.
    - Can edit and delete their own recipes.
    - Can visit their own profile space and browse their own recipes sorted from newest to oldest.
- **Home Page Highlights:** The home page displays the four most recently added recipes..

## 📝 Features

- **Recipe Sharing:** Users can share their own recipes and explore others' recipes.
- **User Authentication:** Secure login and registration for users to manage their contributions.
- **Content Management for Logged-In Users:**
  - Comment on and manage the own recipes.
- **Content Viewing for Non-Logged-In Users:** Browse recipes without account access and search by recipe type.
- **Home Page Preview:** View the latest four recipes directly on the home page.

## 📸 Screenshots

### 🏠 Home Page

Here's a screenshot of the Home Page:

![Home Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/home_page.JPG)

### 🍲 Recipes Page

Here's a screenshot of the Recipes Page:

![Recipes Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/catalogue_page.JPG)

### 📋 Recipe Details Page

Here's a screenshot of the Recipe Details Page:

![Recipe Details Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/recipe-details_page.JPG)

### 💡 Create Recipe Page

Here's a screenshot of the Create Recipe Page:

![Create Recipe Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/create_recipe_page.JPG)

### 📝 Profile Page

Here's a screenshot of the Profile Page:

![Profile Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/profile_page.JPG)

### 📝 Register Page

Here's a screenshot of the Register Page:

![Register Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/register_page.JPG)

### 📝 Login Page

Here's a screenshot of the Login Page:

![Tips Details Page](https://github.com/AssiaIlieva/AngularExamProject/blob/main/shared-cookbook/public/login_page.JPG)

## 📜 License

For information about the license, please see the [LICENSE](https://github.com/AssiaIlieva/AngularExamProject?tab=MIT-1-ov-file#) file.

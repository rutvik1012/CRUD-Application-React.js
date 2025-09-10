**📋 TODO Context Project**

A simple CRUD (Create, Read, Update, Delete) application built with React + Context API + React Hook Form.
This project demonstrates how to manage global state using Context and perform add, edit, and delete operations in a clean way.


**🚀 Features**

✅ Add new users

✅ Edit existing users (form pre-fills data)

✅ Delete users

✅ Global state management using Context API

✅ Form handling with React Hook Form

✅ Vite-powered fast development



**🛠️ Tech Stack**

React – UI library

Context API – State management

React Hook Form – Form handling



**📂 Project Structure**
src/
│── App.jsx                # Main app entry  
│── index.css               # Global styles  
│── Components/  
│   ├── AddUser.jsx         # Add/Edit user form  
│   ├── User.jsx            # Display user list with Edit/Delete  
│── Data/  
│   ├── Data.js             # Initial dummy data  
│── useContext/  
│   ├── ContextProvider.jsx # Provides global state  
│   ├── UserContext.jsx     # Context object  




**⚙️ How It Works**

ContextProvider stores all users (userData) and the current user being edited (editUser).

AddUser handles adding and updating users. If editing, the form auto-fills.

User shows the list of users with Edit and Delete buttons.



**📸 Flow Diagram**
ContextProvider

   ├── User.jsx (List) → Edit/Delete  
   └── AddUser.jsx (Form) → Add/Update 

  <img width="1080" height="808" alt="Screenshot 2025-09-10 171715" src="https://github.com/user-attachments/assets/c0766d1a-2435-4665-9d56-c5deb9bd947a" />
  <img width="1912" height="804" alt="Screenshot 2025-09-10 171738" src="https://github.com/user-attachments/assets/1397abae-3e8c-448b-bb42-632a07839ce5" />






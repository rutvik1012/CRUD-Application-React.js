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

  <img width="1200" height="508" alt="Screenshot 2025-09-09 164510" src="https://github.com/user-attachments/assets/f1ec39fc-6ad1-4fee-9508-7266fc1f1459" />
  <img width="1353" height="489" alt="Screenshot 2025-09-09 164519" src="https://github.com/user-attachments/assets/019d59b1-9b80-4c02-8a16-7aadf141d785" />




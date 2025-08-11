# Employee Management System – Frontend

This is the frontend for the **Employee Management System**, a modern web application designed to streamline employee data management, search, and CSV uploads. Built with React and Tailwind CSS, it provides a beautiful, responsive, and user-friendly interface.

## Features

- **Employee Search & Details**  
  Search for employees by ID and phone number, and view their details in a visually appealing card format.

- **CSV Upload**  
  Easily upload employee data in bulk using the Upload CSV page.

- **Dialogs & Alerts**  
  Interactive dialogs and alert modals for confirmations, notifications, and error handling.

- **Sidebar Navigation**  
  Intuitive sidebar for quick navigation between pages and features.

- **Responsive Design**  
  Fully responsive UI for desktop and mobile devices.

- **Print Support**  
  Professionally styled print views for employee cards and details.

## Tech Stack

- **React 19** – Component-based UI
- **Tailwind CSS 4** – Utility-first styling
- **Vite** – Fast development and build tooling
– **Shadcn UI** - Beautiful, customizable UI components built on Tailwind CSS
- **Radix UI** – Accessible dialog, alert, popover, and tooltip components
- **Lucide Icons** – Modern SVG icons

## Project Structure

```
src/
  components/        # Reusable UI components (Card, Dialogs, Sidebar, etc.)
  context/           # React context providers for dialogs and alerts
  hooks/             # Custom React hooks
  lib/               # Utility functions
  pages/             # Main pages (EmployeeCard, UploadCSV)
  assets/            # Static assets (logo, images)
  App.jsx            # Main app component
  index.css          # Global styles
  main.jsx           # App entry point
public/              # Static public files
```

## Getting Started

1. **Install dependencies**
   ```
   npm install
   ```

2. **Run the development server**
   ```
   npm run dev
   ```

3. **Build for production**
   ```
   npm run build
   ```

## Customization

- **Styling:**  
  All UI is styled with Tailwind CSS & Shadcn UI. You can easily customize colors, spacing, and layout in the components.

- **Dialogs & Alerts:**  
  Dialogs are managed via React context for easy integration and control.

- **CSV Upload:**  
  The UploadCSV page is ready for backend integration and CSV parsing.

## License

This project is licensed under the MIT License.

---

**Employee Management System – Frontend**  
Beautiful, modern, and efficient employee data management for
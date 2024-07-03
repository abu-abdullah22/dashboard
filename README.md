# [Good Food Dashboard](https://goodfood-dashboard.netlify.app/)

Welcome to the Good Food Dashboard project! This is a dashboard application that provides an intuitive and interactive interface for managing and visualizing data related to food orders, customer reviews, and more.

## Features

- Interactive charts and graphs
- Responsive design
- Customizable navbar and sidebar
- Routing using React Router DOM



## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: A library for routing in React applications.
- **Recharts**: A library for building charts and graphs in React.
- **TailwindCSS**: A utility-first CSS framework.
- **DaisyUI**: A plugin for TailwindCSS that provides pre-designed components.
- **React Icons**: A library for including popular icons in React projects.
- **React Iconly**: A library for using Iconly icons in React projects.



## Project Structure

Here's an overview of the project structure:

DASHBOARD<br/>
├── public<br/>
├── src<br/>
│   ├── assets<br/>
│   ├── Components<br/>
│   │   ├── Charts<br/>
│   │   │   ├── Barchart.jsx<br/>
│   │   │   ├── MostOrderedFoodChart.jsx<br/>
│   │   │   ├── OrderChart.jsx<br/>
│   │   │   ├── Rating.jsx<br/>
│   │   │   ├── Sales.jsx<br/>
│   │   ├── Shared<br/>
│   │   │   ├── Navbar.jsx<br/>
│   │   │   ├── NewsLetter.jsx<br/>
│   │   │   ├── Options.jsx<br/>
│   │   ├── Sidebar<br/>
│   │   │   ├── OpenSidebar.jsx<br/>
│   │   │   ├── Sidebar.jsx<br/>
│   │   ├── Dashboard<br/>
│   │   │   ├── DashboardPages.jsx<br/>
│   │   │   ├── CustomerReview.jsx<br/>
│   │   │   ├── Dashboard.jsx<br/>
│   │   │   ├── FoodOrder.jsx<br/>
│   │   │   ├── ManageMenu.jsx<br/>
│   │   │   ├── DashboardLayout.jsx<br/>
│   ├── Router<br/>
│   │   ├── Router.jsx<br/>






## Challenges

During the development of the Good Food Dashboard, I encountered several challenges:

- **Customizing Graphs and Charts:** Customizing the graphs and charts to match the provided design was particularly challenging. It required extensive experimentation and adjustments to the `recharts` components. I referred to the official documentation and used ChatGPT for guidance. While I managed to achieve a close resemblance to the design, making the graphs fully responsive was a complex task.
  
- **Responsive Design:** Ensuring that the graphs  were fully responsive was another significant challenge. Despite the difficulties, I was able to create a mostly responsive interface by tweaking various styles and layouts.


## Installation

To get started with the Good Food Dashboard locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd <repository-directory>
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

# Live link of my project

- http://melted-circle.surge.sh/

## key points about my website:

- Authentication:I have implemented user authentication using Firebase (useAuth hook).Different components, such as Profile, UserHome, TeacherHome, and others, show personalized content based on the user's role.

- Role-based Access:

  1.In my website a role-based access control system (useRole hook), where users can have roles like "user","teacher" and "admin."
  2.Certain actions, like making a user an admin or approving courses, restricted based on the user's role.

- Course Management:

  1.The application handles the management of courses, including features like approving courses (handleApproveItem), deleting courses (handleDeleteItem), and displaying a list of all classes (AllClass component).

- Enrollment:

Users can enroll in classes, and there's a section (Enroll component) that displays the enrolled classes, their total price, and provides an option to pay

- Pagination:

There is a pagination feature implemented in the AllClasses component, allowing users to navigate through different pages of courses.

User Management:

- There's a section (Allusers component) that displays a list of users, and admins can make users admin.

- Class Management:

Teachers can manage their added classes in the MyClass component, with options to update and delete classes.

- Alerts/Notifications:

I'm using the sweetalert2 library for displaying alert messages or notifications to users in response to various actions.

- Routing:

React Router (react-router-dom) is used for client-side routing, allowing navigation between different pages/components.

- State Management:

React hooks like useState and useEffect are used for state management in functional components..

- Querying Data:

Data fetching is done using Axios (useAxiosSecure hook), and the react-query library is used for fetching data on the client side.

- Helmet Component:

The react-helmet-async library is used to dynamically set the document title based on the current page.

- UI Framework:

Tailwind CSS is used for styling the components, providing a clean and responsive user interface.

- Conditional Rendering:

Components conditionally render content based on certain conditions, such as the user's role or the status of a course.

- Component Composition:

The project is organized into multiple components, promoting reusability and maintainability.

- Error Handling:

There is some basic error handling, such as displaying error messages in case of failed requests.

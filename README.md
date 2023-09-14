<!-- ques 1 -->
QUES-1: Add at least 3 Project features.
ANS: 
Price Calculation: The application calculates and displays the total price of the selected courses. Each course card contains a price, and when a course is selected, the total price is updated accordingly. This feature provides users with a clear understanding of the financial cost of their course selections.

Alerts for User Feedback: The code includes alert messages to provide user feedback and prevent unintended actions. Alerts are triggered when certain conditions are met, such as when the total credit hours reach the maximum limit of 20 or when a user attempts to select the same course multiple times. These alerts help guide user interactions and prevent errors.

These features collectively create an educational course selection and tracking application, allowing users to choose courses, view their progress in terms of credit hours, see the total cost, and receive alerts for important actions and constraints.

Heres the code:

const handleSelectedCourse = (course) => {
    if (totalCredits >= 20) {
      alert("Credit hours full");
    } else if (selectedCourse.includes(course.title)) {
      alert("You have already selected this course");
    } else {
      SetSelectedCourse([...selectedCourse, course.title]);

      const newTotalCredits = Math.min(totalCredits + course.credit, 20);
      setTotalCredits(newTotalCredits);

      const NewTotalPrice = totalPrice + course.price;
      SetTotalPrice(NewTotalPrice);
    }
  };


<!-- ques 2 -->
QUES-2: Discuss how you managed the state in your assignment project.
ANS: In my provided code I've managed state using `useState` hook. this state management allows me to store and manage dynamic data inside my components.

Importing `userState`: I've imported the "useState" hook at the beginning of my code using `import { useState } from "react";`

Defining State Variables: Then inside my `app.jsx` component I've defined 3 state variables using the `useState` hook. These state variables are:

`selectedCourse`: This state variable is used to store an array of selected courses.
`totalCredits`: This state variable is used to store the total number of credit hours.
`totalPrice`: This state variable is used to store the total price.

Here's how I've defined these state variables:
`const [selectedCourse, SetSelectedCourse] = useState([]);`
`const [totalCredits, setTotalCredits] = useState(0);`
`const [totalPrice, SetTotalPrice] = useState(0);`

In each case, I've provided an initial value for the state variable.

Updating State: I've defined a function called `handleSelectedCourse `that is responsible for updating the state based on user interactions.
In this function, you use the `setXXX` functions provided by `useState` to update the state variables. For example:
`SetSelectedCourse([...selectedCourse, course.title]);`
`setTotalCredits(newTotalCredits);`
`SetTotalPrice(NewTotalPrice);`

Each time one of these functions is called with a new value, React re-renders the component with the updated state, ensuring that the user interface reflects the current state of the application.

Using State in JSX: In your JSX code, you use the state variables directly to display the current values to the user. For example:
`<Bookmarks`
`  selectedCourse={selectedCourse}`
`  totalCredits={totalCredits}`
`  totalPrice={totalPrice}`
`></Bookmarks>`
Here, I've pass the `selectedCourse`, `totalCredits`, and `totalPrice` state variables as props to child components, allowing them to display and use this state data.
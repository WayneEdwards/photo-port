import React, { useEffect}from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
    const { 
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

   // useEffect hook takes in a callback function as its first argument and an array with a single element as its second  
    // the second argument directs the hook to re-render the component on changes to the value of this state. In other words, if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.
    useEffect(
      () => {document.title = capitalizeFirstLetter(currentCategory.name);}, [currentCategory]);

 

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
 
    
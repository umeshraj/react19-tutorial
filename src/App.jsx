import "./App.css";

import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { UserCard } from "./UserCard";
import { CardWrapper } from "./CartWrapper";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { NewButton } from "./NewButton";
import { CustomButton } from "./CustomButton";
import { Contact } from "./Contact";
import { Newsletter } from "./Newsletter";
import { Menu } from "./Menu";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { SimpleCounter } from "./SimpleCounter";
import { PreviousStateCounter } from "./PreviousStateCounter";
import { BatchingCounter } from "./BatchingCounter";
import { UserProfile2 } from "./UserProfile2";
import { ToDoList } from "./ToDoList";
import { ShoppingCart } from "./ShoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";
import { CounterWithInit } from "./CounterWithInit";

function App() {
  return (
    <>
      <h1>Codevolution React Course</h1>
      <CounterWithInit />
      {/* <ShoppingCartWithReducer /> */}
      {/* <CounterWithReducer /> */}
      {/* <ShoppingCart /> */}
      {/* <ToDoList /> */}
      {/* <UserProfile2 /> */}
      {/* <BatchingCounter /> */}
      {/* <PreviousStateCounter /> */}
      {/* <SimpleCounter /> */}
      {/* <Counter /> */}
      {/* <LoginCard /> */}
    </>
    // <div>
    //   <Menu />
    //   <Contact />
    //   <Newsletter />
    //   <CustomButton text="Like" />
    //   <CustomButton text="Bookmark " />
    //   <Alert> Your changes have been saved successfully!</Alert>
    //   <Alert type="error">There was an error processing your request.</Alert>
    //   <NewButton />
    //   <NameList />
    //   <ProductList />
    //   <UserDetails
    //     name="Bruce Wayne"
    //     isOnline={true}
    //     isPremium={true}
    //     isNewUser={true}
    //     role="admin"
    //   />
    //   <UserDetails
    //     name="Clark Kent "
    //     isOnline={false}
    //     hideOffline={false}
    //     role="member"
    //   />
    //   <CardWrapper title="User Profile">
    //     <p>Bruce Wayne</p>
    //     <p>batman@jl.com</p>
    //     <button>Edit profile</button>
    //   </CardWrapper>

    //   <UserCard
    //     props={{
    //       name: "Diana Prince",
    //       age: 28,
    //       city: "Themyscira",
    //       email: "dp@themyscira.com",
    //     }}
    //   />
    //   <Greeting name="Bruce" message="Good morning" />
    //   <Greeting name="Clark" />
    //   <Greeting message="Welcome" />
    //   <Greeting />

    //   <Product
    //     title="Gaming laptop"
    //     price={1500}
    //     inStock={true}
    //     categories={["Electronics", "Computers"]}
    //   />

    //   <Welcome name="Bruce" alias="Batman" />
    //   <Welcome name="Clark" alias="Superman" />
    //   <Welcome name="Diana" alias="Wonder Woman" />

    //   <CandidateProfile />
    //   <StyledForm />
    //   <ContactForm />
    //   <UserProfile />
    //   <Hello />
    //   <HelloWithoutJSX />
    //   <Button />
    // </div>
  );
}

export default App;

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

function App() {
  return (
    <div>
      <Greeting name="Bruce" message="Good morning" />
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
      <Greeting />

      <Product
        title="Gaming laptop"
        price={1500}
        inStock={true}
        categories={["Electronics", "Computers"]}
      />

      <Welcome name="Bruce" alias="Batman" />
      <Welcome name="Clark" alias="Superman" />
      <Welcome name="Diana" alias="Wonder Woman" />

      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Button />
    </div>
  );
}

export default App;

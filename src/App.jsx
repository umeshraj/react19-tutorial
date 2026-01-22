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

function App() {
  return (
    <div>
      <UserDetails name="Bruce Wayne" isOnline={true} />
      <UserDetails name="Clark Kent " isOnline={false} hideOffline={false} />
      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <button>Edit profile</button>
      </CardWrapper>

      <UserCard
        props={{
          name: "Diana Prince",
          age: 28,
          city: "Themyscira",
          email: "dp@themyscira.com",
        }}
      />
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

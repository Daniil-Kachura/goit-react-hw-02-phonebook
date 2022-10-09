import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {
  return (
    <article class="wrapper" >
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook/>
    </div>
    </article>
  );
};

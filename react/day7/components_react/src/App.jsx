import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <>
      This is App.jsx
      <FormComponent
        text={"Hello this is data"}
        value={34}
        arr={[1, 2, 3, 4, 5]}
      />
    </>
  );
}

export default App;

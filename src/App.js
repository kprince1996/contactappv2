import './App.css';
import ContactsContainer from './components/contact/ContactsContainer';
import ContactState from './store/contactState'

function App() {
  return (
    <ContactState>
      <div className="App">
        <ContactsContainer/>
      </div>
    </ContactState>
    
  );
}

export default App;

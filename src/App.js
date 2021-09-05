import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCountertwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
//import PortalDemo from './components/PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';

// import Inline from './components/Inline';
// import Form from './components/Form';
// import FragmentDemo from './components/FragmentDemo';

// import LifeCycleMount from './components/LifeCycleMount';
// import UpdateLifeCycle from './components/UpdateLifeCycle';

// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';

// import Input from './components/Input';
// import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <UserProvider value="nidhi">
        <ComponentC />
      </UserProvider>

      {/* <ClickCounter name='nidhi'/>
      <HoverCounter  name='nidhi'/> */}
      {/* <ClickCountertwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Nidhi' : 'Guest'}/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput/> */}
      {/* <Input /> */}
      {/* <FocusInput /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <UpdateLifeCycle /> */}
      {/* <Inline />
      <Form /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <Greet  name='Nidhi' heroName='HAHAH' />
     <Welcome name='Nishtha' heroName='HAHAH'/> */}
      {/* <Greet  name='Niharika' heroName='HAHAH'>
       <button>Action</button>
     </Greet>
     <Greet  name='Nishtha' heroName='HAHAH'></Greet>
     <Welcome/>
     <Hello/> */}
      {/* <Counter />
     <Message/> */}
    </div>
  );
}

export default App;

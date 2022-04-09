import React from 'react'
import ReactDOM from 'react-dom'
// import HookApp from "./components/HookApp"
// import CounterApp from "./components/01-useState/CounterApp"
// import CounterAppWithCustomHook from "./components/01-useState/CounterAppWithCustomHook"
// import SimpleForm from "./components/02-use-effect/SimpleForm";
// import FormWithCustomHook from "./components/02-use-effect/FormWithCustomHook";
// import MultipleCustomHooks from "./components/03-example/MultipleCustomHooks";
// import RealExampleRef from "./components/04-useRef/RealExampleRef";
// import Memorize from "./components/05-use-memo/Memorize";
// import MemoHook from "./components/05-use-memo/MemoHook";
// import CallbackHook from "./components/05-use-memo/CallbackHook";
import {Padre} from "./components/07-tarea-memo/Padre";
ReactDOM.render(
  <React.StrictMode>
      <Padre/>
  </React.StrictMode>,
  document.getElementById('root')
)

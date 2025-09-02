import { createContext, useContext, useReducer } from "react";

function reducer(state, action) {
  const type = action.type;
  const curr = state.currentStep;
  const last = state.lastStep;
  const start = state.startStep;
  switch (type) {
    case "next": {
     
      localStorage.setItem('currentStep', curr)
      return {
        ...state,
        currentStep: action.payload
          ? curr < last
            ? curr + 1
            : curr
          : state.currentStep,
        isloading: !action.payload,
        verfiy: curr === last,
      };
    }
    case "close": 
      return {...state, verfiy:false}
    case "prev":
      
      return {
        ...state,
        currentStep: curr <= 1 ? 1 : state.currentStep - 1,
      };
    case "select": {
      return {
        ...state,
        currentStep:
          state.currentStep > action.payload
            ? action.payload
            : state.currentStep,
      };
    }
    case "loadingNext":
      return { ...state, isloading: true };
    case "tour":
      return {...state, userType: 'tour',lastStep:5 }
    case "tourist":
      return {...state, userType: 'tourist', lastStep:3}
  }
}
const initalState = {
  startStep: 1,
  currentStep: parseInt(localStorage.getItem("currentStep"), 10) ? parseInt(localStorage.getItem("currentStep"), 10): 1 ,
  lastStep: 5,
  isloading: false,
  verfiy: false,
  
  userType: ''
};

const SignupContext = createContext();
export default function SignupProvider({ children }) {
  const [
    { currentStep, startStep, lastStep, isloading, verfiy,userType },
    dispatch,
  ] = useReducer(reducer, initalState);
  localStorage.setItem("currentStep", currentStep);

  return (
    <SignupContext.Provider
      value={{
        userType,
        currentStep,
        dispatch,
        lastStep,
        startStep,
        isloading,
        verfiy,
        
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSignup() {
  const context = useContext(SignupContext);
  if (context === undefined)
    throw new Error("the context is outside the context");
  return context;
}

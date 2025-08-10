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
        isCompleted: curr === last,
      };
    }
    case "prev":
      return {
        ...state,
        currentStep: !curr < start ? state.currentStep - 1 : 1,
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
  }
}
const initalState = {
  startStep: 1,
  currentStep: parseInt(localStorage.getItem("currentStep"), 10) ? parseInt(localStorage.getItem("currentStep"), 10): 1 ,
  lastStep: 5,
  isloading: false,
  isCompleted: false,
};

const SignupContext = createContext();
export default function SignupProvider({ children }) {
  const [
    { currentStep, startStep, lastStep, isloading, isCompleted },
    dispatch,
  ] = useReducer(reducer, initalState);
  localStorage.setItem("currentStep", currentStep);

  return (
    <SignupContext.Provider
      value={{
        currentStep,
        dispatch,
        lastStep,
        startStep,
        isloading,
        isCompleted,
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

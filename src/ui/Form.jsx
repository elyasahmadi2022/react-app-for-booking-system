import { useCountries } from "../services/apiCountry";
import AccountInfoForm from "./AccountInfoForm";
import ContactForm from "./ContactForm";
import EducationForm from "./EducationForm";
import ExperinceForm from "./ExperinceForm";
import PersonalForm from "./PersonalForm";
import { useSignup } from "./SignupContext";

export default function Form({ form, current, formRef }) {
  const { step } = form;
  const { currentStep, isCompleted } = useSignup();

  if (
    currentStep === current &&
    step.toUpperCase() === "personal information".toUpperCase()
  ) {
    return <PersonalForm formRef={formRef} step={step} />;
  }
  if (
    currentStep === current &&
    step.toUpperCase() === "Education".toUpperCase()
  ) {
    return <EducationForm step={step} formRef={formRef} />;
  }
  if (
    currentStep === current &&
    step.toUpperCase() === "experince".toUpperCase()
  ) {
    return <ExperinceForm step={step} formRef={formRef} />;
  }
  if (
    currentStep === current &&
    step.toUpperCase() === "Contact information".toUpperCase()
  ) {
    return <ContactForm step={step} formRef={formRef} />;
  }
  if (
    currentStep === current &&
    step.toUpperCase() === "account information".toUpperCase()
  ) {
    return <AccountInfoForm step={step} formRef={formRef} />;
  }
}

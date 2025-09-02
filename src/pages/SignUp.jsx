import { useSignup } from "../ui/SignupContext";
import TourForm from "../ui/TourForm";
import TouristForm from "../ui/TouristForm";
import Welcome from "../ui/Welcome";

export default function SignUp() {
  const {userType } = useSignup();
  return (
   <>
    {userType  === '' && <Welcome />}
    {userType === 'tour' && <TourForm />}
    {userType === 'tourist' && <TouristForm />}
   </>
  ) 
}

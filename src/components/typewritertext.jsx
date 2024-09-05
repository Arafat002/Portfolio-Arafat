import Typewriter from "typewriter-effect";
import { PersonalData } from "../data/personal-data";

function TypewriterText() {
  const { typewriterOptions } = PersonalData;
  return <Typewriter options={typewriterOptions} />;
}

export default TypewriterText;
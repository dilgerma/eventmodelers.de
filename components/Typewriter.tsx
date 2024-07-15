import {useTypewriter} from '@/components/typeWriterHook';

export const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <span>{displayText}</span>;
};

export default Typewriter;

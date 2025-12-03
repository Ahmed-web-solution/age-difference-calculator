import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  text?: string;
  to?: string;
}

const BackButton = ({ text = 'Back', to }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Button
      onClick={handleBack}
      variant="ghost"
      className="neomorph rounded-2xl px-4 py-2 h-auto hover:neomorph-hover transition-all inline-flex items-center gap-2"
      aria-label={text}
    >
      <ArrowLeft className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm sm:text-base font-medium">{text}</span>
    </Button>
  );
};

export default BackButton;

import { useState, useEffect, useCallback, useRef } from "react";
import { Calendar, Copy, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
}

const Calculator = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const ariaLiveRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Accurate age calculation with leap year support
  const calculateDifference = useCallback(() => {
    if (!date1 || !date2) {
      setResult(null);
      setError("");
      return;
    }

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Validate dates
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      setError("Invalid date format");
      setResult(null);
      return;
    }

    // Future date validation (optional warning)
    const now = new Date();
    if (d1 > now || d2 > now) {
      setError("Note: One or both dates are in the future");
    } else {
      setError("");
    }
    
    // Ensure d1 is earlier than d2
    const [earlierDate, laterDate] = d1 < d2 ? [d1, d2] : [d2, d1];
    
    // Calculate years, months, days with leap year awareness
    let years = laterDate.getFullYear() - earlierDate.getFullYear();
    let months = laterDate.getMonth() - earlierDate.getMonth();
    let days = laterDate.getDate() - earlierDate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
      months--;
      // Get the number of days in the previous month (handles leap years automatically)
      const prevMonth = new Date(laterDate.getFullYear(), laterDate.getMonth(), 0);
      days += prevMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Calculate total days (accurate including leap years)
    const totalDays = Math.floor((laterDate.getTime() - earlierDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    
    const newResult = { years, months, days, totalDays, totalWeeks, totalHours };
    setResult(newResult);

    // Announce to screen readers
    if (ariaLiveRef.current) {
      ariaLiveRef.current.textContent = `Age difference calculated: ${years} years, ${months} months, ${days} days`;
    }
  }, [date1, date2]);

  // Auto-calculate on input change
  useEffect(() => {
    if (date1 && date2) {
      calculateDifference();
    }
  }, [date1, date2, calculateDifference]);

  // Enter key support
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && date1 && date2) {
      calculateDifference();
    }
  };

  const clearForm = () => {
    setDate1("");
    setDate2("");
    setResult(null);
    setError("");
    setCopied(false);
    
    if (ariaLiveRef.current) {
      ariaLiveRef.current.textContent = "Form cleared";
    }
  };

  // Copy result function
  const copyResult = async () => {
    if (!result) return;
    
    const text = `Age Difference: ${result.years} years, ${result.months} months, ${result.days} days (Total: ${result.totalDays.toLocaleString()} days)`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
      
      if (ariaLiveRef.current) {
        ariaLiveRef.current.textContent = "Result copied to clipboard";
      }
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  // Navigator.share with fallback
  const handleShare = async () => {
    if (!result) return;
    
    const text = `Age Difference: ${result.years} years, ${result.months} months, ${result.days} days`;
    const url = window.location.href;
    
    // Try Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Age Difference Calculator Result',
          text: text,
          url: url,
        });
        
        if (ariaLiveRef.current) {
          ariaLiveRef.current.textContent = "Result shared successfully";
        }
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to social media
        if ((err as Error).name !== 'AbortError') {
          console.log('Share failed:', err);
        }
      }
    }
    
    // Fallback: Show social media options
    toast({
      title: "Share Result",
      description: "Use the social media buttons below to share",
    });
  };

  const shareResult = (platform: string) => {
    if (!result) return;
    
    const text = `Age difference: ${result.years} years, ${result.months} months, ${result.days} days`;
    const url = window.location.href;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400,noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
      {/* Accessibility: Screen reader announcements */}
      <div 
        ref={ariaLiveRef}
        className="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      />

      {/* Ad Placeholder - Reduced height on mobile */}
      <div id="ad-top" className="w-full h-20 sm:h-24 bg-muted/50 rounded-2xl sm:rounded-3xl neomorph-inset flex items-center justify-center text-muted-foreground text-xs sm:text-sm">
        Advertisement
      </div>

      {/* Calculator Card - Mobile optimized padding */}
      <div className="neomorph rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 bg-background">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Date Inputs - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="date1" className="text-sm sm:text-base text-foreground font-medium flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                First Date
              </Label>
              <Input
                id="date1"
                type="date"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
                onKeyPress={handleKeyPress}
                max={new Date().toISOString().split('T')[0]}
                aria-label="First date for age calculation"
                aria-required="true"
                className="neomorph-inset border-0 bg-background h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg"
              />
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="date2" className="text-sm sm:text-base text-foreground font-medium flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                Second Date
              </Label>
              <Input
                id="date2"
                type="date"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
                onKeyPress={handleKeyPress}
                max={new Date().toISOString().split('T')[0]}
                aria-label="Second date for age calculation"
                aria-required="true"
                className="neomorph-inset border-0 bg-background h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg"
              />
            </div>
          </div>

          {/* Error Message - Mobile optimized */}
          {error && (
            <div className="text-amber-600 dark:text-amber-400 text-xs sm:text-sm text-center p-2 sm:p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl sm:rounded-2xl" role="alert">
              {error}
            </div>
          )}

          {/* Buttons - Full width on mobile, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={calculateDifference}
              disabled={!date1 || !date2}
              className="w-full sm:flex-1 h-12 sm:h-13 md:h-14 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-medium neomorph neomorph-hover bg-primary text-primary-foreground hover:bg-primary/90 border-0 transition-all duration-300"
              aria-label="Calculate age difference"
            >
              Calculate
            </Button>
            <Button
              onClick={clearForm}
              variant="outline"
              className="w-full sm:flex-1 h-12 sm:h-13 md:h-14 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-medium neomorph neomorph-hover bg-background border-0 transition-all duration-300"
              aria-label="Clear all inputs"
            >
              Clear
            </Button>
          </div>

          {/* Result Display - Mobile optimized */}
          {result && (
            <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-in fade-in-50 duration-500" role="region" aria-label="Calculation results">
              <div className="neomorph-inset rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-background">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 text-center text-foreground">Age Difference</h3>
                
                {/* Results Grid - Optimized for mobile */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary" aria-label={`${result.years} years`}>{result.years}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Years</div>
                  </div>
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary" aria-label={`${result.months} months`}>{result.months}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Months</div>
                  </div>
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent" aria-label={`${result.days} days`}>{result.days}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Days</div>
                  </div>
                </div>
                
                {/* Additional Stats - Mobile optimized */}
                <div className="space-y-1.5 sm:space-y-2 text-center text-xs sm:text-sm text-muted-foreground border-t border-border pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <div>Total: <span className="font-semibold text-foreground">{result.totalDays.toLocaleString()}</span> days</div>
                  <div>Or: <span className="font-semibold text-foreground">{result.totalWeeks.toLocaleString()}</span> weeks</div>
                  <div>Or: <span className="font-semibold text-foreground">{result.totalHours.toLocaleString()}</span> hours</div>
                </div>
              </div>

              {/* Action Buttons - Full width on mobile */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <Button
                  onClick={copyResult}
                  variant="outline"
                  className="w-full sm:flex-1 h-11 sm:h-12 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium neomorph neomorph-hover bg-background border-0 transition-all duration-300 flex items-center justify-center gap-2"
                  aria-label="Copy result to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {copied ? 'Copied!' : 'Copy Result'}
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="w-full sm:flex-1 h-11 sm:h-12 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium neomorph neomorph-hover bg-background border-0 transition-all duration-300 flex items-center justify-center gap-2"
                  aria-label="Share result"
                >
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Share
                </Button>
              </div>

              {/* Social Share Buttons - Mobile optimized */}
              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground text-center uppercase tracking-wide">Or Share On</h4>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
                  {[
                    { name: 'Twitter', color: 'bg-[#1DA1F2]' },
                    { name: 'Facebook', color: 'bg-[#4267B2]' },
                    { name: 'LinkedIn', color: 'bg-[#0077B5]' },
                    { name: 'WhatsApp', color: 'bg-[#25D366]' }
                  ].map((platform) => (
                    <button
                      key={platform.name}
                      onClick={() => shareResult(platform.name.toLowerCase())}
                      className={`${platform.color} text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl neomorph neomorph-hover text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95`}
                      aria-label={`Share on ${platform.name}`}
                    >
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

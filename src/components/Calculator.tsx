import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

const Calculator = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateDifference = () => {
    if (!date1 || !date2) return;

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Ensure d1 is earlier than d2
    const [earlierDate, laterDate] = d1 < d2 ? [d1, d2] : [d2, d1];
    
    let years = laterDate.getFullYear() - earlierDate.getFullYear();
    let months = laterDate.getMonth() - earlierDate.getMonth();
    let days = laterDate.getDate() - earlierDate.getDate();
    
    if (days < 0) {
      months--;
      const prevMonth = new Date(laterDate.getFullYear(), laterDate.getMonth(), 0);
      days += prevMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const totalDays = Math.floor((laterDate.getTime() - earlierDate.getTime()) / (1000 * 60 * 60 * 24));
    
    setResult({ years, months, days, totalDays });
  };

  const clearForm = () => {
    setDate1("");
    setDate2("");
    setResult(null);
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
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Ad Placeholder */}
      <div id="ad-top" className="w-full h-24 bg-muted/50 rounded-3xl neomorph-inset flex items-center justify-center text-muted-foreground text-sm">
        Advertisement
      </div>

      {/* Calculator Card */}
      <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
        <div className="space-y-8">
          {/* Date Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="date1" className="text-foreground font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                First Date
              </Label>
              <Input
                id="date1"
                type="date"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
                className="neomorph-inset border-0 bg-background h-14 rounded-2xl text-lg"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="date2" className="text-foreground font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                Second Date
              </Label>
              <Input
                id="date2"
                type="date"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
                className="neomorph-inset border-0 bg-background h-14 rounded-2xl text-lg"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={calculateDifference}
              disabled={!date1 || !date2}
              className="flex-1 h-14 rounded-2xl text-lg font-medium neomorph neomorph-hover bg-primary text-primary-foreground hover:bg-primary/90 border-0 transition-all duration-300"
            >
              Calculate
            </Button>
            <Button
              onClick={clearForm}
              variant="outline"
              className="flex-1 h-14 rounded-2xl text-lg font-medium neomorph neomorph-hover bg-background border-0 transition-all duration-300"
            >
              Clear
            </Button>
          </div>

          {/* Result Display */}
          {result && (
            <div className="space-y-6 animate-in fade-in-50 duration-500">
              <div className="neomorph-inset rounded-3xl p-8 bg-background">
                <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Age Difference</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">{result.years}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Years</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-secondary">{result.months}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Months</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-accent">{result.days}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Days</div>
                  </div>
                </div>
                <div className="text-center text-muted-foreground">
                  Total: <span className="font-semibold text-foreground">{result.totalDays.toLocaleString()}</span> days
                </div>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground text-center uppercase tracking-wide">Share Result</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: 'Twitter', color: 'bg-[#1DA1F2]' },
                    { name: 'Facebook', color: 'bg-[#4267B2]' },
                    { name: 'LinkedIn', color: 'bg-[#0077B5]' },
                    { name: 'WhatsApp', color: 'bg-[#25D366]' }
                  ].map((platform) => (
                    <button
                      key={platform.name}
                      onClick={() => shareResult(platform.name.toLowerCase())}
                      className={`${platform.color} text-white px-6 py-3 rounded-2xl neomorph neomorph-hover font-medium transition-all duration-300 hover:scale-105`}
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

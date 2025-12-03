interface InArticleAdProps {
  position: 'top' | 'mid' | 'bottom';
}

const InArticleAd = ({ position }: InArticleAdProps) => {
  const adStyles = {
    desktop: "min-h-[250px]",
    mobile: "min-h-[200px]"
  };

  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Desktop Ad */}
        <div className="hidden md:block">
          <div 
            className={`${adStyles.desktop} bg-gradient-to-r from-muted/20 to-muted/10 rounded-2xl border-2 border-dashed border-border flex items-center justify-center`}
            aria-label={`Advertisement ${position}`}
          >
            <div className="text-center p-6">
              <p className="text-sm text-muted-foreground mb-2">Advertisement</p>
              <p className="text-xs text-muted-foreground">
                {position === 'top' && 'Top Banner Ad - 728x90 or 970x250'}
                {position === 'mid' && 'In-Article Ad - 336x280 or 300x600'}
                {position === 'bottom' && 'Bottom Ad - 728x90'}
              </p>
              {/* Replace this div with actual AdSense code */}
              <div id={`ad-inarticle-desktop-${position}`} className="mt-4">
                {/* <ins  className="adsbygoogle"
                     style={{display:'inline-block',width:'728px',height:'90px'}}
                     data-ad-client="ca-pub-XXXXXXXX"
                     data-ad-slot="XXXXXXXXXX"></ins> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Ad */}
        <div className="block md:hidden">
          <div 
            className={`${adStyles.mobile} bg-gradient-to-r from-muted/20 to-muted/10 rounded-2xl border-2 border-dashed border-border flex items-center justify-center`}
            aria-label={`Advertisement ${position}`}
          >
            <div className="text-center p-4">
              <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
              <p className="text-xs text-muted-foreground">
                {position === 'top' && 'Mobile Banner - 320x100'}
                {position === 'mid' && 'Mobile In-Article - 300x250'}
                {position === 'bottom' && 'Mobile Footer - 320x50'}
              </p>
              {/* Replace this div with actual AdSense code */}
              <div id={`ad-inarticle-mobile-${position}`} className="mt-2">
                {/* <ins className="adsbygoogle"
                     style={{display:'inline-block',width:'320px',height:'100px'}}
                     data-ad-client="ca-pub-XXXXXXXX"
                     data-ad-slot="XXXXXXXXXX"></ins> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InArticleAd;

interface AdContainerProps {
  position: 'top' | 'bottom' | 'incontent';
  className?: string;
}

const AdContainer = ({ position, className = '' }: AdContainerProps) => {
  return (
    <div className={`ad-container ${className}`}>
      {/* Desktop Ad */}
      <div
        id={`ad-${position}-desktop`}
        className="ad-slot desktop-only hidden md:flex items-center justify-center neomorph-inset rounded-2xl"
        style={{ minHeight: '250px', backgroundColor: 'var(--background)' }}
      >
        <div className="text-center p-8">
          <p className="text-muted-foreground text-sm">Advertisement</p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Desktop Ad Slot - {position}
          </p>
        </div>
      </div>

      {/* Mobile Ad */}
      <div
        id={`ad-${position}-mobile`}
        className="ad-slot mobile-only flex md:hidden items-center justify-center neomorph-inset rounded-2xl"
        style={{ minHeight: '180px', backgroundColor: 'var(--background)' }}
      >
        <div className="text-center p-6">
          <p className="text-muted-foreground text-sm">Advertisement</p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Mobile Ad Slot - {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdContainer;

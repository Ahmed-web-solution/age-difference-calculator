import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  count?: number;
}

function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  count = 1,
  ...props
}: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    rounded: 'rounded-2xl neomorph-inset'
  };

  const skeletonClass = cn(
    "animate-pulse bg-muted/50",
    variantClasses[variant],
    className
  );
  
  const style: React.CSSProperties = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%')
  };

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={skeletonClass} style={style} {...props} />
        ))}
      </div>
    );
  }

  return <div className={skeletonClass} style={style} {...props} />
}

export { Skeleton };

import { Skeleton } from "@/components/ui/skeleton";

/**
 * Blog Card Skeleton
 * Placeholder for blog cards while loading
 * Matches BlogPreview and BlogIndex card design
 */
const BlogCardSkeleton = () => {
  return (
    <div className="neomorph rounded-2xl p-6 space-y-4">
      {/* Featured Image Skeleton */}
      <Skeleton variant="rounded" height="200px" />
      
      {/* Title Skeleton */}
      <Skeleton variant="text" count={2} />
      
      {/* Meta info (date, read time) */}
      <div className="flex items-center gap-4">
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="80px" />
      </div>
      
      {/* Description Skeleton */}
      <Skeleton variant="text" count={3} />
      
      {/* Tags Skeleton */}
      <div className="flex gap-2 flex-wrap">
        <Skeleton variant="rectangular" width="60px" height="24px" />
        <Skeleton variant="rectangular" width="80px" height="24px" />
        <Skeleton variant="rectangular" width="70px" height="24px" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;

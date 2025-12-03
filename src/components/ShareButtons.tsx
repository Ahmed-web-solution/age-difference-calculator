import { Share2, Bookmark, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
        toast.success("Shared successfully!");
      } catch (error) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const bookmark = {
      url,
      title,
      date: new Date().toISOString()
    };
    
    // Check if already bookmarked
    const exists = bookmarks.some((b: any) => b.url === url);
    
    if (!exists) {
      bookmarks.push(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      toast.success("Bookmarked!");
    } else {
      toast.info("Already bookmarked");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied!");
  };

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={handleShare}
        variant="outline"
        size="sm"
        className="neomorph rounded-xl"
        aria-label="Share this page"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
      
      <Button
        onClick={handleBookmark}
        variant="outline"
        size="sm"
        className="neomorph rounded-xl"
        aria-label="Bookmark this page"
      >
        <Bookmark className="w-4 h-4 mr-2" />
        Bookmark
      </Button>
      
      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="sm"
        className="neomorph rounded-xl"
        aria-label="Copy link to clipboard"
      >
        <LinkIcon className="w-4 h-4 mr-2" />
        Copy
      </Button>
    </div>
  );
};

export default ShareButtons;

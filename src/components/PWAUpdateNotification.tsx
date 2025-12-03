// PWA Update Notification Component
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const PWAUpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  // Check if we're in production environment
  const isProduction = () => {
    const hostname = window.location.hostname;
    // Only show updates on production domain, not localhost or preview builds
    return hostname !== 'localhost' && 
           hostname !== '127.0.0.1' && 
           !hostname.includes('preview') &&
           !hostname.includes('localhost');
  };

  useEffect(() => {
    // Don't run PWA update check in non-production environments
    if (!isProduction()) {
      console.log('PWA update notifications disabled in development/preview mode');
      return;
    }

    if ('serviceWorker' in navigator) {
      // Listen for service worker updates
      navigator.serviceWorker.ready.then((reg) => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available
                setShowUpdate(true);
                setRegistration(reg);
              }
            });
          }
        });
      });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATED') {
          setShowUpdate(true);
        }
      });
    }
  }, []);

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      // Tell the service worker to skip waiting
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Reload the page to activate the new service worker
      window.location.reload();
    } else {
      // Fallback: just reload
      window.location.reload();
    }
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  if (!showUpdate) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-md w-full mx-4"
      role="alert"
      aria-live="polite"
    >
      <div className="neomorph rounded-2xl p-4 bg-background border-2 border-primary/20 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">
              Update Available
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              A new version is ready. Refresh to update.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleUpdate}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Refresh Now
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-xl text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                Later
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss update notification"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAUpdateNotification;

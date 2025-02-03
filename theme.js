// Use consolidated performanceMonitor
performanceMonitor.start('pageLoad');
// ... code ...
performanceMonitor.end('pageLoad');

// Replace old virtual scroller with new implementation
const scroller = new LazyVirtualScroller({
  element: '#product-grid',
  height: '500px',
  rowHeight: 50
});

// Clean up event listeners and remove unused elements
function cleanup() {
  // Remove event listeners
  element.removeEventListener('click', handler);
  // Clear references
  element = null;
}

// Add Web Vitals monitoring
import {onCLS, onFID, onLCP} from 'web-vitals';

function sendToAnalytics({name, delta, id}) {
  // Send metrics to your analytics
  console.log({name, delta, id});
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);

// Remove unused event listeners
// document.addEventListener("shopify:section:reorder", () => {
//   document.dispatchEvent(
//     new CustomEvent("theme:header:check", { bubbles: false })
//   );
// });

// Consolidate performance monitoring
const performanceMonitor = {
  marks: new Set(),
  
  start(label) {
    performance.mark(`${label}:start`);
    this.marks.add(label);
  },

  end(label) {
    if (this.marks.has(label)) {
      performance.mark(`${label}:end`);
      performance.measure(label, `${label}:start`, `${label}:end`);
      this.marks.delete(label);
    }
  }
};

// Clean up virtual scroller implementation
class LazyVirtualScroller {
  constructor(options) {
    this.options = options;
    this.init();
  }

  init() {
    // Implementation
  }

  destroy() {
    // Cleanup
  }
}

// Use event delegation instead of multiple listeners
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-trigger]');
  if (!trigger) return;
  
  switch(trigger.dataset.trigger) {
    case 'search':
      // Handle search
      break;
    case 'cart':
      // Handle cart
      break;
  }
}); 
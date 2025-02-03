// Add performance marks and measures
performance.mark('start');
// ... code ...
performance.mark('end');
performance.measure('operation', 'start', 'end');

// Implement virtual scrolling for long lists
const virtualScroller = new VirtualScroller({
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
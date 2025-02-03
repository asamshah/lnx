const ScriptLoader = {
  loaded: new Set(),
  
  load(src, options = {}) {
    if (this.loaded.has(src)) return Promise.resolve();
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      
      script.onload = () => {
        this.loaded.add(src);
        resolve();
      };
      script.onerror = reject;
      
      document.body.appendChild(script);
    });
  },

  loadMultiple(scripts) {
    return Promise.all(scripts.map(src => this.load(src)));
  }
};

// Replace individual script loading with ScriptLoader utility
const thirdPartyScripts = [
  'https://cdn.salesfire.co.uk/code/c6b1bd8a-c87d-4c5f-9b90-dc165450909e.js',
  'https://bat.bing.com/bat.js', 
  'https://www.clarity.ms/tag/euq5zvhfbp'
];

window.addEventListener('load', () => {
  ScriptLoader.loadMultiple(thirdPartyScripts);
}); 
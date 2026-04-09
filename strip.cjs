const fs = require('fs');
const glob = require('glob');
const decomment = require('decomment');

// Find all CSS and JSX files
glob('src/**/*.{js,jsx,css}', (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  let totalFiles = 0;
  
  files.forEach(file => {
    try {
        let code = fs.readFileSync(file, 'utf8');
        let original = code;
        
        if (file.endsWith('.css')) {
            // Safe CSS comment regex
            code = code.replace(/\/\*[\s\S]*?\*\//g, '');
        } else {
            // Clean specific JSX comments first {/* ... */}
            code = code.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
            // Run decomment
            code = decomment.text(code, { safe: true, space: false });
        }
        
        // Remove empty lines heavily left behind
        code = code.replace(/^\s*[\r\n]/gm, '');

        if (code !== original) {
            fs.writeFileSync(file, code, 'utf8');
            totalFiles++;
        }
    } catch (e) {
        console.error(`Skipping ${file} due to parsing issues`);
    }
  });

  console.log(`Successfully stripped comments from ${totalFiles} files.`);
});

const fs = require('fs');
const path = require('path');

function addJsExtensions(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      addJsExtensions(filePath);
    } else if (file.name.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix relative imports to add .js extension
      content = content.replace(
        /from\s+['"](\.\/[^'"]+)(?<!\.js)['"]/g,
        "from '$1.js'"
      );
      
      // Fix export statements
      content = content.replace(
        /export\s+\*\s+from\s+['"](\.\/[^'"]+)(?<!\.js)['"]/g,
        "export * from '$1.js'"
      );
      
      // Fix import statements
      content = content.replace(
        /import\s+(.+)\s+from\s+['"](\.\/[^'"]+)(?<!\.js)['"]/g,
        "import $1 from '$2.js'"
      );
      
      fs.writeFileSync(filePath, content);
    }
  }
}

// Fix ESM imports in dist/esm directory
const esmDir = path.join(__dirname, '..', 'dist', 'esm');
if (fs.existsSync(esmDir)) {
  addJsExtensions(esmDir);
  console.log('Fixed ESM import extensions');
} else {
  console.error('ESM build directory not found');
  process.exit(1);
}
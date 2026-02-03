/**
 * Build script for GFMA - Vercel deployment
 * מפתח האתר: Michael Papaismedov
 * Copies all necessary files to dist/ directory
 */

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Clean and create dist directory
function cleanDist() {
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });
  console.log('✅ Created dist/ directory');
}

// Copy file or directory
function copyItem(src, dest) {
  const srcPath = path.join(__dirname, src);
  const destPath = path.join(distDir, dest);
  
  if (!fs.existsSync(srcPath)) {
    console.warn(`⚠️  Warning: ${src} does not exist, skipping...`);
    return;
  }
  
  const stat = fs.statSync(srcPath);
  
  if (stat.isDirectory()) {
    fs.mkdirSync(destPath, { recursive: true });
    const files = fs.readdirSync(srcPath);
    files.forEach(file => {
      copyItem(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(srcPath, destPath);
  }
}

// Main build process
function build() {
  console.log('🚀 Starting build process...\n');
  
  cleanDist();
  
  // Copy essential files
  console.log('📦 Copying files...');
  
  // Root files
  copyItem('index.html', 'index.html');
  
  // Public directory (all assets)
  copyItem('public', 'public');
  
  console.log('\n✅ Build completed successfully!');
  console.log('📁 Output directory: dist/');
  console.log('\n💡 To preview locally: npm run preview');
}

// Run build
try {
  build();
  process.exit(0);
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

/**
 * הצהרת בעלות / זכויות יוצרים
 * הקוד פותח על-ידי: Michael Papaismedov.
 * אין לעשות שימוש, העתקה או הפצה של הקוד ללא אישור.
 */

#!/usr/bin/env bun

import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

// Icon mappings from script.js
const iconMappings = [
    {
        type: "Home",
        lucide: ["home"],
        tabler: ["home", "home-2"],
        heroicons: ["home"],
        phosphor: ["house"],
        feather: ["home"],
        hugeicons: ["home"]
    },
    {
        type: "User/Profile",
        lucide: ["user", "user-circle"],
        tabler: ["user", "user-circle"],
        heroicons: ["user", "user-circle"],
        phosphor: ["user", "user-circle"],
        feather: ["user"],
        hugeicons: ["user"]
    },
    {
        type: "Settings/Preferences",
        lucide: ["settings", "cog"],
        tabler: ["settings", "adjustments"],
        heroicons: ["cog-6-tooth", "adjustments-horizontal"],
        phosphor: ["gear", "sliders"],
        feather: ["settings"],
        hugeicons: ["settings"]
    },
    {
        type: "Search",
        lucide: ["search"],
        tabler: ["search"],
        heroicons: ["magnifying-glass"],
        phosphor: ["magnifying-glass"],
        feather: ["search"],
        hugeicons: ["search"]
    },
    {
        type: "Menu/Hamburger",
        lucide: ["menu"],
        tabler: ["menu-2"],
        heroicons: ["bars-3"],
        phosphor: ["list"],
        feather: ["menu"],
        hugeicons: ["menu"]
    }
];

const libraries = ['lucide', 'tabler', 'heroicons', 'phosphor', 'feather', 'hugeicons'];

// Get available icons for each library
function getAvailableIcons(library) {
    const iconPath = join(process.cwd(), 'icons', library);
    if (!existsSync(iconPath)) {
        return [];
    }
    
    return readdirSync(iconPath)
        .filter(file => file.endsWith('.svg'))
        .map(file => file.replace('.svg', ''));
}

// Check icon existence
function checkIconExistence() {
    const results = {
        libraries: {},
        missing: {},
        suggestions: {}
    };

    libraries.forEach(lib => {
        const available = getAvailableIcons(lib);
        results.libraries[lib] = {
            total: available.length,
            icons: available
        };
        results.missing[lib] = [];
        results.suggestions[lib] = [];
    });

    // Check each mapping
    iconMappings.forEach(mapping => {
        libraries.forEach(lib => {
            const requiredIcons = mapping[lib] || [];
            const availableIcons = results.libraries[lib].icons;
            
            requiredIcons.forEach(iconName => {
                if (!availableIcons.includes(iconName)) {
                    results.missing[lib].push({
                        type: mapping.type,
                        icon: iconName
                    });
                    
                    // Find similar icons
                    const similar = availableIcons.filter(available => 
                        available.includes(iconName) || 
                        iconName.includes(available) ||
                        levenshteinDistance(iconName, available) <= 2
                    );
                    
                    if (similar.length > 0) {
                        results.suggestions[lib].push({
                            missing: iconName,
                            suggestions: similar.slice(0, 3)
                        });
                    }
                }
            });
        });
    });

    return results;
}

// Simple Levenshtein distance function
function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

// Generate HTML-based report
function generateHTMLReport(results) {
    let html = `
<!DOCTYPE html>
<html>
<head>
    <title>Icon Verification Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .library { margin-bottom: 30px; }
        .library h2 { color: #333; border-bottom: 2px solid #ddd; }
        .missing { background-color: #ffebee; padding: 10px; margin: 10px 0; border-left: 4px solid #f44336; }
        .suggestions { background-color: #e3f2fd; padding: 10px; margin: 10px 0; border-left: 4px solid #2196f3; }
        .available-count { color: #4caf50; font-weight: bold; }
        .missing-count { color: #f44336; font-weight: bold; }
        .icon-list { display: flex; flex-wrap: wrap; gap: 5px; margin: 10px 0; }
        .icon-item { background: #f5f5f5; padding: 3px 8px; border-radius: 3px; font-size: 12px; }
        pre { background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Icon Library Verification Report</h1>
`;

    libraries.forEach(lib => {
        const libData = results.libraries[lib];
        const missing = results.missing[lib];
        const suggestions = results.suggestions[lib];
        
        html += `
    <div class="library">
        <h2>${lib.toUpperCase()}</h2>
        <p>
            <span class="available-count">Available: ${libData.total}</span> | 
            <span class="missing-count">Missing: ${missing.length}</span>
        </p>
        `;
        
        if (missing.length > 0) {
            html += `<div class="missing">
                <h3>Missing Icons:</h3>
                <ul>`;
            missing.forEach(item => {
                html += `<li><strong>${item.type}</strong>: ${item.icon}</li>`;
            });
            html += `</ul></div>`;
        }
        
        if (suggestions.length > 0) {
            html += `<div class="suggestions">
                <h3>Suggested Alternatives:</h3>
                <ul>`;
            suggestions.forEach(item => {
                html += `<li><strong>${item.missing}</strong> → ${item.suggestions.join(', ')}</li>`;
            });
            html += `</ul></div>`;
        }
        
        // Show first 20 available icons as sample
        html += `<details>
            <summary>Available Icons (sample of first 20)</summary>
            <div class="icon-list">`;
        libData.icons.slice(0, 20).forEach(icon => {
            html += `<span class="icon-item">${icon}</span>`;
        });
        html += `</div></details>`;
        
        html += `</div>`;
    });

    html += `
    <h2>HugeIcons Analysis</h2>
    <p>The HugeIcons are currently being rendered as CSS classes but should be rendered as SVG files.</p>
    <div class="suggestions">
        <h3>Solution:</h3>
        <p>Update the createIcon function to load SVG files directly for HugeIcons instead of using CSS classes.</p>
        <pre>
// Change this:
iconDisplay.innerHTML = \`&lt;i class="hgi-stroke hgi-\${iconName}"&gt;&lt;/i&gt;\`;

// To this:
iconDisplay.innerHTML = getHugeIconSVG(iconName);
        </pre>
    </div>
    
</body>
</html>`;

    return html;
}

// Main execution
const results = checkIconExistence();

// Print summary to console
console.log('🔍 Icon Library Verification Results\n');

libraries.forEach(lib => {
    const libData = results.libraries[lib];
    const missing = results.missing[lib];
    
    console.log(`📦 ${lib.toUpperCase()}`);
    console.log(`   Available: ${libData.total} icons`);
    console.log(`   Missing: ${missing.length} icons`);
    
    if (missing.length > 0) {
        console.log('   Missing icons:');
        missing.forEach(item => {
            console.log(`     - ${item.icon} (for ${item.type})`);
        });
        
        if (results.suggestions[lib].length > 0) {
            console.log('   Suggestions:');
            results.suggestions[lib].forEach(item => {
                console.log(`     - ${item.missing} → [${item.suggestions.join(', ')}]`);
            });
        }
    }
    console.log('');
});

// Generate HTML report
const htmlReport = generateHTMLReport(results);
await Bun.write('icon-verification-report.html', htmlReport);

console.log('📄 Full report generated: icon-verification-report.html');
console.log('🎯 Key Issues Found:');
console.log('   - HugeIcons are using CSS classes instead of SVG files');
console.log('   - Some icon names may not match exactly');
console.log('\n💡 Run: open icon-verification-report.html');
// Icon mappings - each icon type maps to icon names in different libraries
const iconMappings = [
    {
        type: "Home",
        lucide: ["house"], // Fixed: home -> house (home doesn't exist in Lucide)
        tabler: ["home", "home-2"],
        heroicons: ["home"],
        phosphor: ["lighthouse-fill"], // Using available lighthouse icon
        feather: ["home"],
        hugeicons: [] // No suitable home icon available
    },
    {
        type: "User/Profile",
        lucide: ["user", "circle-user"], // Fixed: user-circle -> circle-user
        tabler: ["user", "user-circle"],
        heroicons: ["user"], // Fixed: removed user-circle (not available)
        phosphor: ["users-three-fill"], // Using available users icon
        feather: ["user"],
        hugeicons: ["aiuser"] // Using available AI user icon
    },
    {
        type: "Settings/Preferences",
        lucide: ["settings", "cog"],
        tabler: ["settings", "adjustments"],
        heroicons: ["cog-8-tooth", "adjustments-horizontal"], // Fixed: cog-6-tooth -> cog-8-tooth
        phosphor: ["file-magnifying-glass-fill"], // No gear available, using search as alternative
        feather: ["settings"],
        hugeicons: ["aisetting"] // Using available AI setting icon
    },
    {
        type: "Search",
        lucide: ["search"],
        tabler: ["search"],
        heroicons: ["document-magnifying-glass"], // Using available magnifying glass variant
        phosphor: ["file-magnifying-glass-fill"], // Using available magnifying glass
        feather: ["search"],
        hugeicons: ["aisearch"] // Using available AI search icon
    },
    {
        type: "Menu/Hamburger",
        lucide: ["menu"],
        tabler: ["menu-2"],
        heroicons: ["bars-3-bottom-left"], // Using available bars variant
        phosphor: ["list-plus-fill"], // Using available list icon
        feather: ["menu"],
        hugeicons: [] // No suitable menu icon available
    },
    {
        type: "Close/X",
        lucide: ["x"],
        tabler: ["x"],
        heroicons: ["x-mark"],
        phosphor: ["x"],
        feather: ["x"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Plus/Add",
        lucide: ["plus"],
        tabler: ["plus"],
        heroicons: ["plus"],
        phosphor: ["plus"],
        feather: ["plus"],
        hugeicons: ["add01"] // Using available add icon
    },
    {
        type: "Minus/Remove",
        lucide: ["minus"],
        tabler: ["minus"],
        heroicons: ["minus"],
        phosphor: ["minus"],
        feather: ["minus"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Edit/Pencil",
        lucide: ["edit", "pencil"],
        tabler: ["edit", "pencil"],
        heroicons: ["pencil", "pencil-square"],
        phosphor: ["pencil", "pencil-simple"],
        feather: ["edit"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Delete/Trash",
        lucide: ["trash", "trash-2"],
        tabler: ["trash"],
        heroicons: ["trash"],
        phosphor: ["trash"],
        feather: ["trash", "trash-2"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Save/Download",
        lucide: ["save", "download"],
        tabler: ["download"],
        heroicons: ["arrow-down-tray"],
        phosphor: ["download-simple", "floppy-disk"],
        feather: ["save", "download"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Upload",
        lucide: ["upload"],
        tabler: ["upload"],
        heroicons: ["arrow-up-tray"],
        phosphor: ["upload-simple"],
        feather: ["upload"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Heart/Like",
        lucide: ["heart"],
        tabler: ["heart"],
        heroicons: ["heart"],
        phosphor: ["heart"],
        feather: ["heart"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Star/Favorite",
        lucide: ["star"],
        tabler: ["star"],
        heroicons: ["star"],
        phosphor: ["star"],
        feather: ["star"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Share",
        lucide: ["share", "share-2"],
        tabler: ["share"],
        heroicons: ["share"],
        phosphor: ["share-network"],
        feather: ["share", "share-2"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Copy",
        lucide: ["copy"],
        tabler: ["copy"],
        heroicons: ["square-2-stack"],
        phosphor: ["copy"],
        feather: ["copy"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Lock/Security",
        lucide: ["lock"],
        tabler: ["lock"],
        heroicons: ["lock-closed"],
        phosphor: ["lock"],
        feather: ["lock"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Unlock",
        lucide: ["unlock"],
        tabler: ["lock-open"],
        heroicons: ["lock-open"],
        phosphor: ["lock-open"],
        feather: ["unlock"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Eye/View",
        lucide: ["eye"],
        tabler: ["eye"],
        heroicons: ["eye"],
        phosphor: ["eye"],
        feather: ["eye"],
        hugeicons: ["aiview"] // Using available AI view icon
    },
    {
        type: "Eye Off/Hide",
        lucide: ["eye-off"],
        tabler: ["eye-off"],
        heroicons: ["eye-slash"],
        phosphor: ["eye-slash"],
        feather: ["eye-off"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Mail/Email",
        lucide: ["mail"],
        tabler: ["mail"],
        heroicons: ["envelope"],
        phosphor: ["envelope"],
        feather: ["mail"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Phone",
        lucide: ["phone"],
        tabler: ["phone"],
        heroicons: ["phone"],
        phosphor: ["phone"],
        feather: ["phone"],
        hugeicons: ["aiphone01"] // Using available AI phone icon
    },
    {
        type: "Calendar",
        lucide: ["calendar"],
        tabler: ["calendar"],
        heroicons: ["calendar-days"],
        phosphor: ["calendar"],
        feather: ["calendar"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Clock/Time",
        lucide: ["clock"],
        tabler: ["clock"],
        heroicons: ["clock"],
        phosphor: ["clock"],
        feather: ["clock"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Location/Map Pin",
        lucide: ["map-pin"],
        tabler: ["map-pin"],
        heroicons: ["map-pin"],
        phosphor: ["map-pin"],
        feather: ["map-pin"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Bag/Shopping",
        lucide: ["shopping-bag"],
        tabler: ["shopping-bag"],
        heroicons: ["shopping-bag"],
        phosphor: ["handbag"],
        feather: ["shopping-bag"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Cart/Shopping Cart",
        lucide: ["shopping-cart"],
        tabler: ["shopping-cart"],
        heroicons: ["shopping-cart"],
        phosphor: ["shopping-cart"],
        feather: ["shopping-cart"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Bell/Notification",
        lucide: ["bell"],
        tabler: ["bell"],
        heroicons: ["bell"],
        phosphor: ["bell"],
        feather: ["bell"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Check/Checkmark",
        lucide: ["check"],
        tabler: ["check"],
        heroicons: ["check"],
        phosphor: ["check"],
        feather: ["check"],
        hugeicons: ["check-circle"] // Using available check-circle icon
    },
    {
        type: "Arrow Right",
        lucide: ["arrow-right"],
        tabler: ["arrow-right"],
        heroicons: ["arrow-right"],
        phosphor: ["arrow-right"],
        feather: ["arrow-right"],
        hugeicons: [] // No suitable right arrow icon available
    },
    {
        type: "Arrow Left",
        lucide: ["arrow-left"],
        tabler: ["arrow-left"],
        heroicons: ["arrow-left"],
        phosphor: ["arrow-left"],
        feather: ["arrow-left"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Arrow Up",
        lucide: ["arrow-up"],
        tabler: ["arrow-up"],
        heroicons: ["arrow-up"],
        phosphor: ["arrow-up"],
        feather: ["arrow-up"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Arrow Down",
        lucide: ["arrow-down"],
        tabler: ["arrow-down"],
        heroicons: ["arrow-down"],
        phosphor: ["arrow-down"],
        feather: ["arrow-down"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Info/Information",
        lucide: ["info"],
        tabler: ["info-circle"],
        heroicons: ["information-circle"],
        phosphor: ["info"],
        feather: ["info"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Warning/Alert",
        lucide: ["alert-triangle"],
        tabler: ["alert-triangle"],
        heroicons: ["exclamation-triangle"],
        phosphor: ["warning"],
        feather: ["alert-triangle"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Error/X Circle",
        lucide: ["x-circle"],
        tabler: ["x"],
        heroicons: ["x-circle"],
        phosphor: ["x-circle"],
        feather: ["x-circle"],
        hugeicons: [] // No suitable icon available
    },
    {
        type: "Success/Check Circle",
        lucide: ["check-circle"],
        tabler: ["check"],
        heroicons: ["check-circle"],
        phosphor: ["check-circle"],
        feather: ["check-circle"],
        hugeicons: ["check-circle"] // Using available check-circle icon
    }
];

// Function to load SVG file content

// Function to create SVG icons for each library
function createIcon(library, iconName) {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon-item';
    
    const iconDisplay = document.createElement('div');
    iconDisplay.className = `icon-display`;
    
    const iconNameSpan = document.createElement('div');
    iconNameSpan.className = 'icon-name';
    iconNameSpan.textContent = iconName;
    
    // Create the appropriate icon based on library
    switch(library) {
        case 'lucide':
            iconDisplay.innerHTML = `<i data-lucide="${iconName}"></i>`;
            break;
        case 'tabler':
        case 'heroicons':
        case 'phosphor':
        case 'hugeicons':
            const img = document.createElement('img');
            img.src = `icons/${library}/${iconName}.svg`;
            img.alt = iconName;
            img.width = 24;
            img.height = 24;
            
            img.onerror = function() {
                console.warn(`Missing SVG icon: ${library}/${iconName}.svg`);
                this.style.display = 'none';
            };
            
            iconDisplay.appendChild(img);
            break;
        case 'feather':
            iconDisplay.innerHTML = `<i data-feather="${iconName}"></i>`;
            break;
    }
    
    iconDiv.appendChild(iconDisplay);
    iconDiv.appendChild(iconNameSpan);
    return iconDiv;
}




// Function to populate the table
function populateTable() {
    const tbody = document.getElementById('comparison-tbody');
    
    iconMappings.forEach(mapping => {
        const row = document.createElement('tr');
        
        // Icon type cell
        const typeCell = document.createElement('td');
        typeCell.className = 'icon-type-cell';
        typeCell.textContent = mapping.type;
        row.appendChild(typeCell);
        
        // Library cells
        ['lucide', 'tabler', 'heroicons', 'phosphor', 'feather', 'hugeicons'].forEach(library => {
            const cell = document.createElement('td');
            cell.className = 'icon-cell';
            
            const icons = mapping[library] || [];
            
            if (icons.length === 0) {
                cell.innerHTML = '<span class="empty-cell">—</span>';
            } else {
                icons.forEach(iconName => {
                    cell.appendChild(createIcon(library, iconName));
                });
            }
            
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateTable();
    
    // Initialize Lucide icons AFTER table is populated
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    // Initialize Feather icons AFTER table is populated
    if (typeof feather !== 'undefined' && feather.replace) {
        feather.replace();
    }
});
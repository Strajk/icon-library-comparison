// Icon mappings - each icon type maps to icon names in different libraries
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
    },
    {
        type: "Close/X",
        lucide: ["x"],
        tabler: ["x"],
        heroicons: ["x-mark"],
        phosphor: ["x"],
        feather: ["x"],
        hugeicons: ["cancel"]
    },
    {
        type: "Plus/Add",
        lucide: ["plus"],
        tabler: ["plus"],
        heroicons: ["plus"],
        phosphor: ["plus"],
        feather: ["plus"],
        hugeicons: ["add"]
    },
    {
        type: "Minus/Remove",
        lucide: ["minus"],
        tabler: ["minus"],
        heroicons: ["minus"],
        phosphor: ["minus"],
        feather: ["minus"],
        hugeicons: ["remove"]
    },
    {
        type: "Edit/Pencil",
        lucide: ["edit", "pencil"],
        tabler: ["edit", "pencil"],
        heroicons: ["pencil", "pencil-square"],
        phosphor: ["pencil", "pencil-simple"],
        feather: ["edit"],
        hugeicons: ["edit"]
    },
    {
        type: "Delete/Trash",
        lucide: ["trash", "trash-2"],
        tabler: ["trash"],
        heroicons: ["trash"],
        phosphor: ["trash"],
        feather: ["trash", "trash-2"],
        hugeicons: ["delete"]
    },
    {
        type: "Save/Download",
        lucide: ["save", "download"],
        tabler: ["download"],
        heroicons: ["arrow-down-tray"],
        phosphor: ["download-simple", "floppy-disk"],
        feather: ["save", "download"],
        hugeicons: ["download"]
    },
    {
        type: "Upload",
        lucide: ["upload"],
        tabler: ["upload"],
        heroicons: ["arrow-up-tray"],
        phosphor: ["upload-simple"],
        feather: ["upload"],
        hugeicons: ["upload"]
    },
    {
        type: "Heart/Like",
        lucide: ["heart"],
        tabler: ["heart"],
        heroicons: ["heart"],
        phosphor: ["heart"],
        feather: ["heart"],
        hugeicons: ["heart"]
    },
    {
        type: "Star/Favorite",
        lucide: ["star"],
        tabler: ["star"],
        heroicons: ["star"],
        phosphor: ["star"],
        feather: ["star"],
        hugeicons: ["star"]
    },
    {
        type: "Share",
        lucide: ["share", "share-2"],
        tabler: ["share"],
        heroicons: ["share"],
        phosphor: ["share-network"],
        feather: ["share", "share-2"],
        hugeicons: ["share"]
    },
    {
        type: "Copy",
        lucide: ["copy"],
        tabler: ["copy"],
        heroicons: ["square-2-stack"],
        phosphor: ["copy"],
        feather: ["copy"],
        hugeicons: ["copy"]
    },
    {
        type: "Lock/Security",
        lucide: ["lock"],
        tabler: ["lock"],
        heroicons: ["lock-closed"],
        phosphor: ["lock"],
        feather: ["lock"],
        hugeicons: ["lock"]
    },
    {
        type: "Unlock",
        lucide: ["unlock"],
        tabler: ["lock-open"],
        heroicons: ["lock-open"],
        phosphor: ["lock-open"],
        feather: ["unlock"],
        hugeicons: ["unlock"]
    },
    {
        type: "Eye/View",
        lucide: ["eye"],
        tabler: ["eye"],
        heroicons: ["eye"],
        phosphor: ["eye"],
        feather: ["eye"],
        hugeicons: ["eye"]
    },
    {
        type: "Eye Off/Hide",
        lucide: ["eye-off"],
        tabler: ["eye-off"],
        heroicons: ["eye-slash"],
        phosphor: ["eye-slash"],
        feather: ["eye-off"],
        hugeicons: ["eye-off"]
    },
    {
        type: "Mail/Email",
        lucide: ["mail"],
        tabler: ["mail"],
        heroicons: ["envelope"],
        phosphor: ["envelope"],
        feather: ["mail"],
        hugeicons: ["mail"]
    },
    {
        type: "Phone",
        lucide: ["phone"],
        tabler: ["phone"],
        heroicons: ["phone"],
        phosphor: ["phone"],
        feather: ["phone"],
        hugeicons: ["phone"]
    },
    {
        type: "Calendar",
        lucide: ["calendar"],
        tabler: ["calendar"],
        heroicons: ["calendar-days"],
        phosphor: ["calendar"],
        feather: ["calendar"],
        hugeicons: ["calendar"]
    },
    {
        type: "Clock/Time",
        lucide: ["clock"],
        tabler: ["clock"],
        heroicons: ["clock"],
        phosphor: ["clock"],
        feather: ["clock"],
        hugeicons: ["clock"]
    },
    {
        type: "Location/Map Pin",
        lucide: ["map-pin"],
        tabler: ["map-pin"],
        heroicons: ["map-pin"],
        phosphor: ["map-pin"],
        feather: ["map-pin"],
        hugeicons: ["location"]
    },
    {
        type: "Bag/Shopping",
        lucide: ["shopping-bag"],
        tabler: ["shopping-bag"],
        heroicons: ["shopping-bag"],
        phosphor: ["handbag"],
        feather: ["shopping-bag"],
        hugeicons: ["shopping-bag"]
    },
    {
        type: "Cart/Shopping Cart",
        lucide: ["shopping-cart"],
        tabler: ["shopping-cart"],
        heroicons: ["shopping-cart"],
        phosphor: ["shopping-cart"],
        feather: ["shopping-cart"],
        hugeicons: ["shopping-cart"]
    },
    {
        type: "Bell/Notification",
        lucide: ["bell"],
        tabler: ["bell"],
        heroicons: ["bell"],
        phosphor: ["bell"],
        feather: ["bell"],
        hugeicons: ["notification"]
    },
    {
        type: "Check/Checkmark",
        lucide: ["check"],
        tabler: ["check"],
        heroicons: ["check"],
        phosphor: ["check"],
        feather: ["check"],
        hugeicons: ["check"]
    },
    {
        type: "Arrow Right",
        lucide: ["arrow-right"],
        tabler: ["arrow-right"],
        heroicons: ["arrow-right"],
        phosphor: ["arrow-right"],
        feather: ["arrow-right"],
        hugeicons: ["arrow-right"]
    },
    {
        type: "Arrow Left",
        lucide: ["arrow-left"],
        tabler: ["arrow-left"],
        heroicons: ["arrow-left"],
        phosphor: ["arrow-left"],
        feather: ["arrow-left"],
        hugeicons: ["arrow-left"]
    },
    {
        type: "Arrow Up",
        lucide: ["arrow-up"],
        tabler: ["arrow-up"],
        heroicons: ["arrow-up"],
        phosphor: ["arrow-up"],
        feather: ["arrow-up"],
        hugeicons: ["arrow-up"]
    },
    {
        type: "Arrow Down",
        lucide: ["arrow-down"],
        tabler: ["arrow-down"],
        heroicons: ["arrow-down"],
        phosphor: ["arrow-down"],
        feather: ["arrow-down"],
        hugeicons: ["arrow-down"]
    },
    {
        type: "Info/Information",
        lucide: ["info"],
        tabler: ["info-circle"],
        heroicons: ["information-circle"],
        phosphor: ["info"],
        feather: ["info"],
        hugeicons: ["info"]
    },
    {
        type: "Warning/Alert",
        lucide: ["alert-triangle"],
        tabler: ["alert-triangle"],
        heroicons: ["exclamation-triangle"],
        phosphor: ["warning"],
        feather: ["alert-triangle"],
        hugeicons: ["alert"]
    },
    {
        type: "Error/X Circle",
        lucide: ["x-circle"],
        tabler: ["x"],
        heroicons: ["x-circle"],
        phosphor: ["x-circle"],
        feather: ["x-circle"],
        hugeicons: ["x-circle"]
    },
    {
        type: "Success/Check Circle",
        lucide: ["check-circle"],
        tabler: ["check"],
        heroicons: ["check-circle"],
        phosphor: ["check-circle"],
        feather: ["check-circle"],
        hugeicons: ["check-circle"]
    }
];

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
            iconDisplay.innerHTML = getTablerSVG(iconName);
            break;
        case 'heroicons':
            // Create heroicons SVG manually with common paths
            iconDisplay.innerHTML = getHeroiconSVG(iconName);
            break;
        case 'phosphor':
            iconDisplay.innerHTML = `<i class="ph ph-${iconName}"></i>`;
            break;
        case 'feather':
            iconDisplay.innerHTML = `<i data-feather="${iconName}"></i>`;
            break;
        case 'hugeicons':
            iconDisplay.innerHTML = `<i class="hgi-stroke hgi-${iconName}"></i>`;
            break;
    }
    
    iconDiv.appendChild(iconDisplay);
    iconDiv.appendChild(iconNameSpan);
    return iconDiv;
}

// Function to get Heroicons SVG manually
function getHeroiconSVG(iconName) {
    const svgMap = {
        'home': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',
        'user': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>',
        'user-circle': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>',
        'cog-6-tooth': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>',
        'adjustments-horizontal': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>',
        'magnifying-glass': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>',
        'bars-3': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',
        'x-mark': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>',
        'plus': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',
        'minus': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>',
        'pencil': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>',
        'pencil-square': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>',
        'trash': '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>'
    };
    
    return svgMap[iconName] || `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><circle cx="12" cy="12" r="2"/></svg>`;
}

// Function to get Tabler SVG manually
function getTablerSVG(iconName) {
    const svgMap = {
        'home': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>',
        'home-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M10 12h4v4h-4z" /></svg>',
        'user': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>',
        'user-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>',
        'settings': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>',
        'adjustments': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 4v4" /><path d="M6 12v8" /><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 4v10" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v11" /></svg>',
        'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>',
        'menu-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>',
        'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>',
        'plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>',
        'minus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>'
    };
    
    return svgMap[iconName] || `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/></svg>`;
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
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize Feather icons AFTER table is populated
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
// Structured data objects for spare parts
const spareParts = [
    { name: 'Brake Pad', code: 'BP001', category: 'Brakes', price: 29.99 },
    { name: 'Oil Filter', code: 'OF002', category: 'Engine', price: 15.99 },
    { name: 'Spark Plug', code: 'SP003', category: 'Ignition', price: 8.99 },
    { name: 'Battery', code: 'BAT004', category: 'Electrical', price: 89.99 }
];

// Function to display all parts
function showParts(parts) {
    parts.forEach(part => {
        console.log(`Name: ${part.name}, Code: ${part.code}, Category: ${part.category}, Price: $${part.price}`);
    });
}

// Function to filter parts by category
function filterCategory(parts, category) {
    return parts.filter(part => part.category.toLowerCase() === category.toLowerCase());
}

// Function to search for parts by name
function searchParts(parts, name) {
    return parts.filter(part => part.name.toLowerCase().includes(name.toLowerCase()));
}

// Function to display filtered/search results
function display(parts) {
    if (parts.length > 0) {
        showParts(parts);
    } else {
        console.log('No parts found.');
    }
}

// Example usage:
// showParts(spareParts);
// display(filterCategory(spareParts, 'Engine')); 
// display(searchParts(spareParts, 'Brake'));
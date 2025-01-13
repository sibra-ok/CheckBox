console.log('hi');
let lastChecked;

// Get all checkboxes
const checkboxes = document.querySelectorAll('.check');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
checkbox.addEventListener('click', (event) => {
// Check if shift key is pressed
if (event.shiftKey) {
// If no checkboxes are checked, check all below the current one
if (!lastChecked) {
const currentIndex = Array.from(checkboxes).indexOf(event.target);
for (let i = currentIndex; i < checkboxes.length; i++) {
checkboxes[i].checked = true;
}
} else {
// Check all checkboxes between the current and last checked ones
const currentIndex = Array.from(checkboxes).indexOf(event.target);
const lastCheckedIndex = Array.from(checkboxes).indexOf(lastChecked);
const start = Math.min(currentIndex, lastCheckedIndex);
const end = Math.max(currentIndex, lastCheckedIndex);
for (let i = start; i <= end; i++) {
checkboxes[i].checked = true;
}
}
// Update lastChecked to the current checkbox
lastChecked = event.target;
} else {
// If shift key is not pressed, update lastChecked to the current checkbox
lastChecked = event.target;
}
});
});


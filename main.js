import { Application } from "./stimulus.js";
import RandomImageController from "./random_image_controller.js";
import DraggableController from "./draggable_controller.js";

window.Stimulus = Application.start();
Stimulus.register("random-image", RandomImageController);
Stimulus.register("draggable", DraggableController);

// document.addEventListener('DOMContentLoaded', () => {
//     const imageUrlArray = [
//         'https://picsum.photos/2000/2000' // Example image URL
//     ];

//     function displayRandomImage() {
//         const imgElement = document.createElement('img');
//         const randomIndex = Math.floor(Math.random() * imageUrlArray.length);
//         imgElement.src = imageUrlArray[randomIndex];
//         document.body.appendChild(imgElement);
//         imgElement.style.width = '100%';
//         imgElement.style.height = '100vh';
//         imgElement.style.position = 'absolute';
//         imgElement.style.top = '0';
//         imgElement.style.left = '0';
//         imgElement.style.objectFit = 'cover';
//         imgElement.style.zIndex = '-1'; // Ensure the image is a background layer
//     }

//     function displayInfoBox() {
//         const box = document.createElement('div');
//         box.className = 'info-box draggable-box p-3 bg-black bg-opacity-50 text-white font-mono max-w-md text-justify filter backdrop-blur-sm';
//         box.style.width = '300px';  // Set explicit width
//         box.style.height = '200px'; // Set explicit height
//         box.style.position = 'absolute';
//         box.style.bottom = '10rem'; // Initial position
//         box.style.right = '4rem';
//         box.innerHTML = `
//             <h1 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Drag me around!</h1>
//             <p class="mt-2 text-base leading-6 text-white">Click and drag this box to move it around the screen.</p>
//         `;
//         document.body.appendChild(box);
//         makeDraggable();
//     }

//     function makeDraggable() {
//         const infoBox = document.querySelector('.info-box');
//         let isDragging = false;
//         let dragStartX, dragStartY;

//         // Initialize with no inversion
//         infoBox.style.filter = 'none';

//         // Mouse Down Event
//         infoBox.addEventListener('mousedown', function(e) {
//             isDragging = true;
//             dragStartX = e.clientX - infoBox.offsetLeft;
//             dragStartY = e.clientY - infoBox.offsetTop;
//             infoBox.style.cursor = 'grabbing';

//             // Apply inversion filter while dragging
//             infoBox.style.filter = 'invert(1)';
//         });

//         // Mouse Move Event
//         window.addEventListener('mousemove', function(e) {
//             if (isDragging) {
//                 e.preventDefault(); // Prevent default actions
//                 const x = e.clientX - dragStartX;
//                 const y = e.clientY - dragStartY;

//                 // Inversion filter remains during movement
//                 infoBox.style.filter = 'invert(1)';

//                 // Update position, ensuring the box stays in bounds
//                 const maxX = window.innerWidth - infoBox.offsetWidth;
//                 const maxY = window.innerHeight - infoBox.offsetHeight;

//                 infoBox.style.left = Math.max(0, Math.min(maxX, x)) + 'px';
//                 infoBox.style.top = Math.max(0, Math.min(maxY, y)) + 'px';
//             }
//         });

//         // Mouse Up Event
//         window.addEventListener('mouseup', function() {
//             if (isDragging) {
//                 isDragging = false;
//                 infoBox.style.cursor = 'grab';

//                 // Return to normal once dragging ends
//                 infoBox.style.filter = 'none';
//             }
//         });
//     }

//     // Initial calls to setup the page
//     displayRandomImage();
//     displayInfoBox();
// });

// random_image_controller.js
import { Controller } from "./stimulus.js";

export default class extends Controller {
  static targets = ["imageDisplay"];

  connect() {
    const imageUrlArray = ["https://picsum.photos/2000/2000"]; // Example image URL
    const randomIndex = Math.floor(Math.random() * imageUrlArray.length);
    this.imageDisplayTarget.src = imageUrlArray[randomIndex];
    this.resize();
  }

  resize() {
    // Since this resize method is now called within connect, it's properly setting up the listener
    window.addEventListener("resize", () => {
      // Utilize this.imageDisplayTarget for consistency with Stimulus targets
      this.imageDisplayTarget.style.width = `${window.innerWidth}px`;
      this.imageDisplayTarget.style.height = `${window.innerHeight}px`;
    });
  }
}

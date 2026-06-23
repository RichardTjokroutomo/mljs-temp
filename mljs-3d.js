import * as mljs from "./index.js";

console.log(mljs);
console.log(Object.keys(mljs));

let spatial_scene = new mljs.SpatialScene();

console.log("SpatialScene initialized:", spatial_scene);

await spatial_scene.initialize_sessions("./model_binaries/depth_anything_v2_vits_quantized.onnx", "./model_binaries/migan_processed.onnx");

console.log("Sessions initialized!");


const containers = document.querySelectorAll(".mljs-container");
console.log(`len of containers: ${containers.length}`);
for (const container of containers) {
  console.log("processing image...")
  await spatial_scene.convert_single_image(container, 4);
  // convert_single_image sets position:relative inline, which overrides
  // Tailwind's "absolute" class and breaks the collage layout. Restore it.
  container.style.position = "absolute";
  console.log("finished processing image!");
}

console.log("all done!");
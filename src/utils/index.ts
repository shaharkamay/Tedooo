export function getAverageRgb(img: string) {
  const context = document.createElement("canvas").getContext("2d");
  const src = img;
  const imgElement = new Image();
  imgElement.setAttribute("crossOrigin", "");
  imgElement.src = src;
  if (context) {
    context.imageSmoothingEnabled = true;
    context.drawImage(imgElement, 0, 0, 1, 1);
  } else {
    console.error("Failed to get 2D context");
    return null;
  }

  return context!.getImageData(0, 0, 1, 1).data.slice(0, 3);
}

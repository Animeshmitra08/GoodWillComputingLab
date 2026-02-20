// utils/preloadAssets.ts

// This will automatically import ALL assets in the folder
// const imageModules = import.meta.glob(
//   "../assets/**/*.{png,jpg,jpeg,webp,svg,gif}",
//   { eager: true, as: "url" }
// );

// const videoModules = import.meta.glob(
//   "../assets/**/*.{mp4,webm,mov}",
//   { eager: true, as: "url" }
// );

// Import ALL assets as URLs (new Vite syntax)
const imageModules = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,svg,gif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const videoModules = import.meta.glob(
  "../assets/**/*.{mp4,webm,mov}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


// const imageAssets: string[] = Object.values(imageModules);
// const videoAssets: string[] = Object.values(videoModules);

const imageAssets: string[] = Object.values(imageModules) as string[];
const videoAssets: string[] = Object.values(videoModules) as string[];

const loadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed image: ${src}`));
  });

const loadVideo = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const vid = document.createElement("video");
    vid.src = src;
    vid.preload = "auto";
    vid.onloadeddata = () => resolve();
    vid.onerror = () => reject(new Error(`Failed video: ${src}`));
  });

const preloadAssets = () => {
  const imagePromises = imageAssets.map(loadImage);
  const videoPromises = videoAssets.map(loadVideo);

  return Promise.all([...imagePromises, ...videoPromises]);
};

export default preloadAssets;
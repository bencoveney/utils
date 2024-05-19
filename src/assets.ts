/**
 * Asynchronously loads a HTMLImageElement with the specified src, and resolves once the image has been loaded.
 * @param source The src for the image to load.
 * @returns The loaded image.
 */
export async function loadImage(source: string): Promise<HTMLImageElement> {
  return await new Promise<HTMLImageElement>((resolve) => {
    const loader = new Image();
    function onLoad() {
      loader.removeEventListener("load", onLoad);
      resolve(loader);
    }
    loader.src = source;
    loader.addEventListener("load", onLoad);
  });
}

/**
 * Asynchronously loads a AudioBuffer with the specified src, and resolves once the audio has been loaded.
 * @param audioContext The audioContext to load the audio within.
 * @param source The src for the audio to load.
 * @returns The loaded audio buffer.
 */
export async function loadAudio(
  audioContext: AudioContext,
  source: string
): Promise<AudioBuffer> {
  return await new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", source, true);
    request.responseType = "arraybuffer";
    request.onload = function () {
      audioContext.decodeAudioData(request.response, resolve, reject);
    };
    request.send();
  });
}


const speakAzure = async (
  text: string,
  { lang = "es-ES", voice = "es-ES-AlvaroNeural" } = {}
) => {
  const AZURE_CONFIG = {
    speechKey: "abd0eedc8c8645a78a050e3abb35e646",
    speechRegion: "chinaeast2",
    ttsUrl: "https://chinaeast2.tts.speech.azure.cn/cognitiveservices/v1",
  };

  const ssml = `
    <speak version="1.0" xml:lang="${lang}">
      <voice xml:lang="${lang}" name="${voice}">
        ${text}
      </voice>
    </speak>
  `.trim();

  try {
    const response = await fetch(AZURE_CONFIG.ttsUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_CONFIG.speechKey,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-32kbitrate-mono-mp3",
      },
      body: ssml,
    });

    if (!response.ok) throw new Error("Azure TTS 请求失败");

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
    // 自动释放URL对象
    audio.onended = () => URL.revokeObjectURL(url);
  } catch (e) {
    // 控制台打印错误，不抛出以防止影响游戏流程
    console.error("[AzureTTS] 播放失败：", e);
  }
};

export { speakAzure };

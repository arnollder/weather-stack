import type { IWeatherResponse } from "~/types";

export const useWeatherWidget = (lat: string, lon: string, apiKey: string) => {
  const weatherData = ref<IWeatherResponse>();
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchWeather = async () => {
    isLoading.value = true;
    isError.value = false;
    try {
      const data = await $fetch<IWeatherResponse>(
        "weather?",
        {
          baseURL: "https://pro.openweathermap.org/data/2.5/",
          timeout: 10000,
          params: {
            lat: `${lat}`,
            lon: `${lon}`,
            appid: `${apiKey}`,
            units: "metric",
            lang: "ru",
          },
        },
      );
      weatherData.value = data
    } catch (err: unknown) {
      console.error(err);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  fetchWeather();

  return {
    isLoading,
    isError,
    weatherData,
    refetch: fetchWeather,
  };
};


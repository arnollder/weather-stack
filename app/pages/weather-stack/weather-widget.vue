<template>
  <div class="weather-info">
    <div v-if="isLoading">загрузка виджета...</div>
    <div v-else-if="isError">ошибка загрузки</div>
    <template v-else>
      <h3>{{ weatherData?.name }}</h3>
      <div class="weather-main">
        <p class="temp">{{ temp }}°C</p>
        <p>(ощущается: {{ feels_like }}°C)</p>
        <div class="weather-details">
          <div>💨 Ветер: {{ windSpeed }} м/с</div>
          <div>☁️ Облачность: {{ clouds }}%</div>
          <div>💧 Влажность: {{ humidity }}%</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IWeatherResponse, IWeatherWidgetProps } from "~/types";
import { useWeatherWidget } from "./use-weather-widget";

const props = defineProps<IWeatherWidgetProps>();
const { isLoading, isError, weatherData } = useWeatherWidget(props.lat, props.lon, props.apiKey);


// ===== вычисляемые константы для отрисовки =====
const cityName = computed(() =>
  weatherData.value?.name ? weatherData.value.name : "Город не найден",
);
const temp = computed(() =>
  weatherData.value?.main?.temp ? Math.round(weatherData.value.main.temp) : "-",
);
const feels_like = computed(() =>
  weatherData.value?.main?.feels_like
    ? Math.round(weatherData.value.main.feels_like)
    : "-",
);
const windSpeed = computed(() =>
  weatherData.value?.wind.speed ? weatherData.value?.wind.speed : "-",
);
const clouds = computed(() =>
  weatherData.value?.clouds.all ? weatherData.value?.clouds.all : "-",
);
const humidity = computed(() =>
  weatherData.value?.main.humidity ? weatherData.value?.main.humidity : "-",
);
</script>

<style scoped>
.weather-info {
  height: 320px;
  width: 280px;
  padding: 25px 20px;
  border-radius: 15px;
  color: aliceblue;
  background: linear-gradient(rgb(52, 132, 252), rgb(39, 155, 4));

  text-align: center;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.weather-info_dark {
  background: linear-gradient(rgb(111, 113, 121), rgb(24, 24, 26));
}
h3 {
  padding: 10px 15px;
  font-size: 24px;
  border: 1px solid white;
  border-radius: 15px;
}
.temp {
  font-size: 56px;
}
.weather-details {
  margin-top: 20px;
}
</style>

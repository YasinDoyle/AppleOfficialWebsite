<template>
  <div class="container">
    <!--button-container根据属性改变位置-->
    <div class="button-container">
      <button
        class="description-button"
        @click="navigateTo(props.descriptionLink)"
      >
        {{ props.descriptionText }}
      </button>
      <button class="shop-now-button" @click="navigateTo(props.shopNowLink)">
        {{ props.shopNowText }}
      </button>
      <img
        :src="props.productImgSrc"
        alt="product-image"
        class="product-image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from "vue";
import { useRouter } from "vue-router";
interface Props {
  descriptionText: string;
  shopNowText: string;
  productImgSrc: string;
  buttonPosition?: "top" | "bottom";
  descriptionLink?: string;
  shopNowLink?: string;
  showShopNow?: boolean;
  showDescription?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  buttonPosition: "top",
  descriptionText: "",
  shopNowText: "",
  showShopNow: true,
  showDescription: true,
});

const router = useRouter();

const navigateTo = (url: string) => {
  if (!url) return;
  if (url.startsWith("http//") || url.startsWith("https://")) {
    window.open(url, "_blank");
  } else {
    router.push(url);
  }
};
</script>

<style></style>

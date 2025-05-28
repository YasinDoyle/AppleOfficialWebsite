<template>
  <div class="unit-wrapper split-copy-wrapper">
    <a class="unit-link"></a>
    <!--button-container根据属性改变位置-->
    <div class="unit-copy-wrapper">
      <div class="split-wrapper-top">
        <h2 class="headLine">HeadText</h2>
        <p class="subhead">subhead</p>
        <div class="cta-link">
          <a
            class="button button-elevated button-primary"
            @click="navigateTo(props.descriptionLink)"
            v-if="props.showDescription"
          >
            {{ props.descriptionText }}
          </a>
          <a
            class="button button-elevated button-tertiary"
            @click="navigateTo(props.shopNowLink)"
            v-if="props.showShopNow"
          >
            {{ props.shopNowText }}
          </a>
        </div>
      </div>
    </div>
    <div class="unit-image-wrapper">
      <figure class="unit-image"></figure>
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

<style>
.unit-wrapper {
  height: var(--content-height);
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  overflow: hidden;
  background: #f5f5f7;
}

.button {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 17px;
  min-width: 28px;
  padding: 21px 11px;
  border-radius: 980px;
}
</style>

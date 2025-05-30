<template>
  <div class="unit-wrapper">
    <a class="unit-link"></a>
    <!--button-container根据属性改变位置-->
    <div class="unit-copy-wrapper">
      <div class="split-wrapper-top">
        <h2 class="headLine">{{ props.headText }}</h2>
        <p class="subhead">{{ props.headText }}</p>
        <div class="cta-links">
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
  headText: string;
  subheadText: string;
  buttonPosition?: "top" | "bottom";
  descriptionLink?: string;
  shopNowLink?: string;
  showShopNow?: boolean;
  showDescription?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  buttonPosition: "top",
  descriptionLink: "",
  shopNowLink: "",
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

<style lang="scss" scoped>
.unit-wrapper {
  height: var(--content-height);
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  overflow: hidden;
  background: #f5f5f7;

  .unit-link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .unit-copy-wrapper {
    padding-bottom: 61px; //需要响应式处理
    padding-top: 61px; //需要响应式处理
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    flex-grow: 0;
    z-index: 4;
    pointer-events: none;
    text-align: center;
    -webkit-box-flex: 0;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;

    .split-wrapper-top {
      width: 100%;
      .headLine {
        font-size: 48px;
        font-weight: 600;
        line-height: 1.08349;
        letter-spacing: -0.002em;
        color: #1d1d1f;
        text-align: center;
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
      }
      .subhead {
        margin-top: 5px;
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 400;
        letter-spacing: 0.009em;
        color: #1d1d1f;
        text-align: center;
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
      }
      .cta-links {
        margin-top: 18px;
        display: inline-block;
        text-align: center;

        .button {
          cursor: pointer;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          font-size: 17px;
          min-width: 28px;
          padding: 21px 11px;
          border-radius: 980px;
          background-color: #0071e3;
          color: #fff;
          border-color: rgba(0, 0, 0, 0);
        }

        .button-elevated {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.17648;
          letter-spacing: -0.002em;
          border-style: solid;
          border-width: 1px;
          min-width: 28px;
          padding: 21px 11px;
        }

        .button-tertiary {
          background: rgba(0, 0, 0, 0);
          color: #06c;
          border-color: #06c;
        }
      }
    }

    .unit-image-wrapper {
      z-index: 1;
      overflow: visible;
      -webkit-box-flex: 1;
      flex-grow: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .unit-image {
        background-image: url("");
      }
    }
  }
}
</style>

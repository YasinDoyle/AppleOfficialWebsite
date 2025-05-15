<template>
  <div id="globalheader">
    <!--aside不明确-->
    <aside></aside>
    <!--导航栏-->
    <nav id="globalnav">
      <div class="globalnav-content">
        <!--返回键-->
        <div class="globalnav-item globalnav-menuback"></div>
        <ul id="globalnav-list" class="globalnav-list">
          <li class="globalnav-item globalnav-item-apple"></li>
          <li
            class="globalnav-item globalnav-menu"
            v-for="item in navbarSubmenuInfo"
          >
            <div
              class="globalnav-item globalnav-item-store globalnav-item-menu globalnav-item-submenu"
            >
              <router-link :to="item.link" class="nav-link">
                {{ item.text }}</router-link
              >
            </div>
          </li>
          <li class="globalnav-item globalnav-search shift-0-1"></li>
          <li class="globalnav-item globalnav-bag"></li>
        </ul>
        <!--小窗口下弹出-->
        <div class="globalnav-menutrigger"></div>
      </div>
    </nav>
    <!--curtain意义不明-->
    <div id="globalnav-curtain"></div>
    <!--placeholder unknown-->
    <div id="globalnav-placeholder"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

var navbarSubmenuInfo = ref({
  Store: {
    text: "Store",
    link: "/store",
    subMenu: {
      Shop: {},
      QuickLinks: {},
      ShopSpecialStore: {},
    },
  },
  Mac: {
    text: "Mac",
    link: "/mac",
    subMenu: {},
  },
  iPad: {
    text: "iPad",
    link: "/ipad",
    subMenu: {},
  },
  iPhone: {
    text: "iPhone",
    link: "/iphone",
    subMenu: {},
  },
  Watch: {
    text: "Watch",
    link: "/watch",
    subMenu: {},
  },
  Vision: {
    text: "Vision",
    link: "/vision",
    subMenu: {},
  },
  AirPods: {
    text: "AirPods",
    link: "/airpods",
    subMenu: {},
  },
  TVHome: {
    text: "TV&Home",
    link: "/tv&home",
    subMenu: {},
  },
  Entertainment: {
    text: "Entertainment",
    link: "/entertainment",
    subMenu: {},
  },
  Accessories: {
    text: "Accessories",
    link: "/accessories",
    subMenu: {},
  },
  Support: {
    text: "Support",
    link: "/support",
    subMenu: {},
  },
});
</script>

<style scoped lang="scss">
.globalnav-list {
  cursor: default;
  margin: 0 -8px;
  width: auto;
  height: 44px;
  display: flex;
  justify-content: space-between;
  user-select: none;
  list-style: none;
}

.nav-link {
  color: #f80c0c;
  font-size: 16px;
  font-weight: 500;
}
</style>

<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            path: '/dashboard',
            icon: 'ni ni-tv-2 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
                :link="{
                  name: 'Image Rotator',
                  path: '/image-rotator',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
                :link="{
                  name: 'Tabbed Content',
                  path: '/tabbed-content',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
                :link="{
                  name: 'Text Search',
                  path: '/text-search',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
                :link="{
                  name: 'Pop-up',
                  path: '/pop-up',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        <sidebar-item
                :link="{
                  name: 'Table',
                  path: '/table',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>

        
        <sidebar-item
                :link="{
                  name: 'Mockup',
                  path: '/mockup',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      DashboardContent,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>

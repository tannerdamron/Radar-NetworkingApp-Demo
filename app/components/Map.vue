<template>
  <!-- <Page class="page">
    <ActionBar title="Profile">
    </ActionBar>
    <StackLayout dock="top" height="90%" width="100%" style="">
      <Label text="Proficient in: JS, C#, Vue, Angular, NativeScript" />
      <Button  text="Logout" class="logout" @tap="logoutApp()" />
    </StackLayout>
  </Page> -->
  <Page class="page">
        <!-- <ActionBar class="action-bar" title="People Around You">
            <NavigationButton visibility="collapsed"></NavigationButton>
        </ActionBar> -->
        <GridLayout>
                <Mapbox
                    accessToken="sk.eyJ1IjoiZmZkc2F0diIsImEiOiJjanVsbGozMW8yOGVqNGV1anp6MXozNGM2In0.KZi-vKWWuC_WB-awjLwauQ"
                    mapStyle="traffic_day"
                    latitude="47.609193"
                    longitude="-122.337516"
                    hideCompass="true"
                    zoomLevel="15"
                    showUserLocation="true"
                    disableZoom="false"
                    disableRotation="false"
                    disableScroll="false"
                    disableTilt="false"
                    @mapReady="onMapReady($event)">
                </Mapbox>
        </GridLayout>
        <!-- <Button  text="Logout" class="logout" @tap="logoutApp()" /> -->
    </Page>
</template>

<script>
import LoginPage from "./LoginPage.vue";
import {mapState} from "vuex";
import * as utils from "utils/utils";
import Vue from "nativescript-vue";
import Kenny from './Kenny';
import Tanner from './Tanner';
import Young from './Young';
import Clara from './Clara';
import Aaron from './Aaron';
import Shawn from './Shawn';
// import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
// Vue.use(RadSideDrawer);
export default {
  data () {
            return { };
        },
  computed: {
    ...mapState(["isLoggedIn"])    
  },
  methods: {
    logoutApp() {
      this.$authService.logout()
    },
    onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: 47.609211,
                        lng: -122.336946,
                        title: "Tanner, Javascript",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            this.$navigateTo(Tanner);
                        }
                    }
                ]);
                args.map.addMarkers([
                    {
                        lat: 47.609193, 
                        lng: -122.337516,
                        title: "Kenny, C#",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            this.$navigateTo(Kenny);
                        }
                    }
                ]);
                args.map.addMarkers([
                    {
                        lat: 47.607970,  
                        lng: -122.335671,
                        title: "Young, C#",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            this.$navigateTo(Young);
                        }
                    }
                ]);
                args.map.addMarkers([
                    {
                        lat: 47.608339,   
                        lng: -122.336899,
                        title: "Shawn, Angular",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            this.$navigateTo(Shawn);
                        }
                    }
                ]);
                args.map.addMarkers([
                    {
                        lat: 47.608504,  
                        lng: -122.337855,
                        title: "Clara, Javascript",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            this.$navigateTo(Clara);
                        }
                    }
                ]);
                args.map.addMarkers([
                    {
                        lat: 47.608685, 
                        lng: -122.339733,
                        title: "Aaron, Angular",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            this.$navigateTo(Aaron);
                        }
                    }
                ]);
            }
            // onOpenDrawerTap() {
            //     this.$refs.drawer.nativeView.showDrawer();
            // },

            // onCloseDrawerTap() {
            //     this.$refs.drawer.nativeView.closeDrawer();
            // }
  },
  watch: {
    isLoggedIn(val) {
      if (!val) {
        this.$navigateTo(LoginPage, { clearHistory: true });
      }
    }
  }
}
</script>

<style scoped>

</style>



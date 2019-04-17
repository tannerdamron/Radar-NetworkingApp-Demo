<template>
    <Page class="page">
        <ActionBar class="action-bar" title="People Around You">
            <NavigationButton visibility="collapsed"></NavigationButton>
        </ActionBar>
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
    </Page>
</template>

<script>
    import Kenny from './Kenny';
    import * as utils from "utils/utils";
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);
    export default {
        data () {
            return { };
        },
        methods: {
            onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: 47.609211,
                        lng: -122.336946,
                        title: "Tanner, Javascript",
                        subtitle: "Testing app",
                        onCalloutTap: () => {
                            utils.openUrl("https://www.thepolyglotdeveloper.com");
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
                            utils.openUrl("https://www.thepolyglotdeveloper.com");
                        }
                    }
                ]);
            },
            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },

            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
        }
    };
</script>

<style scoped></style>
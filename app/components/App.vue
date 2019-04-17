<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Vue Mapbox Example"></ActionBar>
        <GridLayout>
                <Mapbox
                    accessToken="sk.eyJ1IjoiZmZkc2F0diIsImEiOiJjanVsbGozMW8yOGVqNGV1anp6MXozNGM2In0.KZi-vKWWuC_WB-awjLwauQ"
                    mapStyle="traffic_day"
                    latitude="47.609193"
                    longitude="-122.337516"
                    hideCompass="true"
                    zoomLevel="12"
                    showUserLocation="false"
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
            }
        }
    };
</script>

<style scoped></style>
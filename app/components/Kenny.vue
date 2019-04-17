<template>
  <Page>
    <StackLayout>
      <Label text="Kenny" textWrap="true" />
      <Button text="Back" @tap="$navigateBack" />
      
    </StackLayout>
  </Page>
</template>

<script>
  export default {
      data() {
          return {
          };
      },
      methods: {
        alert(message) {
          return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message:message
          });
        }
      }  
  }

</script>

<style scoped>
  Page {
      margin: 0;
      background-image: url('~/assets/images/bg.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height:100%;
  }
</style>
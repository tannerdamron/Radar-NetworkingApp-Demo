<template>
  <Page class="page">
    <ActionBar title="Profile">
    </ActionBar>
    <StackLayout dock="top" height="90%" width="100%" style="">
      <Label text="Proficient in: JS, C#, Vue, Angular, NativeScript" />
      <Button  text="Logout" class="logout" @tap="logoutApp()" />
    </StackLayout>
  </Page>
</template>

<script>
import LoginPage from "./LoginPage.vue";
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState(["isLoggedIn"])    
  },
  methods: {
    logoutApp() {
      this.$authService.logout()
    }
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



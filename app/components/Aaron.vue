<template>
  <Page class="page">
    <ActionBar title="Profile">
    </ActionBar>
    <StackLayout dock="top" height="90%" width="100%" style="">
      <Image src="https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png" stretch="aspectFill" class="profilePic"></Image>
      <Label text="Aaron Taylor" color="#000" fontSize="24" fontWeight="bold" textAlignment="center" />
      <Label text="Location: Seattle, WA" class="profileText" />
      <Label text="GitHub Account" @tap="openGithub" class="clickLink profileText" />
      <Label text="LinkedIn" @tap="openLinkedin" class="clickLink profileText" />
      <Label text="Proficient in: JS, C#, Vue, Angular, NativeScript" class="profileText" />
      <Label text="Prefers: Vue & NativeScript" class="profileText" />
      <Label text="Hobbies: " class="profileText" textWrap="true" />
      <Label text="Occupation: Student at Epicodus" class="profileText" />
      <Button text="Message" @tap="messageModal" class="btn btn-primary"></Button>
    </StackLayout>
  </Page>
</template>

<script>
import {openUrl} from "utils/utils";
import Message from "./Message";
export default {
  data() {
            return {
              Message: Message
            };
        },
  methods: {
      openGithub() {
        openUrl("https://github.com/aaronaat");
      },
      openLinkedin() {
        openUrl("https://www.linkedin.com/in/aaron-taylor-1a62333a/");
      }
  }
}
</script>

<style scoped>
.page {
  background-image: linear-gradient(cornflowerblue, #D686EA);
}
.profilePic{
	width:150;
	height:150;
	border-radius:100;
	margin: 0 20 10 20;
	border-color: #4db8ff;
	border-width: 1;
}
.clickLink {
  text-decoration: underline;
  color: blue;
}
.profileText {
  width: 100%;
  font-size: 15px;
  margin: 15 0 15 15;
  font-weight: bold;
}
.btn-primary {
  background-color: cornflowerblue;
  border-radius: 50%;
}
</style>
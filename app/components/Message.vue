<template>
	<StackLayout class="p-20" backgroundColor="white">
		<TextField class="message" hint="Enter text..." />
    <Button class="btn btn-primary" text="Send Message" @tap="alert" />
		<Button class="btn2 btn btn-primary" text="Back" @tap="$modal.close()" />
	</StackLayout>
</template>

<script>
export default {
  methods: {
    alert() {
      alert({
        title: "",
        message: "Message Sent!",
        okButtonText: "OK"
      });
    }
  },
    data() {
        return {};
    }
};
</script>

<style scoped>
.p-20 {
  background-image: linear-gradient(cornflowerblue, #D686EA);
}
.message {
  margin-top: 30%;
  background-color: #CAECFF;
  padding: 10 4 10 4;
  border-radius: 10%
}
.btn-primary {
  margin-top: 40;
  background-color: cornflowerblue;
  border-radius: 50%;
  color: black;
}
.btn2 {
  margin-top: 60;
}
</style>

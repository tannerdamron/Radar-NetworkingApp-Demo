<template>
    <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <StackLayout class="container">
            <Label text="Login" textWrap="true" class="header"/>
            
            <FlexboxLayout alignItems="center" class="border-bottom">
              <TextField hint="Username" class="form-input" v-model="user.username"/>
            </FlexboxLayout>

            <FlexboxLayout alignItems="center" class="border-bottom">
              <TextField hint="Password" class="form-input" v-model="user.password"/>
            </FlexboxLayout>
            <Button text="Login" class="login" @tap="submit"/>
            <Button text="Back" class="back" @tap="$navigateBack"/>
        </StackLayout>
    </Page>
</template>

<script>
const userService = {
  login(user) {
    return Promise.resolve(user);
  }
};

import Map from './Map';
  
  export default {
      data() {
          return {
            user: {
              username:"foo",
              password: "foo"
            }
          };
      },
      methods: {
        submit() {
          if(!this.user.username || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
          }
          this.login();
        },

        login() {
          userService
            .login(this.user)
            .then(() => {
              this.$navigateTo(Map);
            })
            .catch(() => {
              this.alert("Couldnt find account");
            })
        },

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

    .header {
      font-size: 70px;
      text-align:center;
      padding-top: 100;
      padding-bottom: 50;
    }

    .login {
      background-color:cornflowerblue;
      color: white;
      height: 50;
      width:75%;
      font-size: 24px;
      margin-top: 40;
      margin-bottom: 20;
      border-radius: 10;
    }

    .back {
      background-color:mediumseagreen;
      color:white;
      height: 50;
      width: 75%;
      font-size: 24px;
      border-radius: 10;
    }

    .border-bottom {
      margin-top: 20;
      border-bottom-color: white;
      border-bottom-width: 1;
      padding-bottom: 8;

    }

    .form-input {
      color:white;
    }

    .container {
      margin-left: 50;
      margin-right: 50;
    }
</style>



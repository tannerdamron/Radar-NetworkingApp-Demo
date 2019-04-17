<template>
    <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <StackLayout row="1">
            <Label text="BlaBlaa" textWrap="true" class="header"/>
            <Button text="Login" class="login" @tap="$navigateTo(Login)"/>
            <Button text="Signup" class="signup" @tap="$navigateTo(Signup)"/>
        </StackLayout>
    </Page>
</template>

<script>
import Login from './Login';
import Signup from './Signup';

    export default {
        data() {
            return {
                Login: Login,
                Signup: Signup
            };
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
        text-align: center;
        padding-top: 200;
        padding-bottom: 50;
    }

    .login {
        background-color:cornflowerblue;
        color: white;
        height: 50;
        width:60%;
        font-size: 24px;
        margin-bottom: 20;
        border-radius: 10;
    }

    .signup {
        background-color:mediumseagreen;
        color:white;
        height: 50;
        width: 60%;
        font-size: 24px;
        border-radius: 10;
    }
</style>



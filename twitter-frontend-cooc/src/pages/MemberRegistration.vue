<template>
  <div>
    <h1>ss</h1>
    <div v-if="errorMessages.length !== 0">
      <p v-for="errorMessage in errorMessages" :key="errorMessage">{{ errorMessage }}</p>
    </div>
    <h1>ss</h1>
    <form action="" method="get" class="form-example">
      <div class="form-example">
        <label for="name">Enter your name: </label>
        <input v-model="userName" class="input-text" type="text">
      </div>
      <div class="form-example">
        <label for="email">Enter your email: </label>
        <input v-model="mailAddress" class="input-text" type="text">
      </div>
      <div class="form-example-button">
        <button type="submit" value="登録" v-on:click="onclick()">登録</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { errorMessages } from '../consts/error-message'

import { MemberRegistrationApi } from '../api/member-registration-api'

export default defineComponent({
  data(): {
    userName: string,
    errorMessages: string[],
    mailAddress: string,
    mailAddressJudgement: string,
  } {
    return {
      errorMessages: [],
      userName: "inoueMifu",
      mailAddress: "inogan38@gmail.com",
      mailAddressJudgement: '/^[a-zA-Z0-9_+-]+([a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*)+[a-zA-Z]{2,}$/'
    }
  },

  methods: {
    // 登録ボタン押下時の処理
    async onclick() {
      console.log('登録ボタン押下時の処理')

      // パラメーターチェック
      console.log('パラメーターチェック')
      this.parameterCheck();

      // パラメーターチェックエラーがあった場合再度入力を要求
      if (this.$data.errorMessages.length !== 0) return;

      // 会員登録API呼出し
      console.log('')
      // await this.memberRegistrationApi();

      // 会員登録APIのレスポンスデータにエラーがあった場合、エラー文を表示
      // if (this.$data.errorMessages) return;

      // TOPページに画面遷移
      console.log('')
      this.$router.push('/ModeSelect')
    },

    // ユーザー名、メールアドレスの入力チェック
    parameterCheck() {
      this.$data.errorMessages = []
      // ユーザー名未入力チェック
      if (!this.$data.userName) {
        this.$data.errorMessages.push(errorMessages.userNameNotEnterdError)
      }

      // ユーザー名文字数チェック
      if (this.$data.userName.length <= 5) {
        this.$data.errorMessages.push(errorMessages.userNameWordCountError)
      }

      // ユーザー名文字数チェック
      if (this.$data.userName.length >= 21) {
        this.$data.errorMessages.push(errorMessages.userNameWordCountError)
      }
      // メールアドレス未入力チェック
      if (!this.$data.mailAddress) {
        this.$data.errorMessages.push(errorMessages.mailAddressNotEnterdError)
      }

      // メールアドレス入力チェック
      if (this.$data.mailAddressJudgement.match(this.$data.mailAddress)) {
        this.$data.errorMessages.push(errorMessages.mailAddressBadValueError)
      }
      console.log('入力チェックエラー')
      console.log(this.$data.errorMessages)
    },

    // 会員登録APIを呼び出す処理
    async memberRegistrationApi() {

      // 会員登録API呼出し
      const memberRegistrationResponse = await MemberRegistrationApi.memberRegistration(this.$data.userName, this.$data.mailAddress);

      // 登録完了フラグが false(未完了) だった場合エラー文を表示する
      // if (memberRegistrationResponse.registrationCompletionFlag === false) {
      //   this.$data.errorMessages.push(memberRegistrationResponse.errorMessages);
      // }
    }
  }
});
</script>

<style scoped>
form.form-example {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
}

div.form-example {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

.input-text {
  width: 200px;
}


label {
  padding-right: 10px;
}
</style>

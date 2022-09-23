<template>
  <BrokerBar></BrokerBar>

  <main class="trade-page">
    <div class="tradePageContainer">
      <h2>Trade Page</h2>
    </div>

    <div class="top">
      <section class="form">
        <div class="field">
          <input
            class="radio"
            type="radio"
            id="buy"
            value="BUY"
            v-model="tradeData.action"
          />
          <label for="buy">Buy</label>

          <input
            class="radio"
            type="radio"
            id="sell"
            value="SELL"
            v-model="tradeData.action"
          />
          <label for="sell">Sell</label>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input"
              v-model="tradeData.symbol"
              type="text"
              placeholder="Symbol"
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              class="input"
              v-model="tradeData.price"
              type="number"
              placeholder="Limit Price"
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="tradeData.qty"
              placeholder="Quantity"
            />
          </div>
        </div>
        <a @click="SendTrade({tradeData})" class="sendTradeBtn">Trade</a>
      </section>
    </div>

    <div class="bottom">
      <textarea
        class="consoleLog"
        readonly
        @change="scrollToBottom"
        v-model="consoleLogText"
      ></textarea>
    </div>
  </main>
</template>

<script>
import BrokerBar from "../components/BrokerBar";
import { ref } from "vue";

var consoleLogText = ref("");

export default {
  scrollToBottom() {
    const container = this.$el.querySelector("#consoleLogTA");
    container.scrollTop = container.scrollHeight;
    console.log("scroll to botton say woot");
  },
  dataFieldClass: function (e) {
    // const element = e.target;
    e.value = "bub";
    e.scrollTop = e.scrollHeight;
    console.log("datafieldcalss say woot");
  },
  components: {
    BrokerBar,
  },
  data() {
    return {
      consoleLogText,
      tradeData: {
        action: "BUY",
        qty: null,
        symbol: null,
        price: null,
      },
    };
  },
  methods: {
    SendTrade(tradeData) {
      // `this` inside methods points to the current active instance
      consoleLogText.value = "";
      window.electronAPI.runTrade(JSON.parse(JSON.stringify(tradeData.tradeData)));
    },
  },
};

window.electronAPI.handleinfoConsole((event, value) => {
  consoleLogText.value = consoleLogText.value + value + "\n";
});
</script>

<style>
.bottom {
  height: 400px;
}

.consoleLog {
  height: 100%;
}

.tradePageContainer {
  display: flex;
}
textarea {
  width: 100%;
  resize: none;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}

.field {
  margin: auto;
  /* width: 200px; */
  padding: 5px;
}
.input {
  padding: 5px;
  width: 100%;
  text-align: center;
}

.label {
  font-weight: bold;
}
.radio {
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 20px;
}

.form {
  display: flex;
}
.sendTradeBtn {
  padding: 10px 60px;
  background-color: aqua;
  margin: 20px;
}
</style>
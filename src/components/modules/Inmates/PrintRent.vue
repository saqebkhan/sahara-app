<template>
  <div v-if="store.isLoading">Loading...</div>
  <div v-else-if="!store.isLoading && payslipData" class="payslip">
    <img class="watermark" :src="saharaLogo" alt="Your Company" />
    <h1 class="title">SAHAR BOYS HOSTEL</h1>
    <div class="address">
      <p>
        Near Hassan Hotel, Piller Number 8, Mehdipatnam, Hyderabad - 500 028
      </p>
      <p></p>
    </div>
    <div class="features">
      <ul style="margin-right: 20px">
        <li><strong>Homely Environment</strong></li>
        <li><strong>Laundry Service</strong></li>
      </ul>
      <ul>
        <li><strong>Healthy & Hygienic Mess</strong></li>
        <li><strong>24 hours Hot & Cold Water Supply</strong></li>
        <li><strong>Wifi Throughout the Building</strong></li>
      </ul>
    </div>
    <div class="details">
      <table>
        <tr>
          <td>
            <strong>Application id:</strong>
          </td>
          <td>123</td>
        </tr>
        <tr>
          <td>
            <strong>Date:</strong>
          </td>
          <td>{{ new Date() }}</td>
        </tr>
        <tr>
          <td>
            <strong>Name:</strong>
          </td>
          <td>{{ payslipData.name }}</td>
        </tr>
        <tr>
          <td>
            <strong>Paid month:</strong>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <strong>Date of joining:</strong>
          </td>
          <td>{{ payslipData.dateOfJoining }}</td>
        </tr>
        <tr>
          <td>
            <strong>Contact numnber:</strong>
          </td>
          <td>{{ payslipData.contactNumber }}</td>
        </tr>
        <tr>
          <td>
            <strong>Paid amount:</strong>
          </td>
          <td>{{ payslipData.monthlySubscriptionAmount }}</td>
        </tr>
      </table>
    </div>
    <div class="signature">
      <p>Signature of Customer:</p>
      <p>Signature of Manager:</p>
    </div>
  </div>
</template>

<script setup>
import saharaLogo from "@/assets/sahara-logo.png";
import { useRoute } from "vue-router";
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useStore } from "@/store";

const store = useStore();

const route = useRoute();
const payslipData = ref(null);

onBeforeMount(() => {
  const idValue = route.query.id;
  try {
    store.isLoading = true;
    axios
      .get("https://sahara-api-f8yp.vercel.app/allInmates")
      .then((response) => {
        payslipData.value = response.data.find((item) => item._id === idValue);
      });
    console.log(payslipData.value);
  } catch (e) {
    console.log(e);
  } finally {
    store.isLoading = false;
  }
});
</script>

<style scoped>
.payslip {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  position: relative;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.features {
  display: flex;
  margin-bottom: 20px;
  margin-left: 50px;
}

ul {
  padding: 0;
}

li {
  list-style: inside;
}

.address {
  margin-bottom: 20px;
}

.details {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
}

.signature {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.footer {
  margin-top: 20px;
}

.footer p {
  margin: 5px 0;
}

.watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
}
</style>

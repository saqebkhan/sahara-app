<template>
  <div class="payslip">
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
import saharaLogo from "../../../assets/sahara-logo.png";

const payslipData = {
  name: "Saqeb Khan",
  fatherName: "Abdul Samad Khan",
  email: "dsds",
  permanentAddress: "Aurangabad",
  contactNumber: "8788566695",
  parentsContactNumber: "9765755151",
  emergencyContactNumber: "8421297867",
  placeOfWorkOrStudy: "Gachibowli",
  dateOfJoining: "01/02/2024",
  aadharNumber: "714197273551",
  expectedDateOfLeaving: "31/03/2024",
  amountDeposited: "2000",
  monthlySubscriptionAmount: "6500",
  roomNumber: "9",
  bedNumber: "4",
  saharaHostelNumber: "Sahara 1",
  bikeRegistrationNumber: "No",
  permanentAddressPincode: "we",
};
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

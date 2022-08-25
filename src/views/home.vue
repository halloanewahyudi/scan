<template>

    <div id="qr-code-full-region"></div>
</template>

<script>
import { Html5QrcodeScanner } from "html5-qrcode";
export default {
  data() {
    return {
      message: [],
      pesan:""
    };
  },
  methods: {
    creatScan() {
      const config = { fps: 10, qrbox: 250 };
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-code-full-region",
        config
      );
      html5QrcodeScanner.render(this.onScanSuccess);
    },
    onScanSuccess(decodedText, decodedResult) {
       const obj = { decodedResult: decodedResult };
      this.message.push(obj); 
      if(decodedText === "ane7868$%" ){
        this.pesan = "berhasil"
        this.$router.push('berhasil')
      } else {
         this.pesan = "gagal"
         this.$router.push('gagal')
      }
   console.log(this.pesan)
      
    },
  },
  async mounted() {
    this.creatScan();
  },
};
</script>
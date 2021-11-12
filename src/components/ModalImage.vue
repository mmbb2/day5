<template>
    <div class="modal-mask" @click="closeModal">
            <div class="modal-container">
                <div class="modal-image">
                    <img :src="img" alt="">
                </div>
            </div>
    </div>
    
</template>
<script>
export default {
    props: {
        img: '',
        closeModal: null
    }
    
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
   display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  
}
</style>
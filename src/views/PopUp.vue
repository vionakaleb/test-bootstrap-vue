<template>
  <div class="mt-5 p-5" id="PopUp">
    <button
      type="button"
      class="btn btn-primary"
      @click="showModal"
    >
      Normal Modal
    </button>

    <button
      type="button"
      class="btn btn-warning"
      @click="showModal2"
    >
      Big Modal
    </button>

    <button
      type="button"
      class="btn btn-success"
      @click="showModal3"
    >
      Small Modal
    </button>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    <Modal2
      v-show="isModal2Visible"
      @close="closeModal"
    />
    <Modal3
      v-show="isModal3Visible"
      @close="closeModal"
    />
  </div>
</template>

<script>
  import Modal from './Pages/PopUpModal';
  import Modal2 from './Pages/PopUpModal2';
  import Modal3 from './Pages/PopUpModal3';

  export default {
    name: 'PopUp',
    components: {
      Modal,
      Modal2,
      Modal3
    },
    data() {
      return {
        isModalVisible: false,
        isModal2Visible: false,
        isModal3Visible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      showModal2() {
        this.isModal2Visible = true;
      },
      showModal3() {
        this.isModal3Visible = true;
      },
      closeModal() {
        this.isModalVisible = false;
        this.isModal2Visible = false;
        this.isModal3Visible = false;
      },
    }
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" id="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
      <header class="modal-header w-100 text-center" id="modalTitle">
        <slot name="header">
          Big Modal
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Tutup Modal"
        >
          x
        </button>
      </header>

      <section class="modal-body w-100 text-center" id="modalDescription">
        <slot name="body">
          Deskripsi BIG...
        </slot>
       </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green"
          @click="close"
          aria-label="Close modal"
        >
          Tutup Modal
        </button>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: fixed;
    width: 70vw;
    height: 70vh;
    top: 10vh;
    left: 15vw;
    background: #ca4848;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.animate2 {
      transform:scale(1);
      .modal-backdrop {
        background:rgba(0,0,0,.0);
        animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        .modal {
          opacity:0;
          animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
      + .content {
        animation: scaleBack .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #fff;
    justify-content: space-between;
  }

  .modal-footer {
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #000;
    background: transparent;
  }

  .btn-green {
    color: #000;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
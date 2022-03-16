<template>
  <!-- self indicates that , if click occurs in backdrop class it will not work-->
  <div class="backdrop" @click.self="closeModal">
    <!-- adding class name sale via props -->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>

      <div class="actions">
        <!-- specific name slot -->
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
//registering or  passing object of props from app.vue ....this section will recieve the props
export default {
  props: ["theme"], //  recieving props obj
  methods: {
    //closing the modal
    closeModal() {
      this.$emit(
        "close"
      ); /* $emit is a custom event we are creating with the name 'close'
            which will recieve by parrent component App.vue */
    },
  },
};
</script>

<style >
.modal .actions {
  margin: 30px 0 10px 0;
  text-align: center;
}
.actions a {
  color: rgb(5, 5, 5);
  padding: 8px;
  border: 1px solid rgb(184, 41, 41);
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal {
  width: 40%;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: aqua;
  border: none;
  padding: 0;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale.h1 {
  color: white;
}
</style>
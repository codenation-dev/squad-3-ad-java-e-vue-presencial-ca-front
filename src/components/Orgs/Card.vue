<template>
  <div class="container">
    <div class="row">
      <div class="card card-signin">
        <div class="card-body">
          <h5 class="card-title text-center">
            <template v-if="title">{{ title }}</template>
            <slot name="logo"></slot>
          </h5>
          <h6 v-if="subtitle" class="card-subtitle mb-2 text-muted">
            {{ subtitle }}
          </h6>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  }
};
</script>
<style scoped>
.card {
  width: 445px;
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 1.3rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  height: 100px;
  margin-bottom: 0;
}
</style>

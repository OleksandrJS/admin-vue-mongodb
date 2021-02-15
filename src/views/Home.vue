<!-- @format -->

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <Card
          class="col-12 col-md-4 d-flex justify-content-center mt-md-5 mt-3"
        />
        <Card
          class="col-12 col-md-4 d-flex justify-content-center mt-md-5 mt-3 "
        />
        <Card
          class="col-12 col-md-4 d-flex justify-content-center mt-md-5 mt-3 "
        />
        <Card
          class="col-12 col-md-4 d-flex justify-content-center mt-md-5 mt-3 "
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default {
  name: 'Home',
  components: { Navbar, Card },
};
</script>
